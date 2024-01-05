// Renders fetched character profile on page
function renderCharacter(data) {
	$("#name").html(`<h1>${data.name}</h1>`)
	
	$("#image").css({
		background: `url(${data.image}) no-repeat top center`,
		backgroundSize: "cover"
	})

	if (data.hasOwnProperty("died"))
		$("#died").removeClass("d-none").addClass("d-flex")
	else
		$("#died").removeClass("d-flex").addClass("d-none")

	data.gender = data.gender == undefined ? "Unknown" : data.gender
	$("#gender").text(data.gender)
	
	data.homeworld = data.homeworld == undefined ? "Unknown" : data.homeworld
	$("#homeWorld").text(data.homeworld)
	
	data.species = data.species == undefined ? "Unknown" : data.species
	$("#species").text(data.species)

	if (data.affiliations.length > 0) {
		let affiliation = ''
		
		data.affiliations.forEach((element, index) => {
			if (data.affiliations.length-1 == index) affiliation += `<span class="me-2">${element}</span>`
			else affiliation += `<span class="me-2">${element},</span>`	
		});

		$("#affiliations").html(affiliation)
	} else {
		$("#affiliations").text("None")
	}
}


// Fetches character profile
function fetchCharacter() {
	$.get(
		`https://raw.githubusercontent.com/akabab/starwars-api/0.2.1/api/id/${Math.ceil(Math.random() * 88)}.json`,
		(data) => { renderCharacter(JSON.parse(data)) }
	)
	.fail(() => {alert("Character not found. Refresh!")})
}


// Render character on load
$(document).ready(fetchCharacter)

// Fetch and render new character on click
$("#refresh").on("click", fetchCharacter)