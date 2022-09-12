

const switchElement = document.querySelector(".switch");

switchElement.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

// for the menu button in the nav bar when at the correct resolution//

const toggleButton = document.getElementById("toggle-button");
const naviList = document.getElementById("navi-list");
const iSwitch = document.getElementById("iswitch");
toggleButton.addEventListener("click", () => {
  naviList.classList.toggle("active");
  iSwitch.classList.toggle("active");
});
