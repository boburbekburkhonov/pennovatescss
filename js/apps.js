const elHeader = document.querySelector(".header");
const elHeaderBtn = document.querySelector(".header__btn");

elHeader.addEventListener("click", () => {
  elHeader.classList.toggle("header--open")
})

function timeShover() {
  let timeNow = new Data();

document.querySelector(".hero__form-hour").textContent = timeNow.getHours();
document.querySelector(".hero__form-minute").textContent = timeNow.getMinutes();
document.querySelector(".hero__form-second").textContent = timeNow.getSeconds();

}

setInterval(() => {
  timeShover();
}, 1000)