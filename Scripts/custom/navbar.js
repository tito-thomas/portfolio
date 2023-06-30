﻿
function homeNavStyling() {
    const navbar = document.querySelector("#mynav")
    navbar.style.transition = "0.4s"
    if (window.scrollY != 0) {
        navbar.style.backgroundColor = "rgb(3, 36, 86, 0.85)";
        navbar.style.backdropFilter = "blur(5px)"
        
    }
    else {
        navbar.style.backgroundColor = "transparent"
        navbar.style.backdropFilter = ""
    }
 }

function checkHomePage() {
    //no longer applying just on home page.
    var url = document.URL.split('/');
    const navbar = document.querySelector("#mynav");
    document.body.style.marginTop = "0";
    navbar.style.backgroundColor = "transparent";
    window.addEventListener("scroll", homeNavStyling);
}
/*function checkHomePage() {

    var url = document.URL.split('/')
    //check if we are on the home page
    if (document.URL.includes("Index") || url.length < 5) {
        const navbar = document.querySelector("#mynav")
        document.body.style.marginTop = "0"
        navbar.style.backgroundColor = "transparent"

        window.addEventListener("scroll", homeNavStyling)
    }
    
}*/

checkHomePage()

//wait for all page elements to load before displaying
window.onload = function () {
    const page = document.querySelector("body")
    page.style.display = "flex";
}