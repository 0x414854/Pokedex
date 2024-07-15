// To Do

// Adjust button to sort by type (type[0]) => Also display Pokémon with 2 types
// if button 'Initial' clicked => Display All Pokemon

const apiURL = "https://pokeapi.co/api/v2/";

function getPokemon(id) {
  return fetch(`${apiURL}pokemon/${id}`)
    .then((response) => response.json())
    .catch((error) => console.error(error));
}

function getBackgroundImageUrl(typeName) {
  switch (typeName) {
    case "grass":
      return "url(./background/grass.png)";
    case "poison":
      return "url(./background/poison.png)";
    case "fire":
      return "url(./background/fire.png)";
    case "flying":
      return "url(./background/flying.png)";
    case "water":
      return "url(./background/water.png)";
    case "bug":
      return "url(./background/bug.png)";
    case "normal":
      return "url(./background/normal.png)";
    case "electric":
      return "url(./background/electric.png)";
    case "ground":
      return "url(./background/ground.png)";
    case "fairy":
      return "url(./background/fairy.png)";
    case "fighting":
      return "url(./background/fighting.png)";
    case "psychic":
      return "url(./background/psychic.png)";
    case "rock":
      return "url(./background/rock.png)";
    case "steel":
      return "url(./background/steel.png)";
    case "ice":
      return "url(./background/ice.png)";
    case "ghost":
      return "url(./background/ghost.png)";
    case "dragon":
      return "url(./background/dragon.png)";
    case "dark":
      return "url(./background/dark.png)";
    default:
      return "none";
  }
}

function assignBackgroundImageBack(typeName) {
  switch (typeName) {
    case "grass":
      return "url(./background/back_card/grassBack.png)";
    case "poison":
      return "url(./background/back_card/poisonBack.png)";
    case "fire":
      return "url(./background/back_card/fireBack.png)";
    case "flying":
      return "url(./background/back_card/flyingBack.png)";
    case "water":
      return "url(./background/back_card/waterBack.png)";
    case "bug":
      return "url(./background/back_card/bugBack.png)";
    case "normal":
      return "url(./background/back_card/normalBack.png)";
    case "electric":
      return "url(./background/back_card/electricBack.png)";
    case "ground":
      return "url(./background/back_card/groundBack.png)";
    case "fairy":
      return "url(./background/back_card/fairyBack.png)";
    case "fighting":
      return "url(./background/back_card/fightingBack.png)";
    case "psychic":
      return "url(./background/back_card/psychicBack.png)";
    case "rock":
      return "url(./background/back_card/rockBack.png)";
    case "steel":
      return "url(./background/back_card/steelBack.png)";
    case "ice":
      return "url(./background/back_card/iceBack.png)";
    case "ghost":
      return "url(./background/back_card/ghostBack.png)";
    case "dragon":
      return "url(./background/back_card/dragonBack.png)";
    case "dark":
      return "url(./background/back_card/darkBack.png)";
    default:
      return "none";
  }
}

const sortButton = document.querySelector(".sort_buttons");
const resultsDiv = document.querySelector("#sort_result_button");
const sortDiv = document.createElement("div");
sortDiv.classList.add("sort_div");
sortDiv.style.display = "none";

const numberButton = document.createElement("button");
numberButton.classList.add("sort_button");
numberButton.textContent = "Initial";

const alphaButton = document.createElement("button");
alphaButton.classList.add("sort_button");
alphaButton.textContent = "Alphabetic Order";

const typeButton = document.createElement("button");
typeButton.classList.add("sort_button_type");
typeButton.textContent = "Sort by Type";

const weightButton = document.createElement("button");
weightButton.classList.add("sort_button");
weightButton.textContent = "Sort by Weight";

const sizeButton = document.createElement("button");
sizeButton.classList.add("sort_button");
sizeButton.textContent = "Sort by Size";

numberButton.addEventListener("click", sortAscending);
alphaButton.addEventListener("click", sortAlphabetically);
typeButton.addEventListener("click", sortByType);
weightButton.addEventListener("click", sortByWeight);
sizeButton.addEventListener("click", sortBySize);

sortDiv.appendChild(numberButton);
sortDiv.appendChild(alphaButton);
sortDiv.appendChild(typeButton);
sortDiv.appendChild(weightButton);
sortDiv.appendChild(sizeButton);

