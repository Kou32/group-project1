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