const registerButton = document.querySelector(".header__register");
const dropdownName = document.querySelectorAll(".nav__dropdown-name");
const dropdownContainer = document.querySelectorAll(".nav__dropdown-container");
const dropdownArrow = document.querySelectorAll(".dropdown__arrow");
const mobileDropdownArrow = document.querySelectorAll(
  ".mobile__dropdown-arrow"
);
const mobileNavSlide = document.querySelector(".mobile__slide-container");
const mobileDropdownName = document.querySelectorAll(".mobile__nav-name");
const mobileDropdownContainer = document.querySelectorAll(
  ".mobile__dropdown-container"
);
const hamburgerButton = document.querySelector(".hamburger");
const lines = document.querySelectorAll(".line");

dropdownName[0].addEventListener("click", () => {
  dropdownContainer[0].classList.toggle("active");
  dropdownArrow[0].classList.toggle("rotate");
  dropdownName[0].classList.toggle("bolden");
});
dropdownName[1].addEventListener("click", () => {
  dropdownContainer[1].classList.toggle("active");
  dropdownArrow[1].classList.toggle("rotate");
  dropdownName[1].classList.toggle("bolden");
});

let i = 1;

hamburgerButton.addEventListener("click", () => {
  i += 1;
  if (i % 2 == 0) {
    lines[0].style.transform = "rotate(45deg)";
    lines[2].style.transform = "translateX(-10em)";
    lines[1].style.transform = "rotate(135deg)";
    mobileNavSlide.style.right = "0";
  } else {
    lines[0].style.transform = "rotate(0deg)";
    lines[2].style.transform = "translateX(0em)";
    lines[1].style.transform = "rotate(0deg)";
    mobileNavSlide.style.right = "-40em";
  }
});
mobileDropdownName[0].addEventListener("click", () => {
  mobileDropdownContainer[0].classList.toggle("active");
  mobileDropdownArrow[0].classList.toggle("rotate");
  mobileDropdownName[0].classList.toggle("bolden");
});
mobileDropdownName[1].addEventListener("click", () => {
  mobileDropdownContainer[1].classList.toggle("active");
  mobileDropdownArrow[1].classList.toggle("rotate");
  mobileDropdownName[1].classList.toggle("bolden");
});
