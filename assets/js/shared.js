const genreInputEl = $('#genre-input')

async function fetchFromGamesSite(url){
    let result;
     
    const response = await fetch(url, {
        // mode: "no-cors",
        method: 'GET',
        headers: {
            'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com',
            'x-rapidapi-key' : '3e6cc8af84msh922be3a69454242p1dd0dcjsn984e8786f25f'
        }
    }).then(function (response) {
        return response.json();
    }).then(function (data) {
        console.log(data);
        result = data;
    })
    
    return result;
}

async function surpriseMe() {

    const data = await fetchFromGamesSite('https://free-to-play-games-database.p.rapidapi.com/api/games')

    window.location.assign(data[getRandomInt(data.length)].game_url);
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
const handleInput = function (event) {
    event.preventDefault();

    const genreInput = genreInputEl.val();
    console.log(genreInput)

inputGenre(genreInput);
genreInputEl.val('');
}
// autocompete genre titles
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