resultsDiv.appendChild(sortDiv);

function compareNumbers(a, b) {
  const numA = parseInt(a.querySelector(".number").textContent.substring(1));
  const numB = parseInt(b.querySelector(".number").textContent.substring(1));
  return numA - numB;
}

function sortAscending() {
  const cardWrappers = document.querySelectorAll(".card_wrapper");
  const cardArray = Array.from(cardWrappers);
  const sortedCardArray = cardArray.sort(compareNumbers);
  const pokedexDiv = document.querySelector(".pokedex");
  while (pokedexDiv.firstChild) {
    pokedexDiv.removeChild(pokedexDiv.firstChild);
  }
  sortedCardArray.forEach((card) => {
    pokedexDiv.appendChild(card);
  });
}

function compareNames(a, b) {
  const nameA = a.querySelector("h2").textContent.toLowerCase();
  const nameB = b.querySelector("h2").textContent.toLowerCase();
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }
  return 0;
}

function sortAlphabetically() {
  const cardWrappers = document.querySelectorAll(".card_wrapper");
  const cardArray = Array.from(cardWrappers);
  const sortedCardArray = cardArray.sort(compareNames);

  const pokedexDiv = document.querySelector(".pokedex");
  while (pokedexDiv.firstChild) {
    pokedexDiv.removeChild(pokedexDiv.firstChild);
  }

  sortedCardArray.forEach((card) => {
    pokedexDiv.appendChild(card);
  });
}

function compareTypes(a, b) {
  const typeA = a.querySelector(".types").textContent.toLowerCase();
  const typeB = b.querySelector(".types").textContent.toLowerCase();
  if (typeA < typeB) {
    return -1;
  }
  if (typeA > typeB) {
    return 1;
  }
  return 0;
}

function sortByType() {
  generateTypeButtons();

  const cardWrappers = document.querySelectorAll(".card_wrapper");
  const cardArray = Array.from(cardWrappers);
  const sortedCardArray = cardArray.sort(compareTypes);
  const pokedexDiv = document.querySelector(".pokedex");
  while (pokedexDiv.firstChild) {
    pokedexDiv.removeChild(pokedexDiv.firstChild);
  }
  sortedCardArray.forEach((card) => {
    pokedexDiv.appendChild(card);
  });
}

const sortByTypeBtn = document.querySelector(".sort_button_type");
const typeDiv = document.querySelector(".type_div");
sortByTypeBtn.addEventListener("click", () => {
  typeDiv.style.display = "flex";
  generateTypeButtons();
});

function generateTypeButtons() {
  const types = [
    "grass",
    "poison",
    "fire",
    "flying",
    "water",
    "bug",
    "normal",
    "electric",
    "ground",
    "fairy",
    "fighting",
    "psychic",
    "rock",
    "steel",
    "ice",
    "ghost",
    "dragon",
    "dark",
  ];
  const typeDiv = document.querySelector(".type_div");
  const typeLabels = document.querySelectorAll(".type_label");
  typeLabels.forEach((typeLabel) => typeLabel.remove());
  types.forEach((type) => {
    const label = document.createElement("label");
    label.classList.add("type_label");
    const typeButton = document.createElement("button");
    typeButton.classList.add("type_button");
    typeButton.value = type;
    typeButton.innerHTML = type;
    label.appendChild(typeButton);
    typeDiv.appendChild(label);
    typeButton.addEventListener("click", () => {
      filterByType(typeButton.value);
    });
  });
}

function filterByType(selectedType) {
  const cardWrappers = document.querySelectorAll(".card_wrapper");
  cardWrappers.forEach((cardWrapper) => {
    const cardType = cardWrapper
      .querySelector(".types")
      .textContent.toLowerCase();
    if (selectedType === "all" || selectedType === cardType) {
      cardWrapper.style.display = "block";
    } else {
      cardWrapper.style.display = "none";
    }
  });
}

function compareWeights(a, b) {
  const regex = /Weight : (\d+)/;
  const weightAElement = a.querySelector(".weight");
  const weightBElement = b.querySelector(".weight");
  if (!weightAElement || !weightBElement) {
    return 0;
  }
  const sizeA = parseInt(weightAElement.textContent.match(regex)[1]);
  const sizeB = parseInt(weightBElement.textContent.match(regex)[1]);
  return sizeA - sizeB;
}

