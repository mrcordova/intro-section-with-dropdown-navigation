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
  const img = e.currentTarget.querySelector("img");
  e.currentTarget.nextElementSibling.classList.toggle("show-submenu");
  changeArrowImg(e);
};
const desktopArrowChange = function (e) {
  const img = e.currentTarget.querySelector("img");
  changeArrowImg(e);
};
const changeArrowImg = function (e) {
  // observer.observe(img, { attributes: true });
  console.log(e.currentTarget);
  if (e.currentTarget.querySelector("img").src.toString().includes("down")) {
    // console.log("go up", img.src);
    e.currentTarget.querySelector("img").setAttribute("src", imgArrowUpSrc);
    e.currentTarget.querySelector("img").setAttribute("alt", "up");
  } else {
    // console.log("go down", img.src);
    e.currentTarget.querySelector("img").setAttribute("src", imgArrowSrc);
    e.currentTarget.querySelector("img").setAttribute("alt", "down");
  }
  e.currentTarget.querySelector("img").onload = function () {
    alert("New image has been loaded");
  };
};

mobileFeatureBtn.addEventListener("click", toggleSubMenu);
mobileCompanyBtn.addEventListener("click", toggleSubMenu);
desktopFeatureBtn.addEventListener("click", desktopArrowChange);
desktopCompanyBtn.addEventListener("click", desktopArrowChange);
