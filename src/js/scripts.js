"use strict";

const contactForm = document.querySelector(".contact-form");
const contactFormSuccessMsg = document.querySelector(".success-message");

contactForm.addEventListener("submit", function (e) {
  e.preventDefault();
  contactFormSuccessMsg.classList.remove("hidden");
});
