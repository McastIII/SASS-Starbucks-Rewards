// toggle menu
const toggleMenu = document.querySelector(".toggle__menu");
const mobileNav = document.querySelector(".header__nav");
const header = document.querySelector(".header");
toggleMenu.addEventListener("click", () => {
    toggleMenu.classList.toggle("open");
    mobileNav.classList.toggle("open");
    header.classList.toggle("open");
});



// dropdown
const links = document.querySelectorAll(".links__drop__item h4");

links.forEach((baba) => {
    baba.addEventListener("click", () => {
    baba.nextElementSibling.classList.toggle("open");
    baba.querySelector("i").classList.toggle("open");
    });
});

//coffee nav
const starNav = document.querySelectorAll(".star__nav__link");
const starContent = document.querySelectorAll(".coffee__tab__content");
starNav.forEach((star) => {
    star.addEventListener("click", () => {
    removeActiveStar();
    star.classList.add("active");
    const activeContent = document.querySelector(`#${star.id}-content`);
    removeActiveContent();
    activeContent.classList.add("active");
    });
});

function removeActiveStar() {
    starNav.forEach((star) => {
    star.classList.remove("active");
    });
}

function removeActiveContent() {
    starContent.forEach((star) => {
    star.classList.remove("active");
    });
}

// // header scroll
// const header = document.querySelector(".header");
// const brandimg = document.querySelector(".branding img");
// window.addEventListener("scroll", () => {
//     console.log(window.pageYOffset);
//     if (window.pageYOffset >= 100) {
//     header.classList.add("blue");
//     brandimg.style = "background-color:red";
//     } else {
//     header.classList.remove("blue");}

// });

