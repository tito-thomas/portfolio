
function homeNavStyling() {
    const navbar = document.querySelector("#mynav")
    navbar.style.transition = "0.4s"
    if (window.scrollY != 0) {
        navbar.style.backgroundColor = "rgb(3 36 86)"
    }
    else {
        navbar.style.backgroundColor = "transparent"
    }
 }


function checkHomePage() {

    var url = document.URL.split('/')
    //check if we are on the home page
    if (document.URL.includes("Index") || url.length < 5) {
        const navbar = document.querySelector("#mynav")
        document.body.style.marginTop = "0"
        navbar.style.backgroundColor = "transparent"

        window.addEventListener("scroll", homeNavStyling)
    }
    
}

checkHomePage()