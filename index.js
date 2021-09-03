function prev() {
    let slide = document.getElementsByClassName("slide");

    for (let i = 0; i < slide.length; i++) {
        if (window.getComputedStyle(slide[i]).order == 1) {
            slide[i].style.order = 2;
        }
        else if (window.getComputedStyle(slide[i]).order == 2) {
            slide[i].style.order = 3;
        }
        else {
            slide[i].style.order = 1;
        }
    }

    style();
}

function next() {
    let slide = document.getElementsByClassName("slide");

    for (let i = 0; i < slide.length; i++) {
        if (window.getComputedStyle(slide[i]).order == 1) {
            slide[i].style.order = 3;
        }
        else if (window.getComputedStyle(slide[i]).order == 2) {
            slide[i].style.order = 1;
        }
        else {
            slide[i].style.order = 2;
        }
    }

    style();
}

function style() {
    let slide = document.getElementsByClassName("slide");

    for (let i = 0; i < slide.length; i++) {
        if (window.getComputedStyle(slide[i]).order == 2) {
            slide[i].style.zIndex = 10;
            slide[i].style.opacity = "1";
            slide[i].style.marginRight = "0";
            slide[i].style.marginLeft = "0";
            slide[i].style.height = "18rem";
            slide[i].style.width = "18rem";
        }
        else if (window.getComputedStyle(slide[i]).order == 1) {
            slide[i].style.zIndex = 0;
            slide[i].style.marginRight = "-80px";
            slide[i].style.marginLeft = "0";
            slide[i].style.height = "15.3rem";
            slide[i].style.width = "15.3rem";
            slide[i].style.opacity = "0.5";
        }
        else {
            slide[i].style.zIndex = 0;
            slide[i].style.marginLeft = "-80px";
            slide[i].style.marginRight = "0";
            slide[i].style.height = "15.3rem";
            slide[i].style.width = "15.3rem";
            slide[i].style.opacity = "0.5";
        }
    }
}

const overlayButton = document.querySelector('[data-js="buttonMenu"]');
const menuOverlay = document.querySelector('[data-js="menu-overlay"]');

const menuImage = document.querySelector('[data-js="menuImage"]');

overlayButton.addEventListener('click', () => {
    const overlayState = menuOverlay.style.display;

    if (overlayState === "flex") {
        menuOverlay.style.display = "none";
        menuImage.src = "public/img/Menu.svg"
        console.log(menuImage)
    } else {
        console.log(menuImage)
        menuOverlay.style.display = "flex";
        menuImage.src = "public/img/xmenu.svg"
    }
});


window.onload = style;
