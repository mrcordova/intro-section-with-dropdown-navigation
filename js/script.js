const mobileFeatureBtn = document.querySelector("#mobile-features-list>button");
const mobileCompanyBtn = document.querySelector("#mobile-company-list>button");
const desktopFeatureBtn = document.getElementById("features-btn");
const desktopCompanyBtn = document.getElementById("company-btn");

const toggleSubMenu = function (e) {
  const img = e.currentTarget.querySelector("img");
  e.currentTarget.nextElementSibling.classList.toggle("show-submenu");
  changeArrowImg(img);
};

const changeArrowImg = function (img) {
  if (img.src.includes("down")) {
    img.src = img.src.replace("down", "up");
  } else {
    img.src = img.src.replace("up", "down");
  }
};

mobileFeatureBtn.addEventListener("click", toggleSubMenu);
mobileCompanyBtn.addEventListener("click", toggleSubMenu);
desktopFeatureBtn.addEventListener("click", (e) => {
  const img = e.currentTarget.querySelector("img");
  changeArrowImg(img);
});
desktopCompanyBtn.addEventListener("click", (e) => {
  const img = e.currentTarget.querySelector("img");
  changeArrowImg(img);
});
