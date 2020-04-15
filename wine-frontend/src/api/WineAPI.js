const fetchWines = () => {
  return fetch(`https://cors-anywhere.herokuapp.com/https://wineapi-cp.herokuapp.com/wines`)
    .then((response) => response.json())
}

const fetchWineByID = (wineID) => {
  return fetch(`https://cors-anywhere.herokuapp.com/https://wineapi-cp.herokuapp.com/wines/${wineID}`)
    .then((response) => response.json())
}

const addWine = (wineObject) => {
  return fetch('https://cors-anywhere.herokuapp.com/https://wineapi-cp.herokuapp.com/wines/', {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify(wineObject)
  })
}

export default {
  fetchWineByID,
  fetchWines,
  addWine
}