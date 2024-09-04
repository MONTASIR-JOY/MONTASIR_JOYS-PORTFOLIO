window.addEventListener("load", () => {
  // Scroll to the top of the page
  window.scrollTo(0, 0);
});
const hamburger = document.querySelectorAll("hamburger");
const navList = document.getElementById("");

hamburger.addEventListener("click", () => {
  navList.classList.toggle("active");
});
