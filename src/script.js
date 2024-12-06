"use strict";
const hamburger = document.querySelector(".hamburger");
const navList = document.querySelector(".nav-list");
const nav = document.querySelector("nav");
const buttonJoin = document.querySelector(".btn-join");

const movingJoinButton = function () {
  if (window.innerWidth <= 900) {
    if (!navList.contains(buttonJoin)) {
      navList.appendChild(buttonJoin);
    }
  } else {
    if (!nav.contains(buttonJoin)) {
      nav.insertBefore(buttonJoin, hamburger);
    }
  }
};

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navList.classList.toggle("active");
});

// Close menu when clicking a link
document.querySelectorAll(".list-item").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navList.classList.remove("active");
  })
);

window.addEventListener('load',movingJoinButton)
window.addEventListener('resize',movingJoinButton)