"use strict";
const menuIcon = document.querySelector(".menu-icon");
const closeIcon = document.querySelector(".mobile-close-icon");
const mobileList = document.querySelector("#mobile-list");
const overylay = document.querySelector(`.overlay`);
const links = document.querySelectorAll(`.link`);

menuIcon.addEventListener(`click`, function() {
    mobileList.style.transform = 'translateX(0)';
    overylay.style.display = "block";
})

closeIcon.addEventListener(`click`, function() {
    mobileList.style.transform = 'translateX(-100%)';
    overylay.style.display = "none";
})

overylay.addEventListener(`click`, function() {
    mobileList.style.transform = 'translateX(-100%)';
    overylay.style.display = "none";
})

links.forEach(link => {
    link.addEventListener(`click`, function() {
        mobileList.style.transform = 'translateX(-100%)';
        overylay.style.display = "none";
    })
})

