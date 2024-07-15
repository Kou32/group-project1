const needToPlayList = readFromLocalStorage("ntp-list") || [];

const genreInputEl = $('#genre-input')

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
    userPreference = paramsEach[0].split("=")[1] || "search";
    userPlatform = paramsEach[1].split("=")[1] || "search";
    buildLink(userPreference,userPlatform);
}

const handleInput = function (event) {
    event.preventDefault();

    const genreInput = genreInputEl.val();
    console.log(genreInput)

inputGenre(genreInput);
genreInputEl.val('');
}


$(function () {
    const genreText = [
        'mmorpg',
        'shooter',
        'strategy',
        'moba',
        'racing',
        'sports',
        'social',
        'sandbox',
        'open-world',
        'survival',
        'pvp',
        'pve',
        'pixel',
        'voxel',
        'zombie',
        'turn-based',
        'first-person',
        'third-Person',
        'top-down',
        'tank',
        'space',
        'sailing',
        'side-scroller',
        'superhero',
        'permadeath',
        'card',
        'battle-royale',
        'mmo',
        'mmofps',
        'mmotps',
        '3d',
        '2d',
        'anime',
        'fantasy',
        'sci-fi',
        'fighting',
        'action-rpg',
        'action',
        'military',
        'martial-arts',
        'flight',
        'low-spec',
        'tower-defense',
        'horror',
        'mmorts',
    ];
    $('#genre-input').autocomplete({
      source: genreText,
    });
  });

  function saveToLocalStorage(name, data) {
    localStorage.setItem(name, JSON.stringify(data));
}

function readFromLocalStorage(name) {
    return JSON.parse(localStorage.getItem(name));
}