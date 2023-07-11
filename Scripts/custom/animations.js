

//About me animation

const tracker = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.style.transition = "transform 0.5s";
            entry.target.style.transform = "translateX(0)";

        }
        else if(entry.target.id==="biotext"){
            entry.target.style.transform = "translateX(-100%)";
        }
        else if(entry.target.id==="selfie"){
            entry.target.style.transform = "translateX(100%)";
        }
    });
});

const bioitems = document.querySelectorAll(".bioitem");
bioitems.forEach((item) => tracker.observe(item));