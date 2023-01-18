function renderEverything() {
    let allPokemonContainer = document.querySelector('#poke-container');
    allPokemonContainer.innerText = "";
    fetchPokemonData();
}

function fetchOriginalPokemon() {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
        .then(response => response.json())
        .then(allpokemon => console.log(allpokemon))
}

function fetchPokemonData(pokemon){
    let url=pokemon.url
    fetch(url)
    .then(response => response.json())
    .then(function(pokeData){
        renderPokemon(pokeData);
    })
}

function renderPokemon(pokeData){
    let bigContainer = document.getElementById('poke-container');
    let pokeContainer = document.createElement("div")
    pokeContainer.classList.add('ui', 'card');

    createPokeImage(pokeData.id, pokeContainer);

    let pokeName = document.createElement('h4')
    pokeName.innerText = pokeData.pokeName

    let pokeNumberr = document.createElement('p')
    pokeNumberr.innerText = '#${pokeData.id}'

    let pokeTypes = document.createElement('ul')

    createTypes(pokeData.types, pokeTypes);

    pokeContainer.append(pokeName, pokeNumber, pokeTypes);
    allPokemonContainer.appendChild(pokeContainer);
}

function createTypes(types, ul){
    types.forEach(function(type){
        let typeLi = document.createElement('li');
        typeLi.innerText = type['type']['name'];
        ul.append(typeLi)
    })
}

function createPokeImage(pokeID, containerDiv){
    let pokeImgContainer = document.createElement('div')
    pokeImgContainer.classList.add('image')
    pokeImgContainer.srcset = 'https://pokeres.bastionbot.org/images/pokemon/${pokeID}.png'

    pokeImgContainer.append(pokeImage);
    containerDiv.append(pokeImgContainer);
}

