class Character {
  #name
  #gender
  #birthYear
  #species
  #homeworld
  #vehicles
  #appearances

  constructor(data) {
    this.#name = data.name
    this.#gender = data.gender
    this.#birthYear = data.birth_year
    this.#species = data.species
    this.#homeworld = data.homeworld
    this.#appearances = data.films
    this.#vehicles = [...data.vehicles, ...data.starships]

    // Populate details to the DOM
    this.render()
  }

  render() {
    document.getElementById("name").innerText = this.#name
    document.getElementById("gender").innerText = this.#gender
    document.getElementById("birthYear").innerText = this.#birthYear

    // Fetch species name
    if (this.#species.length > 0) {
      this.#species = setProperty("name", this.#species[0])
      this.#species.then(
        res => {
          this.#species = res
          document.getElementById("species").innerText = this.#species
        }
      )
    } else {
      this.#species = "unknown"
      document.getElementById("species").innerText = this.#species
    }

    // Fetch homeworld name
    this.#homeworld = setProperty("name", this.#homeworld)
    this.#homeworld.then(
      res => {
        this.#homeworld = res
        document.getElementById("homeWorld").innerText = this.#homeworld
      }
    )

    // Fetch vehicle and starship names
    if (this.#vehicles.length > 0) {
      document.getElementById("vehicles").innerHTML = ''
      this.#vehicles.forEach((_, index) => {
        this.#vehicles[index] = setProperty("name", this.#vehicles[index])
        this.#vehicles[index].then(
          res => {
            this.#vehicles[index] = res
            document.getElementById("vehicles").innerHTML += `<li class="value">${this.#vehicles[index]}</li>`
          }
        )
      })
    } else {
      this.#vehicles = "none"
      document.getElementById("vehicles").innerHTML = `<p class="value">${this.#vehicles}</p>`
    }

    // Fetch film titles
    if (this.#appearances.length > 0) {
      document.getElementById("appearances").innerHTML = ''
      this.#appearances.forEach((_, index) => {
        this.#appearances[index] = setProperty("title", this.#appearances[index])
        this.#appearances[index].then(
          res => {
            this.#appearances[index] = res
            document.getElementById("appearances").innerHTML += `<li class="value">${this.#appearances[index]}</li>`
          }
        )
      })
    } else {
      this.#appearances = "none"
      document.getElementById("appearances").innerHTML = `<p class="value">${this.#appearances}</p>`
    }
  }
}


let chr;


// Fetch character profile
const fetchCharacter = async () => {
  // character id 17 : 404
  try {
    let response = await fetch(`https://swapi.dev/api/people/${randomNumber(83)}/`)
    let dataChr = await response.json()

    if (response.status === 200) {
      chr = new Character(dataChr)
    } else throw "API-ERROR"

  } catch (error) {
    alert(error)
  }
}


// Fetch character properties, i.e. homeworld, species, etc.
const setProperty = async (property, url) => {
  let response = await fetch(url)
  let data = await response.json()
  return data[property]
}

// Generates random number within the given limit
const randomNumber = (limit) => {
  var num
  while (true) {
    num = Math.floor(Math.random() * limit)
    if (num > 0) break;
  }
  return num
}


// Fetch and display character profile on load
window.onload = fetchCharacter

// Fetch and display new character profile on click
document.getElementById("refresh").addEventListener("click", fetchCharacter)

