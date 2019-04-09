const BASE_URL = 'https://weather-app-rails.herokuapp.com'

const todaysDate = document.getElementById('todays-date')
todaysDate.textContent = new Date()

const searchBar = document.getElementById('location')
const submitForm = document.getElementById('location-form')
const submitButton = document.getElementById('location-submit')
const weatherDisplay = document.getElementById('weather-display')

submitForm.addEventListener('submit', (ev) => {
  ev.preventDefault();
  console.log('form submit:', ev.target)
  debugger
})

// submitButton.addEventListener('click', (ev) => {
//   ev.preventDefault()
  
//   console.log('target:', ev.target)

//   let locationQuery = searchBar.value
//   fetch(BASE_URL + '/location/' + locationQuery)
//   .then(res=>res.json())
//   .then(data => {
//     let latLng = getLatLng(data)
//     let lat = latLng.lat
//     let lng = latLng.lng
//     let formattedAddress = data.results[0].formatted_address

//     fetch(BASE_URL + `/weather?loc=${lat}_${lng}`)
//     .then(res=>res.json())
//     .then(data => {
//       console.log('weather:', data)
//       displayWeather(formattedAddress, data)
//     })
//   })
// })

function getLatLng(data) {
  // let lat = geometry.location.lat
  // let lng = geometry.location.lng
  let {lat, lng} = data.results[0].geometry.location
  return {lat, lng}
}

function displayWeather(address, weather) {
  clearWeatherDisplay()

  let temp = weather.currently.temperature
  let summary = weather.currently.summary

  let addressEl = document.createElement('h3')
  let tempEl = document.createElement('p')
  let summaryEl = document.createElement('p')

  addressEl.textContent = `Today's weather: ${address}`
  tempEl.textContent = temp
  summaryEl.textContent = summary

  // weatherDisplay.appendChild(tempEl)
  // weatherDisplay.appendChild(summaryEl)
  weatherDisplay.append(addressEl, tempEl, summaryEl)
}

function clearWeatherDisplay() {
  while (weatherDisplay.firstChild) {
    weatherDisplay.firstChild.remove()
  }
}

let statesList = document.getElementById('states')
statesList.getElementsByClassName('stats')