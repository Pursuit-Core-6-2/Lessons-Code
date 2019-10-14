document.addEventListener('DOMContentLoaded', () => {
  configureInputListeners()    
})

function configureInputListeners() {
  getCountryInput().addEventListener('change', loadCountries)
}

function loadCountries() {
  const searchTerm = getCountryInput().value
  if (!searchTerm) { return }
  fetch("https://restcountries.eu/rest/v2/name/" + searchTerm)
      .then(response => {
          return response.json()
      })
      .then(countries => {
          removePreviousCards()
          countries.forEach(country => {
              createCardFromCountry(country)
          })
          return countries
      })
      .catch(error => {
          console.log(error)
      })
}

function getCountryInput() {
  const countryInput = document.querySelector('#countryNameInput')
  return countryInput
}

function getCountryContainer() {
  const countryContainer = document.querySelector('#countryContainer')
  return countryContainer
}

function removePreviousCards() {
  // https://stackoverflow.com/questions/3955229/remove-all-child-elements-of-a-dom-node-in-javascript
  const countryContainer = getCountryContainer()
  console.log(countryContainer.firstChild)
  while (countryContainer.firstChild) {
      countryContainer.removeChild(countryContainer.firstChild)
  }
}

function createCardFromCountry(country) {
  let newCard = document.createElement('div')
  newCard.className = "card"
  newCard.style = 'width: 300px'

  let flagImage = document.createElement('img')
  flagImage.src = `${country.flag}`
  flagImage.style = 'width:200px'

  newCard.appendChild(flagImage)

  let coutryNameHeader = document.createElement('h4')
  coutryNameHeader.innerText = `${country.name}`

  newCard.appendChild(coutryNameHeader)

  countryContainer.appendChild(newCard)
}
