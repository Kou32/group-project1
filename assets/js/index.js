let userGenre = "";
let userPlatform = "";


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


//make sure the ".btn" is correct in index.html
// document.querySelector(".btn").addEventListener("click", function(e) {
//     e.preventDefault();
//     populateData();
// })
//make sure the ".btn" is correct html
document.querySelector(".submit-btn").addEventListener("click", function(e) {
    e.preventDefault();
    populateData();
});

document.querySelector(".surprise-me-btn").addEventListener("click", function(e) {
    e.preventDefault();
    surpriseMe();
});
