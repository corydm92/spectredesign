let menuButton = document.getElementById("menu-button");

let navContainer = document.getElementById("nav-container");

menuButton.addEventListener("click", function(e) {

    if (navContainer.classList.contains("unclicked")) {
        menuButton.classList.add("clicked")
        navContainer.classList.add("clicked");
        navContainer.classList.remove("unclicked")
        
    } else if (navContainer.classList.contains("clicked")) {
        menuButton.classList.remove("clicked")
        navContainer.classList.remove("clicked");
        navContainer.classList.add("unclicked");
    };

});

function onLoad() {
    menuButton.click();
};

onLoad();