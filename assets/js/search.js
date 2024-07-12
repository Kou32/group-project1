function buildLink(platform, genre, preference){
    urlLink = `https://www.freetogame.com/api/games?platform=${platform}&sort-by=${preference}`
    if (genre === "all" ){
    }else{
        urlLink = urlLink + `&category=${genre}` 
    }
    urlLink = urlLink + "/&fo=json";
    console.log(urlLink);
    getResponse(urlLink);

}
function surpriseURL(){
    urlLink = `https://www.freetogame.com/api/game?id=${id}`

}
function genRandomNumber(min, max){
    min = [0]    
    max = [452]
    return id.floor(id.random())
    }


function parseQueryParams(){
    const url = window.location.href;
    let paramsAll = url.split("?")[1];
    console.log(paramsAll);
    paramsEach = paramsAll.split("&");
    console.log(paramsEach);
    userGenre = paramsEach[0].split("=")[1];
    userPlatform = paramsEach[1].split("=")[1] || "search";
    buildLink(userGenre,userPlatform,);
}

function handleInput() {
    let platformInput = document.querySelector("#platform-input").value || "";
    console.log(platformInput);
    let genreInput = document.querySelector("#genre-input").value || "";
    console.log(genreInput);
    let preferenceInput = document.querySelector("#preference").value || "";
    buildLink(searchInput, formatInput, preferenceInput);
}

