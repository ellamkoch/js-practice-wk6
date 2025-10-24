# js-practice-wk6

This is the repository for the week 6 JS assignments with CodeX. I'm using the same repo for 2 assignments since so much was similar and Ulises said it was ok to do in this case. I'll identify which files are part of which assignment below.

## JavaScript Practice Week 6

### Objective

Practice making requests to the Pokemon API using JS and Node.

Pick** nine** of these exercises for your assignment. Do 3 of each group. Log all your results using console.log.

### Files

* wk6practice.js
* index.html

### Overview

The goal was to understand how to access, read, and log different kinds of data from an API — including individual Pokémon, berries, abilities, items, and type information.

I worked through all three required sections of API calls:

1. Group 1 – Pokémon Data Fetching
2. Group 2 – Miscellaneous API Calls
3. Group 3 – Advanced API Calls by ID

Everything for this assignment is in one repository, but the files for this specific project are:

* wk6practice.js
* index.html

**Please don’t look at the rest of the repo yet — I’m still reorganizing, updating my notes based off of what I typed while Ulises was talking, and haven't finished everything else yet for the next assignment after we reorganized (I type really fast :))**

### How It Works

The script connects to the [PokéAPI](https://pokeapi.co/) base URL: [https://pokeapi.co/api/v2/](https://pokeapi.co/api/v2)

From there, I used Axios to make requests to different endpoints such as pokemon, berry, ability, item and type.

Each section includes:

* A specific API call.
* A  `console.log()`` statement that prints the result.
* Comments explaining each line in plain English.

### Using Postman for Testing

I used Postman while building this project to preview what each API endpoint looked like before writing the code.

This helped me:

* Confirm which fields to target (for example: name, effect_entries, damage_relations, etc.).
* Identify which IDs matched specific Pokémon, abilities, or items.
* Verify how arrays and nested data (like flavors or damage_relations were structured.
* Avoid "undefined" errors by knowing exactly where the data was located in the JSON response.

Postman was especially helpful for:

* Group 2, when finding which flavor belonged to the first Berry.
* Group 3, when reviewing the nested structure of damage_relations for type data.

### Lessons Learned

* How to use Axios to make API requests and work with JSON data.
* How to navigate nested objects and arrays (for example: flavors[0].flavor.name).
* The difference between list endpoints (/pokemon) and single resource endpoints (/pokemon/2).
* How to use Postman as a tool to inspect and test API data before writing code.
* The importance of organizing code into grouped sections for readability and troubleshooting.

### Notes

This repo is still a work in progress. I plan to update the other files and take out my notes and finish the rest of the Fetch and Async assignment for this week.

For now, everything runs correctly inside wk6practice.js and can be seen within the console of the index.html file and meets all assignment requirements.

## Fetch and Async Assignment - Pokemon Finder

### Objective
In this assignment, students will build a Pokémon Searcher that allows users to look up Pokémon by entering a name or ID. The application will fetch data from the PokéAPI and display relevant details such as the Pokémon’s name, ID, weight, height, types, and image inside a Bootstrap card.

Students will implement a search bar with a button, handle API requests using Axios and async/await, and dynamically update the UI using JavaScript DOM manipulation.

### Files
-index.html
-styles/styles.css
-scripts/main.js
-scripts/services/getPokemonService.js
-scripts/components/renderPokemonResponse.js
-Pokemon_Solid.ttf - font family for the title

### Overview
When a user types a Pokémon name or ID and presses Search, the app:
1. Sends an Axios `GET` request to `https://pokeapi.co/api/v2/pokemon/{name-or-id}`
2. Shows a centered spinner while the request loads
3. Replaces the spinner with a dynamically generated Pokémon card containing:
   -Sprite image
   -Name and ID
   -Weight
   -Height
   -List of types
4. Displays a red error message if the API call fails

All JavaScript is organized using best practices learned from Ulises to keep code clean and readable.

### How It Works
index.html — Loads Axios from a CDN and links each module with `type="module"`.
- Includes the form, search input, button, spinner, and an empty content area for results.

main.js — Handles form submission and the overall flow:
-Hides the “please search” message when a search begins
-Shows the spinner while waiting for the API
-Calls `getPokemonAPI()`
-Passes the result to `renderPokemonResponse()` for display
-Hides the spinner again after loading

getPokemonService.js — Contains the async Axios function that fetches Pokémon data.
-Returns an object with `success` and either `data` or `error` so other files can easily check the result.

renderPokemonResponse.js — Builds the HTML for the Pokémon card based on API data.
-Converts the Pokémon’s `types` array into a readable comma-separated list and injects the result into the page.

styles.css — Handles layout and theme:
-Custom Pokémon title font
-Diagonal red-to-gray gradient background
-Centered, styled form and button
-Smooth spinner animation
-Card layout with shadow and hover contrast

### Lessons Learned
-How to split logic into separate modules (`services`, `components`, and main app).
-More practice with Axios with async/await for cleaner asynchronous code.
-More practice to manipulate the DOM dynamically with `innerHTML`.
-How to handle API errors gracefully and give user feedback.
-How to create a simple loading spinner and show/hide it during requests.
-The value of adding concise helper comments to make code easier to follow.

### Future Improvements
I didn't use bootstrap on this one to save time. I'd like to play with it in the future to see how it works more. 
