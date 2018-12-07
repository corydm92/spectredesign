let menuButton = document.getElementById("menu-button");

let navContainer = document.getElementById("nav-container");

menuButton.addEventListener("click", function(e) {

    if (navContainer.classList.contains("unclicked")) {
        navContainer.classList.add("clicked");
        navContainer.classList.remove("unclicked")
        
    } else if (navContainer.classList.contains("clicked")) {
        navContainer.classList.remove("clicked");
        navContainer.classList.add("unclicked");
    };

});