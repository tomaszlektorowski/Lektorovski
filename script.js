let navbarSelector = document.querySelector("nav");


function fixedNavbar() {
    let scroll = window.pageYOffset;
    if (scroll > 0) {
        navbarSelector.classList.add("nav__scrolled");
    }
    else {
        navbarSelector.classList.remove("nav__scrolled");
    }
}



window.addEventListener('DOMContentLoaded', (event) => {
    window.addEventListener("scroll", () => {
        fixedNavbar();
    });

});