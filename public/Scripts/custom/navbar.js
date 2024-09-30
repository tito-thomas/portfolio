
//wait for all page elements to load before displaying content
document.addEventListener("DOMContentLoaded", function() { 
    const page = document.querySelector("body")
    const content = document.querySelector(".body-content")
    page.style.visibility = "visible";
});


function hideNavElements() {
    const elementsToHide = document.querySelectorAll(".only-home");
    let url = document.URL.split("/");
    //if we are not on home page
    if (url.includes("anime-project") || url.includes("bitcoin-project")) {
        elementsToHide.forEach(i => i.style.display = "none");
    }
};

function navScrollStyling() {
   
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
 window.addEventListener("scroll", navScrollStyling);





