const mobileFeatureBtn = document.querySelector("#mobile-features-list>button");
const mobileCompanyBtn = document.querySelector("#mobile-company-list>button");
console.log(mobileCompanyBtn);

const toggleSubMenu = function (e) {
  e.currentTarget.nextElementSibling.classList.toggle("show-submenu");
  console.log(e.currentTarget.nextElementSibling.classList);
};

mobileFeatureBtn.addEventListener("click", toggleSubMenu);
mobileCompanyBtn.addEventListener("click", toggleSubMenu);
