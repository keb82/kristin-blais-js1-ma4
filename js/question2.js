
async function question2(){

    var url = "https://api.rawg.io/api/games";

    try{
        const response = await fetch(url);

        const games = await response.json();

        createGames(games)
    }
    catch(error){

    }
}

function createGames(games){

    let mainDiv = document.querySelector(".results");

    let newHTML = "";

    games.results.forEach(game => {

        newHTML += 
        `<div class="game">
            <h2>${game.name}</h2>
            <img src="${game.background_image}" alt="${game.name}" />
        </div>`

    });

    mainDiv.innerHTML = newHTML;

}

question2();