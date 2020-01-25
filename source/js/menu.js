"use strict"

var navWrapper = document.querySelector(".header__site-navigation");
var navToggleBtn = navWrapper.querySelector(".site-navigation__button-toggle");
var headerWrapper = document.querySelector(".header");

if (headerWrapper) {
  headerWrapper.classList.remove("header--no-js");
}

if (navToggleBtn) {
  navWrapper.classList.remove("site-navigation--no-js");

  navToggleBtn.addEventListener("click", function(evt) {
    evt.preventDefault();
    navWrapper.classList.toggle("site-navigation--show");
  });
}
