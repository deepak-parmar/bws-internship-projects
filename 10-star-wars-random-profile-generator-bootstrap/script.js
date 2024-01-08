// Renders fetched character profile on page
function renderCharacter(data) {
  const { name, image, died, affiliations } = data

  $('#name').html(`<h1>${name}</h1>`)

  $('#image').css({
    background: `url(${image}) no-repeat top center`,
    backgroundSize: 'cover'
  })

  const props = ['gender', 'homeworld', 'species']
  props.forEach((prop) => { $(`#${prop}`).text(data[prop] || 'unknown') })

  $('#affiliations').text(affiliations.length ? affiliations.join(', ') : 'none')

  died
    ? $('#died').removeClass('d-none').addClass('d-flex')
    : $('#died').removeClass('d-flex').addClass('d-none')
}


// Fetches character profile
function fetchCharacter() {
  const url = `https://akabab.github.io/starwars-api/api/id/${Math.ceil(Math.random() * 88)}.json`
  $.get(url, (data) => { renderCharacter(data) })
    .fail(() => { alert('Character not found. Refresh!') })
}


// Render character on load
$(document).ready(fetchCharacter)

// Fetch and render new character on click
$('#refresh').on('click', fetchCharacter)

