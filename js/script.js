const mobileFeatureBtn = document.querySelector("#mobile-features-list>button");
const mobileCompanyBtn = document.querySelector("#mobile-company-list>button");

const toggleSubMenu = function (e) {
  const img = e.currentTarget.querySelector("img");
  e.currentTarget.nextElementSibling.classList.toggle("show-submenu");
  if (img.src.includes("down")) {
    img.src = img.src.replace("down", "up");
  } else {
    img.src = img.src.replace("up", "down");
  }
};

mobileFeatureBtn.addEventListener("click", toggleSubMenu);
mobileCompanyBtn.addEventListener("click", toggleSubMenu);
