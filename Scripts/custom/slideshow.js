
/*
let counter = 1;

function carousel() {

    const slide = document.querySelector(".slider");
    const images = document.querySelectorAll(".slider img");
    const width = images[0].clientWidth;

    if (counter == images.length) {
        counter = 0;
        slide.style.transition = "none";
        //think of translate values as coordinates not the amount that it moves the element 
        slide.style.transform = "translateX(" + (-width * counter) + "px)";
        counter++;
        carousel()
    }
    else {
        slide.style.transition = "transform 0.4s ease-in-out";
        slide.style.transform = "translateX(" + (-width * counter) + "px)";
        counter++;
    }

}
setInterval(carousel, 2000)*/
//let counter = 1;

//Slides for home page
class Slideshow { 
    constructor(slide, images) {
        this.slide = slide;
        this.images = images;
        this.counter = 1;
    }
    
    carousel() {

        const width = this.images[0].clientWidth;
            
        if (this.counter == this.images.length) {
            //console.log("end");
            this.counter = 0;
            this.slide.style.transition = "none";
            //think of translate values as coordinates not the amount that it moves the element 
            this.slide.style.transform = "translateX(" + (-width * this.counter) + "px)";
            this.counter++;
            this.carousel();
        }
        else {
            this.slide.style.transition = "transform 0.4s ease-in-out";
            this.slide.style.transform = "translateX(" + (-width * this.counter) + "px)";
            this.counter++;
        }
        //this.counter++;
        //console.log(this.counter)
            

    }
}

//Check if we are on home page
//Run home page slideshows
var url = document.URL.split('/')
if (document.URL.includes("Index")) {
    //slide 1
    const slide = document.querySelector(".slider");
    const images = document.querySelectorAll(".slider img");
    const first_slide = new Slideshow(slide, images);
    setInterval(first_slide.carousel.bind(first_slide), 2000);

    //slide 2
    const slide2 = document.querySelector(".slider2");
    const images2 = document.querySelectorAll(".slider2 img");
    const second_slide = new Slideshow(slide2, images2);
    setInterval(second_slide.carousel.bind(second_slide), 2000);
}

//Run anime project page slideshow if not on home page 
else {
    //Slide for anime project page
    const embedButton = document.querySelector(".embed");
    embedButton.addEventListener("click", () => {
        console.log("test");

        const embedImages = document.querySelectorAll(".embedding-img");

        if (embedButton.value == "text") {
            embedImages.forEach((i) => {
                i.style.transform = "translateX(-600px)",
                    i.style.transition = "0.3s ease-in-out"
            });
            embedButton.innerHTML = "Text form";
            embedButton.value = "embed";
        }
        else {
            embedImages.forEach(i => i.style.transform = "translateX(0)");
            embedButton.innerHTML = "Embed data";
            embedButton.value = "text";
        }
    });
}

