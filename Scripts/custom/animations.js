

//About me animation

const tracker = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
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

//Skills Title animation

const skillstitleTracker = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.style.transform = "translateY(0)";
            entry.target.style.opacity = "50%";

        }
    });
});

const skillsTitle = document.querySelector(".skills-title");
skillstitleTracker.observe(skillsTitle);

//Skill Icons animaiton

//Uses the skill icons container as scroll checker and transforms icons
const skilliconsTracker = new IntersectionObserver((entries) => {
    const icons = document.querySelectorAll(".lang");
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            let delay = 300;
            icons.forEach((i) => {
                i.style.transition = "0.9s ease-in-out";
                i.style.transitionDelay = delay + "ms";
                delay-=100;
                i.style.transform = "translateX(0)";
                i.style.opacity = "1";
            });
        }
        else {
            icons.forEach((i) => {
                i.style.transition = "none";
                i.style.transform = "translateX(-550%)";
                i.style.opacity = "0";
            });
        }
    });
});

const skillsContainer = document.querySelector(".skills-container");
skilliconsTracker.observe(skillsContainer);