let navbarSelector = document.querySelector("nav");
let technologyItemList = document.querySelectorAll(".technologies__item");


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
    console.log(technologyItemList);
    technologyItemList.forEach(item => {
        item.addEventListener('click', event => {
            let technologyItemFront = item.firstElementChild;
            let technologyItemBack = item.lastElementChild;
            technologyItemFront.classList.toggle("technologies__item--front--active");
            technologyItemBack.classList.toggle("technologies__item--back--active");
        })
    })
}



window.addEventListener('DOMContentLoaded', (event) => {
    window.addEventListener("scroll", () => {
        fixedNavbar();
    });
    technologyItemActive();
});