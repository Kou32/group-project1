let userGenre = "";
let userPlatform = "";


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



// need to add the IDs for the formfields
function populateData() {
    userGenre = document.getElementById("").value || "all";
    userPlatform = document.getElementById("").value || "all";
    let userSort = "release-date";

    let newUrl = "./search.html";
    newUrl = `${newUrl}?category=${userGenre}&platform=${userPlatform}&sort-by=${userSort}`

    
}

function toSearchPage(newUrl){
    window.location.assign(newUrl);
}

/*
--header 'x-rapidapi-host: free-to-play-games-database.p.rapidapi.com' \
	--header 'x-rapidapi-key: 3e6cc8af84msh922be3a69454242p1dd0dcjsn984e8786f25f'
*/

async function surpriseMe() {

    const data = await fetchFromGamesSite('https://free-to-play-games-database.p.rapidapi.com/api/games')
    console.log(data)

    console.log(data.length);

    console.log(data[300]);


    // let surpriseUrl = "https://free-to-play-games-database.p.rapidapi.com/api/filter?tag=3d.mmorpg.fantasy.pvp&platform=pc"

    // fetch(surpriseUrl, {
    //     method: 'GET',
    //     headers: {
    //         'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com',
    //         'x-rapidapi-key': '3e6cc8af84msh922be3a69454242p1dd0dcjsn984e8786f25f'
    //     }
    // })
    // .then(function (response) {
    //     console.log(response)
    //   return response.json();
    // })
    // .then(function (data) {
    //   console.log(data);

        
    // });

    // window.location.assign(data[300].game_url);
}

//make sure the ".btn" is correct html
document.querySelector(".submit-btn").addEventListener("click", function(e) {
    e.preventDefault();
    populateData();
});

document.querySelector(".surprise-me-btn").addEventListener("click", function(e) {
    e.preventDefault();
    surpriseMe();
});