function sortByWeight() {
  const cardWrappers = document.querySelectorAll(".card_wrapper");
  const cardArray = Array.from(cardWrappers);
  const sortedCardArray = cardArray.sort(compareWeights);

  const pokedexDiv = document.querySelector(".pokedex");
  while (pokedexDiv.firstChild) {
    pokedexDiv.removeChild(pokedexDiv.firstChild);
  }

  sortedCardArray.forEach((card) => {
    pokedexDiv.appendChild(card);
  });
}

function compareSize(a, b) {
  const regex = /Height : (\d+)/;
  const sizeAElement = a.querySelector(".height");
  const sizetBElement = b.querySelector(".height");
  if (!sizeAElement || !sizetBElement) {
    return 0;
  }
  const sizeA = parseInt(sizeAElement.textContent.match(regex)[1]);
  const sizeB = parseInt(sizetBElement.textContent.match(regex)[1]);
  return sizeA - sizeB;
}

function sortBySize() {
  const cardWrappers = document.querySelectorAll(".card_wrapper");
  const cardArray = Array.from(cardWrappers);
  const sortedCardArray = cardArray.sort(compareSize);
  const pokedexDiv = document.querySelector(".pokedex");
  while (pokedexDiv.firstChild) {
    pokedexDiv.removeChild(pokedexDiv.firstChild);
  }
  sortedCardArray.forEach((card) => {
    pokedexDiv.appendChild(card);
  });
}

sortButton.addEventListener("click", function () {
  if (sortDiv.style.display === "flex") {
    sortDiv.style.display = "none";
    typeDiv.style.display = "none";
  } else {
    sortDiv.style.display = "flex";
  }
});

const searchInput = document.getElementById("search_input");
const searchButton = document.getElementById("search_button");

function scrollToPokemon(pokemonElement) {
  const rect = pokemonElement.getBoundingClientRect();
  const windowHeight = window.innerHeight;
  let scrollTop =
    rect.top + window.pageYOffset - windowHeight / 2 + rect.height / 2;
  window.scrollTo({ top: scrollTop, behavior: "smooth" });
}

function searchPokemon() {
  const searchTerm = searchInput.value.toLowerCase();
  const pokemonElements = document.querySelectorAll(".card_wrapper");
  let resultFound = false;

  pokemonElements.forEach((pokemonElement) => {
    const pokemonName = pokemonElement
      .querySelector("h2")
      .textContent.toLowerCase();
    const pokemonNumber = pokemonElement.querySelector(".number").textContent;

    if (searchTerm.startsWith("#") && /\d+/.test(searchTerm)) {
      const searchNumber = searchTerm.match(/\d+/)[0];
      if (pokemonNumber === `#${searchNumber}`) {
        scrollToPokemon(pokemonElement);
        const clickEvent = new Event("click");
        pokemonElement.dispatchEvent(clickEvent);
        resultFound = true;
        return;
      }
    } else if (
      pokemonName.includes(searchTerm) ||
      pokemonNumber.includes(searchTerm)
    ) {
      scrollToPokemon(pokemonElement);
      const clickEvent = new Event("click");
      pokemonElement.dispatchEvent(clickEvent);
      resultFound = true;
      return;
    }
  });
  if (!resultFound) {
    document.getElementById("results").innerHTML = "Error: No results found.";
  } else {
    document.getElementById("results").innerHTML = "";
  }
}

searchInput.addEventListener("keypress", function (event) {
  if (event.keyCode === 13) {
    searchPokemon();
  }
});

searchButton.addEventListener("click", searchPokemon);

