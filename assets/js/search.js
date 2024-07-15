const needToPlayList = readFromLocalStorage("ntp-list") || [];

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

  function saveToLocalStorage(name, data) {
    localStorage.setItem(name, JSON.stringify(data));
}

function readFromLocalStorage(name) {
    return JSON.parse(localStorage.getItem(name));
}