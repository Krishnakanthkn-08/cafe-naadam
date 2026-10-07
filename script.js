/* =========================================
   CAFÉ NAADAM
   JAVASCRIPT
========================================= */


/* =========================================
   LOADER
========================================= */

const loader = document.getElementById("loader");

window.addEventListener("load", () => {

    setTimeout(() => {

        loader.classList.add("hide");

    }, 1000);

});


/* =========================================
   NAVBAR SCROLL EFFECT
========================================= */

const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});


/* =========================================
   SCROLL REVEAL
========================================= */

const revealElements =
    document.querySelectorAll(".reveal");

const revealObserver =
    new IntersectionObserver(
        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                    revealObserver.unobserve(
                        entry.target
                    );

                }

            });

        },
        {
            threshold: 0.12
        }
    );


revealElements.forEach((element) => {

    revealObserver.observe(element);

});


/* =========================================
   HERO ANIMATION
========================================= */

window.addEventListener("load", () => {

    const heroElements =
        document.querySelectorAll(
            ".hero .reveal"
        );

    heroElements.forEach(
        (element, index) => {

            setTimeout(() => {

                element.classList.add("show");

            }, 1100 + index * 180);

        }
    );

});


/* =========================================
   FOOD PARALLAX
========================================= */

const foodStage =
    document.querySelector(".food-stage");

window.addEventListener("scroll", () => {

    if (!foodStage) return;

    const rect =
        foodStage.getBoundingClientRect();

    const screenCenter =
        window.innerHeight / 2;

    const distance =
        screenCenter - rect.top;

    const movement =
        Math.max(
            -25,
            Math.min(25, distance / 18)
        );

    foodStage.style.transform =
        `translateY(${movement}px)`;

});


/* =========================================
   MOBILE MENU
========================================= */

const mobileMenuButton =
    document.getElementById(
        "mobileMenuButton"
    );

mobileMenuButton.addEventListener(
    "click",
    () => {

        navbar.classList.toggle(
            "mobile-open"
        );

    }
);


/* =========================================
   CLOSE MOBILE MENU
========================================= */

const navLinks =
    document.querySelectorAll(
        ".nav-links a"
    );

navLinks.forEach((link) => {

    link.addEventListener(
        "click",
        () => {

            navbar.classList.remove(
                "mobile-open"
            );

        }
    );

});


/* =========================================
   SMOOTH BUTTON EFFECT
========================================= */

const buttons =
    document.querySelectorAll(
        ".nav-button, .scroll-indicator"
    );

buttons.forEach((button) => {

    button.addEventListener(
        "mouseenter",
        () => {

            button.style.transform =
                "translateY(-2px)";

        }
    );

    button.addEventListener(
        "mouseleave",
        () => {

            button.style.transform =
                "translateY(0)";

        }
    );

});


/* =========================================
   PLATE INTERACTION
========================================= */

const plate =
    document.querySelector(".plate");

if (plate) {

    plate.addEventListener(
        "mousemove",
        (event) => {

            const rect =
                plate.getBoundingClientRect();

            const x =
                event.clientX - rect.left;

            const y =
                event.clientY - rect.top;

            const rotateY =
                ((x / rect.width) - 0.5) * 12;

            const rotateX =
                ((y / rect.height) - 0.5) * -12;

            plate.style.transform =
                `perspective(800px)
                 rotateX(${rotateX}deg)
                 rotateY(${rotateY}deg)
                 scale(1.03)`;

        }
    );


    plate.addEventListener(
        "mouseleave",
        () => {

            plate.style.transform =
                "rotate(-8deg) scale(1)";

        }
    );

}


/* =========================================
   CURRENT YEAR
========================================= */

const year =
    document.getElementById("year");

if (year) {

    year.textContent =
        new Date().getFullYear();

}