// This file is loaded as a JavaScript module (see type="module" in index.html). That allows the code to be modular and cleaner. All js files for this are modular. 
// Why we use modules:
// -Keeps logic organized and reusable.
// -Lets us import functions from other files (like getPokemonService.js)
// -Prevents variable conflicts because each module has its own scope.
// -Automatically waits for imports to load before running the rest of the code.

// This file handles the main app flow:
// - Captures user input
// - Calls the API
// - Shows loading spinner
// - Displays the Pokémon card or an error

// Import js services and call them here
import { getPokemonAPI } from './services/getPokemonService.js';
import renderPokemonResponse from './components/renderPokemonResponse.js';

// Variables/Dom elements
const mainForm = document.getElementById("mainForm");
const spinner = document.getElementById("loading__spinner");
const searchInput = document.getElementById("pokemonSearchInput");
const content = document.getElementById("content");
const contentText = document.getElementById("content-text");

// Event listener for submit button
mainForm.addEventListener('submit', async (e) => { // need async here for it to load the await.
    // prevent default refresh action
    e.preventDefault();

    // validate the input
    const searchValue= searchInput.value.trim();// trim gets rid of extra spaces user may put in

    if (searchValue.length > 0) {
        // make the loader before the api call, then remove the loader w/ an api response
        contentText.style.display ='none'; // hides the please search line in the html
        spinner.style.display = 'block'; // shows spinner
        content.innerHTML = ''; //clears previous cards loaded

        const pokemonResponse = await getPokemonAPI(String(searchValue)); // fetches data from the api

        spinner.style.display ='none';// hides spinner after data is fetched.

        renderPokemonResponse(pokemonResponse);// calls function to display results or error.
    }
});
