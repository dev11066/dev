/* =========================================
   MANGO JUICE WEBSITE
========================================= */

document.addEventListener("DOMContentLoaded", () => {

    const productCard =
        document.querySelector(".product-card");

    const productImage =
        document.querySelector(".product-image");

    const menuButton =
        document.querySelector(".menu-btn");

    const closeButton =
        document.querySelector(".close-btn");

    const buyButton =
        document.querySelector(".buy-btn");


    /* =========================================
       PRODUCT CARD PARALLAX
    ========================================= */

    productCard.addEventListener("mousemove", (event) => {

        const rect =
            productCard.getBoundingClientRect();

        const x =
            event.clientX - rect.left;

        const y =
            event.clientY - rect.top;

        const centerX =
            rect.width / 2;

        const centerY =
            rect.height / 2;

        const rotateX =
            (y - centerY) / 35;

        const rotateY =
            (centerX - x) / 35;

        productCard.style.transform = `
            perspective(1200px)
            rotateX(${rotateX}deg)
            rotateY(${rotateY}deg)
        `;

    });


    /* Reset card */

    productCard.addEventListener("mouseleave", () => {

        productCard.style.transform = `
            perspective(1200px)
            rotateX(0deg)
            rotateY(0deg)
        `;

    });


    /* =========================================
       PRODUCT IMAGE MOUSE MOVEMENT
    ========================================= */

    productCard.addEventListener("mousemove", (event) => {

        const rect =
            productCard.getBoundingClientRect();

        const x =
            (event.clientX - rect.left) / rect.width;

        const y =
            (event.clientY - rect.top) / rect.height;

        const moveX =
            (x - 0.5) * 20;

        const moveY =
            (y - 0.5) * 15;

        productImage.style.transform = `
            translate(${moveX}px, ${moveY}px)
            rotate(-5deg)
        `;

    });


    productCard.addEventListener("mouseleave", () => {

        productImage.style.transform = `
            rotate(-7deg)
            translateY(-5px)
        `;

    });


    /* =========================================
       MENU BUTTON
    ========================================= */

    menuButton.addEventListener("click", () => {

        document.body.classList.toggle("menu-open");

        if (
            document.body.classList.contains("menu-open")
        ) {

            menuButton.style.transform =
                "rotate(45deg)";

        } else {

            menuButton.style.transform =
                "rotate(0deg)";
        }

    });


    /* =========================================
       CLOSE BUTTON
    ========================================= */

    closeButton.addEventListener("click", () => {

        productCard.animate(
            [
                {
                    opacity: 1,
                    transform: "scale(1)"
                },

                {
                    opacity: 0,
                    transform: "scale(.92)"
                }
            ],
            {
                duration: 450,
                easing: "ease-in",
                fill: "forwards"
            }
        );

        setTimeout(() => {

            productCard.animate(
                [
                    {
                        opacity: 0,
                        transform: "scale(.92)"
                    },

                    {
                        opacity: 1,
                        transform: "scale(1)"
                    }
                ],
                {
                    duration: 700,
                    easing: "cubic-bezier(.16,1,.3,1)"
                }
            );

        }, 700);

    });


    /* =========================================
       SHOP BUTTON
    ========================================= */

    buyButton.addEventListener("click", () => {

        buyButton.textContent = "ADDED ✓";

        buyButton.style.background = "#20201b";
        buyButton.style.color = "#ffffff";

        setTimeout(() => {

            buyButton.textContent = "SHOP NOW";

            buyButton.style.background = "";
            buyButton.style.color = "";

        }, 1800);

    });


    /* =========================================
       KEYBOARD ESCAPE
    ========================================= */

    document.addEventListener("keydown", (event) => {

        if (event.key === "Escape") {

            document.body.classList.remove(
                "menu-open"
            );

            menuButton.style.transform =
                "rotate(0deg)";
        }

    });

});