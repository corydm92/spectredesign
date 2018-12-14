let menuButton = document.getElementById("menu-button");

let navContainer = document.getElementById("nav-container");

let mainContent = document.getElementById("main-content");

let headerContainer = document.getElementById("header-container");

menuButton.addEventListener("click", function(e) {

    if (menuButton.classList.contains("unclicked")) {
        menuButton.classList.add("clicked");
        menuButton.classList.remove("unclicked");

        document.getElementById("easter-egg").classList.add("show")
        
    } else if (menuButton.classList.contains("clicked")) {
        menuButton.classList.add("unclicked");
        menuButton.classList.remove("clicked");
        
        document.getElementById("easter-egg").classList.remove("show")
    };

});