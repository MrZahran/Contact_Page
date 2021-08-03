let mainContainer = document.querySelector("div.container");
let avatarContainer = document.querySelector("div.container div.avatar");
let avatarImg = document.querySelector("div.avatar img");
let circleIcon = document.querySelector(".circle-container");
let allIconsCircle = document.querySelectorAll(".circle-container a");
let contactIcon = document.querySelector("div.content i");
let bottomDiv = document.querySelector("div.bottom");
let contentDiv = document.querySelector("div.content");

console.log(allIconsCircle);

function viewContacts() {
  avatarContainer.style.position = "absolute";
  avatarContainer.style.top = "152px";
  avatarImg.style.width = "280px";
  circleIcon.style.opacity = "1";
  bottomDiv.style.opacity = "0";
  bottomDiv.style.top = "55%";
  setTimeout(function () {
    bottomDiv.style.display = "none";
  }, 1000);
}

function moveIcons() {
  setTimeout(function () {
    allIconsCircle[0].style.transform = "translate(12em)";
  }, 300);

  setTimeout(function () {
    allIconsCircle[1].style.transform =
      "rotate(45deg) translate(12em) rotate(-45deg)";
  }, 600);

  setTimeout(function () {
    allIconsCircle[2].style.transform =
      "rotate(90deg) translate(12em) rotate(-90deg)";
  }, 900);

  setTimeout(function () {
    allIconsCircle[3].style.transform =
      "rotate(135deg) translate(12em) rotate(-135deg)";
  }, 1200);

  setTimeout(function () {
    allIconsCircle[4].style.transform = "translate(-12em)";
  }, 1500);

  setTimeout(function () {
    allIconsCircle[5].style.transform =
      "rotate(225deg) translate(12em) rotate(-225deg)";
  }, 1800);

  setTimeout(function () {
    allIconsCircle[6].style.transform =
      "rotate(270deg) translate(12em) rotate(-270deg)";
  }, 2100);

  setTimeout(function () {
    allIconsCircle[7].style.transform =
      "rotate(315deg) translate(12em) rotate(-315deg)";
  }, 2400);
}

contactIcon.addEventListener("click", function (e) {
  viewContacts();
  moveIcons();
});
