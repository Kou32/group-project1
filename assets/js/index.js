let userGenre = "";
let userPlatform = "";
let userSort = "";


// need to add the IDs for the formfields
function populateData() {
    userGenre = document.getElementById("genre-input").value || "all";
    userPlatform = document.getElementById("platform-input").value.toLowerCase() || "all";
    userSort = document.getElementById("sort-by-input").value || "release-date";

    let newUrl = "./search.html";
    newUrl = `${newUrl}?category=${userGenre}&platform=${userPlatform}&sort-by=${userSort}`

    toSearchPage(newUrl);
}

function toSearchPage(newUrl){
    window.location.assign(newUrl);
}


//make sure the ".btn" is correct in index.html

document.querySelector(".submit-btn").addEventListener("click", function(e) {
    e.preventDefault();
    populateData();
});

document.querySelector(".surprise-me-btn").addEventListener("click", function(e) {
    e.preventDefault();
    surpriseMe();
});
