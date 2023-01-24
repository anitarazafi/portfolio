const header = document.getElementById("header");
function fixNav() {
  if (window.scrollY > header.offsetHeight + 150) {
    header.classList.add("sticky-top");
  } else {
    header.classList.remove("sticky-top");
  }
}
window.addEventListener("scroll", fixNav);

/* Initialize Swiper  */
var swiper = new Swiper(".technologies", {
  cssMode: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  mousewheel: true,
  keyboard: true,

  slidesPerView: 3,
  spaceBetween: 30,
});
