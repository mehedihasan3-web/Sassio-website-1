const headerBottomWrapper = document.querySelector(".headerBottomWrapper");
const numberCountingWrapper = document.querySelector(".numberCountingWrapper");

// window scroll event
window.addEventListener("scroll", () => {
  // navbar toggole
  // if (window.scrollY > 200) {
  //   headerBottomWrapper.classList.add("active");
  // } else {
  //   headerBottomWrapper.classList.remove("active");
  // }
  if (window.scrollY >= 1070) {
    animation2();
  }

  if (window.scrollY >= 1310) {
    animation1();
  }
  if (window.scrollY > 1700) {
    // counting Number
    updateCounter();
    updateCounter1();
    updateCounter2();
    numberCountingWrapper.classList.add("translate0");
  }
});

// counter number

let counter = document.querySelector(".counter");
let counter1 = document.querySelector(".counter1");
let counter2 = document.querySelector(".counter2");
let counter3 = document.querySelector(".counter3");

let count2 = 0;
let target2 = 201;

function updateCounter2() {
  counter2.innerHTML = count2;
  counter3.innerHTML = count2;
  if (count2 < target2) {
    count2++;
    setTimeout(updateCounter2, 200);
  }
}
let count1 = 3000;
let target1 = 5021;

function updateCounter1() {
  counter1.innerHTML = count1;
  if (count1 < target1) {
    count1++;
    setTimeout(updateCounter1, 20);
  }
}
let count = 500;
let target = 1542;

function updateCounter() {
  counter.innerHTML = count;
  if (count < target) {
    count++;
    setTimeout(updateCounter, 50);
  }
}

function animation1() {
  const experience = document.querySelector(".experience");
  experience.classList.add("animation1");
}
function animation2() {
  const profileImg = document.querySelector(".profileImg");
  profileImg.classList.add("animation2");
}

const bar = document.querySelector(".bar");
const navlink = document.querySelector(".navlink");
const fullbody_black = document.querySelector(".fullbody_black");
const close = document.querySelector(".close");

bar.addEventListener("click", () => {
  setTimeout(() => {
    navlink.classList.add("navToggle");
  }, 500);
  fullbody_black.style.transform = `translate(0%)`;
});
close.addEventListener("click", () => {
  navlink.classList.remove("navToggle");
  setTimeout(() => {
    fullbody_black.style.transform = `translate(100%)`;
  }, 800);
});

//swiper js

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  grabCursor: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