function displayPokemon(pokemon) {
  const cardWrapper = document.createElement("div");
  cardWrapper.classList.add("card_wrapper");
  cardWrapper.style.backgroundImage = getBackgroundImageUrl(
    pokemon.types[0].type.name
  );
  const card = document.createElement("div");
  card.classList.add("card");
  const image = document.createElement("img");
  image.classList.add("front_image");
  image.src = pokemon.sprites.front_default;
  image.alt = pokemon.name;
  const name = document.createElement("h2");
  pokemon.name = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
  name.textContent = pokemon.name;
  const number = document.createElement("p");
  number.classList.add("number");
  number.textContent = `#${pokemon.id}`;
  const types = document.createElement("ul");
  types.classList.add("types");
  pokemon.types.forEach((type) => {
    const li = document.createElement("li");
    li.textContent = type.type.name;
    li.classList.add(type.type.name);
    types.appendChild(li);
  });
  let isExpanded = false;
  cardWrapper.appendChild(image);
  cardWrapper.appendChild(name);
  cardWrapper.appendChild(number);
  cardWrapper.appendChild(types);
  const back = document.createElement("div");
  back.classList.add("card_back");
  back.style.backgroundImage = assignBackgroundImageBack(
    pokemon.types[0].type.name
  );
  displayPokemonInfo(pokemon, back);
  back.style.display = "none";
  cardWrapper.appendChild(back);
  cardWrapper.addEventListener("click", () => {
    if (!isExpanded) {
      if (back) {
        back.style.display = "block";
        cardWrapper.style.width = "1048px";
        cardWrapper.style.height = "400px";
      } else {
        displayPokemonInfo(pokemon, card);
      }
      isExpanded = true;
    } else {
      if (back) {
        back.style.display = "none";
        cardWrapper.style.width = "320px";
        cardWrapper.style.height = "320px";
      } else {
        card.querySelector(".info").remove();
      }
      isExpanded = false;
    }
  });
  async function displayPokemonInfo(pokemon, target) {
    const info = document.createElement("div");
    info.classList.add("info");
    const height = document.createElement("p");
    height.classList.add("height");
    height.textContent = `Height : ${pokemon.height}`;
    const weight = document.createElement("p");
    weight.classList.add("weight");
    weight.textContent = `Weight : ${pokemon.weight}`;
    const baseExperience = document.createElement("p");
    baseExperience.classList.add("experience");
    baseExperience.textContent = `Base Experience : ${pokemon.base_experience}`;
    const backImage = document.createElement("img");
    backImage.classList.add("back_image");
    backImage.src = pokemon.sprites.front_default;
    backImage.alt = pokemon.name;
    const stats = document.createElement("div");
    stats.classList.add("stats");
    for (const stat of pokemon.stats) {
      const statElement = document.createElement("p");
      statElement.textContent = `${stat.stat.name} : ${stat.base_stat}`;
      stats.appendChild(statElement);
    }
    const abilities = document.createElement("div");
    abilities.classList.add("abilities");
    for (const ability of pokemon.abilities) {
      const abilityElement = document.createElement("p");
      abilityElement.classList.add("ability");
      abilityElement.textContent = ability.ability.name;
      abilities.appendChild(abilityElement);
    }
    const species = await fetch(pokemon.species.url).then((res) => res.json());
    const evolutionChain = await fetch(species.evolution_chain.url).then(
      (res) => res.json()
    );
    const evolutions = document.createElement("div");
    evolutions.classList.add("evolutions");
    if (evolutionChain.chain.evolves_to.length > 0) {
      let chain = evolutionChain.chain;
      while (chain.evolves_to.length > 0) {
        const evolution = chain.evolves_to[0].species;
        const evolutionImage = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${evolution.name}`
        ).then((res) => res.json());
        const evolutionElement = document.createElement("div");
        const evolutionName = document.createElement("p");
        evolutionName.classList.add("evol_name");
        evolutionName.textContent = evolution.name;
        const evolutionImg = document.createElement("img");
        evolutionImg.classList.add("evoluting_img");
        evolutionImg.src = evolutionImage.sprites.front_default;
        evolutionElement.appendChild(evolutionImg);
        evolutionElement.appendChild(evolutionName);
        evolutions.appendChild(evolutionElement);
        chain = chain.evolves_to[0];
      }
    }
    info.appendChild(height);
    info.appendChild(weight);
    info.appendChild(baseExperience);
    info.appendChild(backImage);
    info.appendChild(stats);
    info.appendChild(abilities);
    info.appendChild(evolutions);
    if (target) {
      target.appendChild(info);
    } else {
      card.appendChild(info);
    }
  }
  document.querySelector(".pokedex").appendChild(cardWrapper);
}

function fetchPokemon() {
  let pokemonList = [];
  for (let i = 1; i <= 1025; i++) {
    pokemonList.push(getPokemon(i));
  }
  Promise.all(pokemonList)
    .then((pokemons) => {
      pokemons.sort((a, b) => a.id - b.id);
      pokemons.forEach((pokemon) => displayPokemon(pokemon));
    })
    .catch((error) => console.error(error));
}

fetchPokemon();
