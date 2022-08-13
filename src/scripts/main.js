//define ui selector
const openNav = document.getElementById("openNav");
const closeNav = document.getElementById("closeNav");
const nav = document.getElementById("nav");

openNav.addEventListener("click", (e) => {
  nav.classList.add("right-0");
  openNav.classList.remove("z-10");
  nav.classList.remove("-right-full");
});

closeNav.addEventListener("click", (e) => {
  nav.classList.add("-right-full");
  nav.classList.remove("right-0");
  openNav.classList.add("z-10");
});
