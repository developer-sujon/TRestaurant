//define ui selector
const openNav = document.getElementById("openNav");
const closeNav = document.getElementById("closeNav");
const nav = document.getElementById("nav");
const lightbox = document.querySelector(".lightbox");
const lightboxBody = document.querySelector(".lightbox_body");
const images = document.querySelectorAll("#gallery");

// close off loader
const loader = document.querySelector(".loader");
window.addEventListener("load", function () {
  loader.classList.add("hidden");
});

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

// lightbox
images.forEach(function (image) {
  image.addEventListener("click", function () {
    lightbox.classList.add("scale-100");
    const img = document.createElement("img");
    img.src = image.src;
    img.classList.add("cover-img");

    if (lightboxBody.children[0]) {
      lightboxBody.removeChild(lightboxBody.children[0]);
    }
    lightboxBody.appendChild(img);
  });
});

// close lightbox
lightbox.addEventListener("click", function (e) {
  const idName = e.target.getAttribute("id");
  if (idName === "lightbox") {
    lightbox.classList.remove("scale-100");
  }
});

// get current year
const year = document.querySelector(".year");
const getYear = new Date().getFullYear();
year.innerText = getYear;
