// This file is loaded as a JavaScript *module* (see type="module" in index.html). That allows us to use the ES6 import/export system to keep our code modular.
// Why we use modules:
// -Keeps logic organized and reusable.
// -Lets us import functions from other files (like getPokemonService.js)
// -Prevents variable conflicts because each module has its own scope.
// -Automatically waits for imports to load before running the rest of the code.

//   Example:
//      import { getPokemonAPI } from './services/getPokemonService.js';
//      - This line pulls the getPokemonAPI function that handles Axios calls to the PokéAPI.

//   When index.html runs this file, it’s already connected to:
//      - Axios (loaded in the <head>)
//      - The getPokemonService.js module (loaded before this script)

// Import services and call them here

import { getPokemonAPI, getAbilitiesAPI, getItemAPI } from './services/getPokemonService.js';

// Variables
const baseURL = 'https://pokeapi.co/api/v2';
const content = document.getElementById("content");


}



// Using Axios
async function getPokemonAPI(pokemonName) {
    const endpoint = `${baseURL}/pokemon/${pokemonName}`;
    try {
        const response = await axios.get(endpoint);
        const data = await response.data;

        content.innerHTML = data.name;
    } catch (error) {
        console.error(error);
    }
  }

getPokemonAPI('squirtle');

const pokemonResponse = await getPokemonAPI("squirtle");

renderAPIResponse(pokemonResponse);
// Group 1 Pokemon Data Fetching:
//1. Fetch and log name and base exp of squirtle
const squirtleResponse = await getPokemonAPI("squirtle");

console.log("Name: ", squirtleResponse.data.name);
console.log("Base experience: ", squirtleResponse.data.base_experience);

// Group 2 - Misc API Calls
// 2. Fetch and log the name and effect of the first ability
const abilitiesResponse= await getAbilitiesAPI();

console.log("Ability Name: ", abilitiesResponse.data.results[0].name);

// Group 3: Advanced API calls by ID
const itemResponse = await getItemAPI(27);

console.log("Item Name", itemResponse.data.name)
console.log("Item Category", itemResponse.data.category.name)

mainForm.addEventListener('submit', async (e) => { // need async here for it to load the await.
    // prevent default refresh action
    e.preventdefault();

    // validate the input
    const searchValue= searchInput.value;

    if (searchValue.length > 0) {
        // make the loader before the api call, then remove the loader w/ an api response
        content.innerHTML =`
        <div class="spinner" role="status">
        <span class="visually hidden"> Loading...</span>
        </div>
        `;

        const pokemonResponse = await getPokemonAPI(String(searchValue));
    }

});
