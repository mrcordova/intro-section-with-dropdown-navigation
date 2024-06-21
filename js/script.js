const mobileFeatureBtn = document.querySelector("#mobile-features-list>button");
const mobileCompanyBtn = document.querySelector("#mobile-company-list>button");
const desktopFeatureBtn = document.getElementById("features-btn");
const desktopCompanyBtn = document.getElementById("company-btn");
const imgArrowSrc = "./images/icon-arrow-down.svg";
const imgArrowUpSrc = "./images/icon-arrow-up.svg";
let count = 0;
observer = new MutationObserver((changes) => {
  changes.forEach((change) => {
    if (change.attributeName.includes("alt")) {
      const img = change.target;
      if (img.src.includes("down")) {
        console.log("go up", img.src);
        img.setAttribute("src", imgArrowUpSrc);
      } else {
        console.log("go down", img.src);
        img.setAttribute("src", imgArrowSrc);
      }
    }
  });
});

const toggleSubMenu = function (e) {
  const img = e.currentTarget.querySelector(".img-arrow-up");
  e.currentTarget.nextElementSibling.classList.toggle("show-submenu");
  changeArrowImg(img);
};
const desktopArrowChange = function (e) {
  const img = e.currentTarget.querySelector(".img-arrow-up");
  // console.log(img);
  changeArrowImg(img);
};
const changeArrowImg = function (img) {
  img.classList.toggle("img-arrow-down");
  // console.log(img.classList);
};

mobileFeatureBtn.addEventListener("click", toggleSubMenu);
mobileCompanyBtn.addEventListener("click", toggleSubMenu);
desktopFeatureBtn.addEventListener("click", desktopArrowChange);
desktopCompanyBtn.addEventListener("click", desktopArrowChange);
