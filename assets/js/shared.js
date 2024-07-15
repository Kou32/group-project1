async function fetchFromGamesSite(url){
    const response = await fetch(url, {
        method: 'GET',
        headers: {
            'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com',
            'x-rapidapi-key': '3e6cc8af84msh922be3a69454242p1dd0dcjsn984e8786f25f'
        }
    })

    const data = response.json()
    return data
}

async function surpriseMe() {

    const data = await fetchFromGamesSite('https://free-to-play-games-database.p.rapidapi.com/api/games')

    window.location.assign(data[getRandomInt(data.length)].game_url);
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
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
        'mmorts'
    ];
    $('#genre-input').autocomplete({
      source: genreText,
    });
  });