const url = "https://api.rawg.io/api/games/4200";

fetch(url)
.then(result => {
    return result.json();
})
.then(json => {
    createGameDetails(json);
});

function createGameDetails(gameJson){

    //replace the placeholder values in the HTML with properties from the object returned from the API call.
    let divContainer = document.querySelector(".container");
    divContainer.innerHTML = divContainer.innerHTML.replace("Name of game",gameJson.name);

    let divDescription = document.querySelector(".description");
    divDescription.innerHTML = divDescription.innerHTML.replace("Description goes here", gameJson.description);
    
    //Use the background_image property as the background image of the <div class="image"> element.
    let divImage = document.querySelector(".image");
    divImage.style.backgroundImage = divImage.style.backgroundImage.replace("https://via.placeholder.com/1000", gameJson.background_image);
    
}