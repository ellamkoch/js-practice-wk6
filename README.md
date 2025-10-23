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
