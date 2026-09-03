/* =========================================================
SHravani Hendre — Portfolio JavaScript
========================================================= */

/* =========================================================

1. ELEMENTS
   ========================================================= */

const body = document.body;

const navbar = document.querySelector(".navbar");

const menuButton = document.querySelector(".menu-btn");
const mobileMenu = document.querySelector(".mobile-menu");

const mobileLinks = document.querySelectorAll(".mobile-menu a");

const navLinks = document.querySelectorAll(".nav-link");

const sections = document.querySelectorAll("section[id]");

const cursor = document.querySelector(".cursor");
const cursorFollower = document.querySelector(".cursor-follower");

const profileFrame = document.querySelector(".profile-frame");

/* =========================================================
2. CUSTOM CURSOR
========================================================= */

if (cursor && cursorFollower && window.innerWidth > 700) {


let mouseX = 0;
let mouseY = 0;

let followerX = 0;
let followerY = 0;


document.addEventListener("mousemove", (event) => {

    mouseX = event.clientX;
    mouseY = event.clientY;

    cursor.style.left = `${mouseX}px`;
    cursor.style.top = `${mouseY}px`;

});


function animateCursor() {

    followerX += (mouseX - followerX) * 0.12;
    followerY += (mouseY - followerY) * 0.12;

    cursorFollower.style.left = `${followerX}px`;
    cursorFollower.style.top = `${followerY}px`;

    requestAnimationFrame(animateCursor);

}

animateCursor();


const interactiveElements = document.querySelectorAll(
    "a, button, .project-card, .skill-card, .profile-frame"
);


interactiveElements.forEach((element) => {

    element.addEventListener("mouseenter", () => {

        cursorFollower.style.width = "55px";
        cursorFollower.style.height = "55px";

        cursorFollower.style.background =
            "rgba(155, 108, 255, 0.08)";

    });


    element.addEventListener("mouseleave", () => {

        cursorFollower.style.width = "34px";
        cursorFollower.style.height = "34px";

        cursorFollower.style.background =
            "transparent";

    });

});
```

}

/* =========================================================
3. MOBILE MENU
========================================================= */

if (menuButton && mobileMenu) {

```
menuButton.addEventListener("click", () => {

    mobileMenu.classList.toggle("open");

    const isOpen = mobileMenu.classList.contains("open");

    menuButton.setAttribute(
        "aria-expanded",
        isOpen
    );

});


mobileLinks.forEach((link) => {

    link.addEventListener("click", () => {

        mobileMenu.classList.remove("open");

        menuButton.setAttribute(
            "aria-expanded",
            "false"
        );

    });

});
```

}

/* =========================================================
4. NAVBAR SCROLL EFFECT
========================================================= */

function updateNavbar() {

```
if (!navbar) return;

if (window.scrollY > 40) {

    navbar.style.background =
        "rgba(7, 7, 11, 0.90)";

    navbar.style.borderBottom =
        "1px solid rgba(255, 255, 255, 0.08)";

} else {

    navbar.style.background =
        "rgba(7, 7, 11, 0.72)";

    navbar.style.borderBottom =
        "1px solid rgba(255, 255, 255, 0.05)";

}
```

}

window.addEventListener("scroll", updateNavbar);

updateNavbar();

/* =========================================================
5. ACTIVE NAVIGATION LINK
========================================================= */

function updateActiveNavigation() {

```
let currentSection = "";

const scrollPosition =
    window.scrollY + window.innerHeight * 0.35;


sections.forEach((section) => {

    const sectionTop = section.offsetTop;

    const sectionHeight = section.offsetHeight;

    if (
        scrollPosition >= sectionTop &&
        scrollPosition < sectionTop + sectionHeight
    ) {

        currentSection = section.getAttribute("id");

    }

});


navLinks.forEach((link) => {

    link.classList.remove("active");

    const href = link.getAttribute("href");

    if (href === `#${currentSection}`) {

        link.classList.add("active");

    }

});
```

}

window.addEventListener(
"scroll",
updateActiveNavigation
);

updateActiveNavigation();

/* =========================================================
6. SMOOTH SCROLL
========================================================= */

document.querySelectorAll('a[href^="#"]').forEach((link) => {

```
link.addEventListener("click", (event) => {

    const targetId =
        link.getAttribute("href");

    if (
        !targetId ||
        targetId === "#" ||
        targetId.length < 2
    ) {
        return;
    }


    const target =
        document.querySelector(targetId);


    if (!target) return;


    event.preventDefault();


    const navbarHeight =
        navbar ? navbar.offsetHeight : 0;


    const targetPosition =
        target.getBoundingClientRect().top +
        window.scrollY -
        navbarHeight;


    window.scrollTo({
        top: targetPosition,
        behavior: "smooth"
    });

});
```

});

/* =========================================================
7. SCROLL REVEAL
========================================================= */

const revealElements = document.querySelectorAll(
".section, .project-featured, .project-card, .experience-item, .cert-item"
);

if ("IntersectionObserver" in window) {

```
const revealObserver =
    new IntersectionObserver(
        (entries, observer) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "visible"
                    );

                    observer.unobserve(
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
```

} else {

```
revealElements.forEach((element) => {

    element.classList.add("visible");

});
```

}

/* =========================================================
8. STAGGER PROJECT CARDS
========================================================= */

const projectCards =
document.querySelectorAll(".project-card");

projectCards.forEach((card, index) => {

```
card.style.transitionDelay =
    `${index * 0.08}s`;
```

});

/* =========================================================
9. STAGGER SKILL CARDS
========================================================= */

const skillCards =
document.querySelectorAll(".skill-card");

skillCards.forEach((card, index) => {

```
card.style.transitionDelay =
    `${index * 0.07}s`;
```

});

/* =========================================================
10. HERO PROFILE PARALLAX
========================================================= */

if (profileFrame && window.innerWidth > 700) {

```
document.addEventListener(
    "mousemove",
    (event) => {

        const x =
            (event.clientX /
                window.innerWidth -
                0.5) * 8;

        const y =
            (event.clientY /
                window.innerHeight -
                0.5) * 8;


        profileFrame.style.transform =
            `translate(${x}px, ${y}px)`;

    }
);
```

}

/* =========================================================
11. PROJECT CARD TILT
========================================================= */

if (window.innerWidth > 900) {

```
projectCards.forEach((card) => {

    card.addEventListener(
        "mousemove",
        (event) => {

            const rect =
                card.getBoundingClientRect();


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


            card.style.transform =
                `perspective(800px)
                 rotateX(${rotateX}deg)
                 rotateY(${rotateY}deg)
                 translateY(-5px)`;

        }
    );


    card.addEventListener(
        "mouseleave",
        () => {

            card.style.transform =
                "perspective(800px) rotateX(0) rotateY(0) translateY(0)";

        }
    );

});
```

}

/* =========================================================
12. HERO MOUSE MOVEMENT
========================================================= */

const hero =
document.querySelector(".hero");

if (hero && window.innerWidth > 900) {

```
hero.addEventListener(
    "mousemove",
    (event) => {

        const x =
            (event.clientX /
                window.innerWidth -
                0.5);

        const y =
            (event.clientY /
                window.innerHeight -
                0.5);


        const grid =
            document.querySelector(".hero-grid");


        if (grid) {

            grid.style.transform =
                `translate(${x * 12}px, ${y * 12}px)`;

        }

    }
);
```

}

/* =========================================================
13. ESC KEY — CLOSE MOBILE MENU
========================================================= */

document.addEventListener(
"keydown",
(event) => {

```
    if (
        event.key === "Escape" &&
        mobileMenu
    ) {

        mobileMenu.classList.remove(
            "open"
        );

    }

}
```

);

/* =========================================================
14. CURRENT YEAR
========================================================= */

const footerYear =
document.querySelector("footer span");

if (footerYear) {

```
footerYear.textContent =
    `© ${new Date().getFullYear()}`;
```

}

/* =========================================================
15. IMAGE FALLBACK
========================================================= */

const projectImages =
document.querySelectorAll(
".project-screens img"
);

projectImages.forEach((image) => {

```
image.addEventListener(
    "error",
    () => {

        image.style.display = "none";

    }
);
```

});

/* =========================================================
16. PAGE LOADED
========================================================= */

window.addEventListener(
"load",
() => {

  ```
      document.body.classList.add(
          "page-loaded"
      );

  ```
}

);
```
