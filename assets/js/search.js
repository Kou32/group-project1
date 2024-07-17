const needToPlayList = readFromLocalStorage("ntp-list") || [];

async function buildLink(platform, genre, preference){
    urlLink = `https://free-to-play-games-database.p.rapidapi.com/api/games?platform=${platform}`
    if (genre === "all" ){
    }else{
        urlLink = urlLink + `&category=${genre}` 
    }

    urlLink = urlLink + `&sort-by=${preference}`;

    urlLink = urlLink + "/&fo=json";
    console.log(urlLink);
    let response = await fetchFromGamesSite(urlLink);

    buildAndAppend(response);

}
/*let removeGame = document.getElementsByClassName('btn-danger')
 console.log(removeGame)
 for ( i = 0; i < removeGame.length; i++)
    button = removeGame[i]
    button.addEventListener('btn-sm', function(event){
         let gameRemoval = event.target
         gameRemoval.parentElement.parentElement.remove()
     }) 
*/
function parseQueryParams(){
    const url = window.location.href;
    let paramsAll = url.split("?")[1];
    console.log(paramsAll);
    paramsEach = paramsAll.split("&");
    console.log(paramsEach);
    userCategory = paramsEach[0].split("=")[1];
    userPlatform = paramsEach[1].split("=")[1] || "search";
    userSortBy = paramsEach[2].split("="[1]) || "release-date";
    buildLink(userPlatform,userCategory, userSortBy);
}


function buildAndAppend(data) {

    document.querySelector("#card").innerHTML = "";

    for (let i = 0; i < data.length; i++) {
        let tempCard = buildElement(data[i]);

        document.querySelector("#card").append(tempCard);
        ScrollReveal().reveal(".card", {delay: 250});
    }
  }

  function buildElement(data) {
    let div = document.createElement("div");
    div.setAttribute("class", "card")
    div.innerHTML = `
        <card>
            <div class="card-left">
                <h4>${data.title || "N/A"}</h4>

                <a href=${data.game_url}><img src=${data.thumbnail} target="_blank" alt="Game image" ></a>
            </div>
            <div class="card-right">
                <p class="card-para">
                    <strong>Genre:</strong> ${data.genre || "N/A"}<br>
                    <strong>Description:</strong> ${data.short_description || "N/A"}<br>
                    <strong>Platform:</strong> ${data.platform || "N/A"}<br>
                    <strong>Release Date:</strong> ${data.release_date || "N/A"}<br>
                </p>
                <a href=${data.game_url} class="btn btn-dark">Go To Game<a/>
                <button onClick="addToList(${data.id})">Add To List</button>
            </div>
        </card>
    `
    ;
    return div;
  }


  function addToList(id) {
    console.log(id);
    const gameToAdd = fetchedGames.find( (game) => game.id === id ) 
    console.log(gameToAdd)
    needToPlayList.push(gameToAdd);
    saveToLocalStorage("ntp-list", needToPlayList);
    populateList()
    // when needing to get objects
    //readFromLocalStorage("ntp-list")[index].valueToFind
    //example:
    //readFromLocalStorage("ntp-list")[2].title
  }

  function populateList(){
    needToPlayList.forEach( function(game){
        const tableBody = document.querySelector("#game-data")
        tableBody.innerHTML = ""
        const tableRow = document.createElement("tr");

        const gameColumn = document.createElement("td");
        gameColumn.textContent = game.title;

        const genreColumn = document.createElement("td");
        genreColumn.textContent = game.genre;

        const platformColumn = document.createElement("td");
        platformColumn.textContent = game.platform;

        const actionColumn = document.createElement("td");
        actionColumn.setAttribute("class", "w-25");
        
        const linkTag = document.createElement("a");
        linkTag.setAttribute("class", "btn btn-danger btn-sm");

        const iconTag = document.createElement("i");
        iconTag.setAttribute("class", "fa fa-times");

        linkTag.appendChild(iconTag)
        actionColumn.appendChild(linkTag)

        tableRow.appendChild(gameColumn)
        tableRow.appendChild(genreColumn)
        tableRow.appendChild(platformColumn)
        tableRow.appendChild(actionColumn)

        tableBody.appendChild(tableRow)
        
    })
  }


  function saveToLocalStorage(name, data) {
    localStorage.setItem(name, JSON.stringify(data));
}

function readFromLocalStorage(name) {
    return JSON.parse(localStorage.getItem(name));
}

function refreshSearch() {
    let userGenre = document.querySelector("#genre-input").value || "all";
    let userPlatform = document.querySelector("#platform-input").value.toLowerCase() || "all";
    let userSortBy = document.querySelector("#project-type-input").value || "release-date";

    buildLink(userPlatform, userGenre, userSortBy);
}

document.querySelector("#refresh").addEventListener("click", refreshSearch);



// Modal Shopping Cart
document.querySelector("#cart-btn").addEventListener("click", function(event){
    $('#cart-modal').modal('show');
});

document.querySelector("#close-btn").addEventListener("click", function(event){
    $('#cart-modal').modal('hide');
});
document.querySelector("#x-close-btn").addEventListener("click", function(event){
    $('#cart-modal').modal('hide');
});

// $(document).ready(function() {  
//     $('#cart-modal').modal('show');
//   });


if (window.location.href.includes("=")){
    parseQueryParams();
}