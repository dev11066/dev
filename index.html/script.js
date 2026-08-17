const images = document.querySelectorAll(".coffee-image");
const dots = document.querySelectorAll(".flavour-dot");

const content = document.querySelector(".content");

const coffeeTitle = document.getElementById("coffeeTitle");
const coffeeDescription = document.getElementById("coffeeDescription");
const currentNumber = document.getElementById("currentNumber");

const orderButtons = document.querySelectorAll(".order-button");


const coffeeFlavours = [
    {
        name: "tiramisu",
        description:
            "a famous no-bake Italian dessert made from coffee-soaked savoiardi chill ka moot."
    },

    {
        name: "magnum pistachio",
        description:
            "A premium Belgium creamy nutty pistachio aukat ke bhar ki ice cream."
    },

    {
        name: "nepali momos",
        description:
            "Tibetin steamed dumplings filled with vegetables in other words नीच nich logo ki favourite dish."
    },

    {
        name: "lasagna",
        description:
            "a classic Italian baked dish tere khandan ne bhi kabhi iska naam suna hai."
    },

    {
        name: "Garlic bread",
        description:
            "An Italian side dish made from bread, garlic, and butter naam ni lunga per kisi धी ke lode ne iske naam pe garlic naan khila diya tha."
    }
];


let currentSlide = 0;
let sliderTimer;


/* =========================================
   SHOW SLIDE
========================================= */

function showSlide(index) {

    if (index === currentSlide && content.classList.contains("ready")) {
        return;
    }


    /* =====================================
       IMAGE SLIDE
    ===================================== */

    images.forEach((image, i) => {

        image.classList.toggle(
            "active-image",
            i === index
        );

    });


    /* =====================================
       DOTS
    ===================================== */

    dots.forEach((dot, i) => {

        dot.classList.toggle(
            "active",
            i === index
        );

    });


    /* =====================================
       ORDER BUTTONS
    ===================================== */

    orderButtons.forEach((button, i) => {

        button.classList.toggle(
            "active-order",
            i === index
        );

    });


    /* =====================================
       TEXT SLIDE OUT
    ===================================== */

    content.classList.remove("ready");

    content.classList.add("slide-out");


    /* =====================================
       WAIT FOR TEXT TO LEAVE
    ===================================== */

    setTimeout(() => {


        /* Change text */

        coffeeTitle.textContent =
            coffeeFlavours[index].name;

        coffeeDescription.textContent =
            coffeeFlavours[index].description;

        currentNumber.textContent =
            String(index + 1).padStart(2, "0");


        /* =================================
           PUT NEW TEXT DOWN
        ================================= */

        content.style.transition = "none";

        content.style.transform =
            "translateY(100px)";

        content.style.opacity = "0";


        /* Force browser to notice position */

        content.offsetHeight;


        /* =================================
           SLIDE NEW TEXT IN
        ================================= */

        content.style.transition =
            "transform 0.7s cubic-bezier(0.77, 0, 0.175, 1), opacity 0.7s ease";

        content.style.transform =
            "translateY(0)";

        content.style.opacity = "1";


        content.classList.remove("slide-out");

        content.classList.add("ready");


        currentSlide = index;

    }, 400);

}


/* =========================================
   DOT CLICK
========================================= */

dots.forEach((dot, index) => {

    dot.addEventListener("click", () => {

        if (index === currentSlide) {
            return;
        }

        showSlide(index);

        restartSlider();

    });

});


/* =========================================
   NEXT SLIDE
========================================= */

function nextSlide() {

    let next = currentSlide + 1;

    if (next >= images.length) {
        next = 0;
    }

    showSlide(next);

}


/* =========================================
   AUTO SLIDER
========================================= */

function startSlider() {

    sliderTimer = setInterval(() => {

        nextSlide();

    }, 3000);

}


function restartSlider() {

    clearInterval(sliderTimer);

    startSlider();

}


/* =========================================
   INITIAL SLIDE
========================================= */

coffeeTitle.textContent =
    coffeeFlavours[0].name;

coffeeDescription.textContent =
    coffeeFlavours[0].description;

currentNumber.textContent = "01";


dots[0].classList.add("active");

images[0].classList.add("active-image");

orderButtons[0].classList.add("active-order");

content.classList.add("ready");


/* =========================================
   START SLIDER
========================================= */

startSlider();