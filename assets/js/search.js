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
// let removeGame = document.getElementsByClassName('btn')
// console.log(removeGame)
// for ( i = 0; i < removeGame.length; i++)
//     button = removeGame[i]
//     button.addEventListener('click', function(event){
//         let gameRemoval = event.target
//         gameRemoval.parentElement.parentElement.remove()
//     })


function parseQueryParams(){
    const url = window.location.href;
    let paramsAll = url.split("?")[1];
    console.log(paramsAll);
    paramsEach = paramsAll.split("&");
    console.log(paramsEach);
    userPreference = paramsEach[0].split("=")[1];
    userPlatform = paramsEach[1].split("=")[1] || "search";
    buildLink(userPreference,userPlatform);
}


function buildAndAppend(data) {

    document.querySelector("#card").innerHTML = "";

    for (let i = 0; i < data.length; i++) {
        let tempCard = buildElement(data[i]);

        document.querySelector("#card").append(tempCard);
    }
  }

  function buildElement(data) {
    let div = document.createElement("div");
    div.setAttribute("class", "card bg-light text-dark mb-3 p-3")
    div.innerHTML = `
        <div class="card-body">
            <h3>${data.title || "N/A"}</h3>
            <img src=${data.thumbnail} alt="thumbnail image">
            <p class="card-para">
                <strong>Genre:</strong> ${data.genre || "N/A"}<br>
                <strong>Description:</strong> ${data.short_description || "N/A"}<br>
                <strong>Platform:</strong> ${data.platform || "N/A"}<br>
                <strong>Release Date:</strong> ${data.release_date || "N/A"}<br>
            </p>
            <a href=${data.game_url} class="btn btn-dark">Go To Game<a/>
            <button onClick="addToList(${data})">Add To List</button>
    `
    return div;
  }


  function addToList(data) {
        needToPlayList.push(data);
        saveToLocalStorage("ntp-list", needToPlayList);
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