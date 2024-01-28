"use strict";
// Selecting elements
const navbar = document.querySelector(".nav");
const navLinks = document.querySelectorAll(".nav__link");

// NAVBAR APPEAR/DISAPPEAR
document.addEventListener("DOMContentLoaded", function () {
  // Set the scroll position at which you want the navbar to appear
  const scrollThreshold = 1000;

  // Event listener for the scroll event
  window.addEventListener("scroll", function () {
    // Get the current scroll position
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;

    // Toggle the visibility of the navbar based on the scroll position
    if (scrollPosition > scrollThreshold) {
      navbar.classList.remove("hidden");
      console.log("hello");
    } else {
      navbar.classList.add("hidden");
    }
  });
});

// SMOOTH SCROLL
navLinks.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  });
});

// Get dates
function getFutureDate(daysToAdd) {
  const now = new Date();
  const futureDate = new Date(now);
  futureDate.setDate(now.getDate() + daysToAdd);
  return futureDate;
}

const atelier1Date = getFutureDate(12);
const atelier2Date = getFutureDate(18);
const atelier3Date = getFutureDate(29);

const options = {
  day: "numeric",
  month: "long",
  year: "numeric",
  weekday: "long",
};

const locale = "fr-FR";

const formattedAtelier1 = new Intl.DateTimeFormat(locale, options).format(
  atelier1Date
);
const formattedAtelier2 = new Intl.DateTimeFormat(locale, options).format(
  atelier2Date
);
const formattedAtelier3 = new Intl.DateTimeFormat(locale, options).format(
  atelier3Date
);

// Update HTML elements with the formatted dates
document.getElementById("atelier1").innerText = "Le : " + formattedAtelier1;
document.getElementById("atelier2").innerText = "Le : " + formattedAtelier2;
document.getElementById("atelier3").innerText = "Le : " + formattedAtelier3;
