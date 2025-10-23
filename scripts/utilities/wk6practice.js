// console.log("wk6practice.js"); double check to make sure its connected.

// Variables
const baseURL = "https://pokeapi.co/api/v2";

//Group 1 Pokemon data fetching
// Item 1: Fetch and log name and base exp of squirtle
async function getSquirtleInfo(pokemonName) {
    const endpoint =`${baseURL}/pokemon/${pokemonName}`;

    try {
        // makes axios request to the poke API
        const response = await axios.get(endpoint);

        const data = response.data; // pulls data from the response

        return { // returns the results so we can use it later
            success:true,
            data: data
        };

    } catch (error) {

        return { // returns an error if something goes wrong
            success: false,
            error: error
        };
    }
}
// Item 2: Fetch and log the name and types of Pikachu
async function getPikachuInfo(pokemonName) {
    const endpoint =`${baseURL}/pokemon/${pokemonName}`;

    try {
        // makes axios request to the poke API
        const response = await axios.get(endpoint);

        const data = response.data; // pulls data from the response

        return { // returns the results so we can use it later
            success:true,
            data: data
        };

    } catch (error) {

        return { // returns an error if something goes wrong
            success: false,
            error: error
        };
    }
}

// Item 3: Fetch and log the name and abilities of Eevee
async function getEeveeInfo(pokemonName) {
    const endpoint =`${baseURL}/pokemon/${pokemonName}`;

    try {
        // makes axios request to the poke API
        const response = await axios.get(endpoint);

        const data = response.data; // pulls data from the response

        return { // returns the results so we can use it later
            success:true,
            data: data
        };

    } catch (error) {

        return { // returns an error if something goes wrong
            success: false,
            error: error
        };
    }
}
// function to run the request to fetch info for Group 1
async function fetchIt() {
    const squirtleInfo = await getSquirtleInfo("squirtle"); // calls function to get squirtle info above.
    const pikachuInfo = await getPikachuInfo("pikachu"); // calls function above to get pikachu info
    const eeveeInfo = await getEeveeInfo("eevee"); // calls function above to get eevee info

    if (squirtleInfo.success) { // console log for squirtle info
        console.log(`${squirtleInfo.data.name}'s base experience is ${squirtleInfo.data.base_experience}`);
    }    // need backticks since pulling from the template literal
    else {
        console.log("I can't find anything in this mess!", squirtleInfo.error.message);
    }

    if (pikachuInfo.success) { // console log for pikachu info
        console.log(`${pikachuInfo.data.name}'s type is ${pikachuInfo.data.types[0].type.name}`) // looks at the first position of the array and pulls tne type name.
   }   else {
        console.log("I can't find anything in this mess!", pikachuInfo.error.message); // error message if it can't find it
    }
    // How to do a forEach loop to pull everything out of the array
    // if (eeveeInfo.success) { // console log for eevee info
    //     let abilities = ""; // Starts an empty string to store all Eevee's ability names
    //     // Loops through each ability object in the Eevee data
    //     eeveeInfo.data.abilities.forEach(function(abilityObject, index) {
    //          // Pulls the ability name from inside the nested object
    //         const abilityName = abilityObject.ability.name;
    //         // Add commas between abilities, but skip the comma after the last one
    //         abilities+= abilityName + ", "; //adds comma + space between abilities
    //          }
    //     );
    // how to use map instead of forEach
    if (eeveeInfo.success) {
  // Use .map() to extract all ability names, then .join() to turn them into a single string
  const abilities = eeveeInfo.data.abilities
    .map(a => a.ability.name) // map loops through each ability in the array and pulls the name only. => tells js to take each element and call it "a" and return a.ability.name from the array.
    .join(", "); //join turns the array into a string separated by commas
            console.log(`${eeveeInfo.data.name}'s abilities are ${abilities}.`)
   }   else {
        console.log("I can't find anything in this mess!", eeveeInfo.error.message);
    }
}
// calling the fetch function
fetchIt();

// Group 2 - Misc API Calls
// 1. Fetch and log the name of the second Pokémon.
const secondPokemonResponse = await axios.get(`${baseURL}/pokemon/2`); // targets the 2nd pokemon with the #2 ID. axios.get() goes to the URL and waits for the API to send back data

console.log(`The name of the second Pokemon is: ${secondPokemonResponse.data.name}`);//prints the name and msg for the 2nd pokemon in the list from the API

// //Fetch and log the name and effect of the first Ability.
// const abilitiesResponse = await axios.get (`${baseURL}/ability/`);

// console.log("Ability Name: ", abilitiesResponse.data.results[0].name);

// 2. Fetch and log the flavor of the first Berry.
const firstBerryResponse = await axios.get(`${baseURL}/berry/1`);// targets the 1st berry in the API list

console.log(`The flavor of the first berry is: ${firstBerryResponse.data.flavors[0].flavor.name}`);
//targets the name of the flavors in the array and identifies the 1st one in the array

//3. Fetch and log the name and effect of the first Ability.

const firstAbilityResponse = await axios.get(`${baseURL}/ability/1`); // targets the 1st ability in the API list
console.log(`The 1st ability in the list is: ${firstAbilityResponse.data.name}. It's effect is: ${firstAbilityResponse.data.effect_entries[1].effect}`); // data is the json data of that ability. .name is the name of the ability, in this case "stench". effect_entries is an array of effect descriptions in multiple languages. I made sure to target the english one, which is the 2nd entry by putting [1] to print its effect text.

// Group 3
//1. Fetch ability data by ID and log the ability name and effect.
const abilityResponse = await axios.get(`${baseURL}/ability/3`); // targets the 3rd ability in the API list, which is speed-boost.

console.log("Ability Name: ", abilityResponse.data.name) // lists the name of the 3rd ability.
console.log("Ability Effect: ", abilityResponse.data.effect_entries[1].effect) // looks up the english version of the effect in the array, which is the 2nd one.

//2. Fetch item data by ID and log the item name and category.
const itemResponse = await axios.get(`${baseURL}/item/5`); // targets the 5th item in the list under items, which is safari ball
console.log("Item Name: ", itemResponse.data.name) // lists the name of the 5th item
console.log("Item Category: ", itemResponse.data.category.name); // lists the name of the category, which is standard-balls

//3. Fetch type data by ID and log the type name and its damage relations.
const typeResponse = await axios.get(`${baseURL}/type/7`); // targets the 7th type in the list types, which is bug
console.log("The 7th Type Name is", typeResponse.data.name) // lists the name of the 7th item
console.log("Its damage relations for double damage from are: ", typeResponse.data.damage_relations.double_damage_from.map(t => t.name)); // lists all the damage relations for # 7's 1st item in the list, which is the double damage from and the names of each one one they would get double damage from within that array. output is flying, rock/fire
