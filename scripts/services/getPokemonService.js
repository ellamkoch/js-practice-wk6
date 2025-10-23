//This file holds all async functions that fetch data from the PokéAPI using Axios. Exported functions can be imported into main.js or other files

// axios async await function to get pokemon data from pokeapi
// this is the fetch information of this url
async function getPokemonAPI(pokemonName) {
    const endpoint =`${baseURL}/pokemon/${pokemonName}`;

    try {
        const response = await axios.get(endpoint);

        const data = await response.data;

        return {
            success:true,
            data: data
        };

    } catch (error) {

        return {
            success: false,
            error: error
        };
        }
    }
// no name required for this one since its just returning a list
async function getPokemonListAPI() {
    const endpoint =`${baseURL}/pokemon/}`;// need to fix this line

    try {
        const response = await axios.get(endpoint);

        const data = await response.data;

        return {
            success:true,
            data: data
        };

    } catch (error) {

        return {
            success: false,
            error: error
        };
        }
}

async function getItemAPI(itemId) {
    const endpoint =`${baseURL}/pokemon/${itemId}`;

    try {
        const response = await axios.get(endpoint);

        const data = await response.data;

        return {
            success:true,
            data: data
        };

    } catch (error) {

        return {
            success: false,
            error: error
        };
        }
}

    export { getPokemonAPI, getAbilitiesAPI, getItemAPI };
