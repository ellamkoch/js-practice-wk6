function renderAPIResponse(apiResponse) {
 if(apiResponse.success) {
    // displays pokemon name
    const pokemon = apiResponse.data;

    const typesArray =pokemon.types;
    // let typesString=''; how to do a forEach method

    // console.log(typesArray);

    // typesArray.forEach((type, index)=> {
    //     console.log(type,index);

    //     typesString+= type.type.name;

    //     if(index < typesArray.length -1) {
    //         typesString += ', ';
    //     }
    const typesString = typesArray.map(type => type.type.name).join(',');

    }

    console.log(data);

    content.innerHTML = `
    <div class="card">
    <img src="${pokemon.sprites.front_default}" class="card-img-top" alt="Sprite image of a ${pokemon.name}">
    <div class="card-body">
    <h5 class="card-title">Name: ${pokemon.name} - ID: ${pokemon.id}</h5>
    <ul class="list-group">
        <li class="list-group-item">Pokemon Weight: ${pokemon.weight}</li>
        <li class="list-group-item">Pokemon Height: ${pokemon.height}</li>
        <li class="list-group-item">Pokemon Types: ${pokemon.types}</li>
    </ul>
    </div>
    </div>
    `
 } else {
    // error message displayed
    const {error} = apiResponse;

    content.innerHTML = `
    <h2>API Failed because of ${error.message}</h2>`
 }

 // put in export 
