let navbarSelector = document.querySelector("nav");
let technologyItemList = document.querySelectorAll(".technologies__item");
let portfolioItemList = document.querySelectorAll(".portfolio__item");
let navTogglerSelector = document.querySelector(".nav__toggler");
let navItemsSelector = document.querySelectorAll(".nav__list--item");


function fixedNavbar() {
    let scroll = window.pageYOffset;
    if (scroll > 0) {
        navbarSelector.classList.add("nav__scrolled");
    }
    else {
        navbarSelector.classList.remove("nav__scrolled");
    }
}

function technologyItemActive() {
    technologyItemList.forEach(item => {
        item.addEventListener('click', event => {
            let technologyItemFront = item.firstElementChild;
            let technologyItemBack = item.lastElementChild;
            technologyItemFront.classList.toggle("technologies__item--front--active");
            technologyItemBack.classList.toggle("technologies__item--back--active");
        })
    })
}

function navMobile() {
    navTogglerSelector.addEventListener("click", () => {
        navTogglerSelector.classList.toggle("nav__toggler--active");
    });
}


function portfolioItemActive() {
    portfolioItemList.forEach(item => {
        item.addEventListener('click', event => {
            let portfolioItemFront = item.firstElementChild;
            let portfolioItemBack = item.lastElementChild;
            portfolioItemFront.classList.toggle("portfolio__item--front--active");
            portfolioItemBack.classList.toggle("portfolio__item--back--active");
        })
    })
}


function closeMobileMenuOnClick() {
    navItemsSelector.forEach(item => {
        item.addEventListener('click', event => {
            navTogglerSelector.classList.remove("nav__toggler--active");
        })
    })
}



window.addEventListener('DOMContentLoaded', (event) => {
    window.addEventListener("scroll", () => {
        fixedNavbar();
    });
    technologyItemActive();
    portfolioItemActive();
    closeMobileMenuOnClick()
    navMobile();
}
);