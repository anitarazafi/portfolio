const header = document.getElementById("header");
function fixNav() {
  if (window.scrollY > header.offsetHeight + 150) {
    header.classList.add("sticky-top");
  } else {
    header.classList.remove("sticky-top");
  }
}
window.addEventListener("scroll", fixNav);
