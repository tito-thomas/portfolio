
//let counter = 1;

//function carousel() {

//    const slide = document.querySelector(".slider");
//    const images = document.querySelectorAll(".slider img");
//    const width = images[0].clientWidth;

//    if (counter == images.length) {
//        counter = 0;
//        slide.style.transition = "none";
//        //think of translate values as coordinates not the amount that it moves the element 
//        slide.style.transform = "translateX(" + (-width * counter) + "px)";
//        counter++;
//        carousel()
//    }
//    else {
//        slide.style.transition = "transform 0.4s ease-in-out";
//        slide.style.transform = "translateX(" + (-width * counter) + "px)";
//        counter++;
//    }
    
//}
//setInterval(carousel, 2000)