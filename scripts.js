const red = document.querySelector(".kotak:nth-child(1) > div");
const yellow = document.querySelector(".kotak:nth-child(2) > div");
const green = document.querySelector(".kotak:nth-child(3) > div");

setInterval(() => {
  red.classList.add("red");
  setInterval(() => {
    yellow.classList.add("yellow");
    red.remove("red");
    setInterval(() => {
      green.classList.add("green");
      red.remove("red");
      yellow.remove("red");
    }, 3000);
  }, 2000);
});
