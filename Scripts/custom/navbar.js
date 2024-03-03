
//wait for all page elements to load before displaying
document.addEventListener("DOMContentLoaded", function() { 
    const page = document.querySelector("body")
const content = document.querySelector(".body-content")
    page.style.visibility = "visible";
});


function hideNavElements() {
    const elementsToHide = document.querySelectorAll(".only-home");
    console.log(elementsToHide);
    var url = document.URL.split("/");
    //if we are not on home page
    if (url.length > 4) {
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

//document.addEventListener("DOMContentLoaded", footerDate); 
window.addEventListener("scroll", navScrollStyling);
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

