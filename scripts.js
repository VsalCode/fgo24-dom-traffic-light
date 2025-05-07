const red = document.querySelector(".kotak:nth-child(1) > div");
const yellow = document.querySelector(".kotak:nth-child(2) > div");
const green = document.querySelector(".kotak:nth-child(3) > div");

const trafficLights = () => {
  red.classList.add("red");
  setTimeout(() => {
    red.classList.remove("red");
    yellow.classList.add("yellow");
    setTimeout(() => {
      yellow.classList.remove("yellow");
      green.classList.add("green");
      setTimeout(() => {
        green.classList.remove("green");
        trafficLights(); 
      }, 3000); 
    }, 2000); 
  }, 3000); 
};

trafficLights();


  // setTimeout(() => {
  //   red.classList.add("red");

  //   setTimeout(() => {
  //     yellow.classList.add("yellow");
  //     red.remove("red");
  //     setTimeout(() => {
  //       yellow.remove("red");
  //       red.remove("red");
  //       green.classList.add("green");
  //       window.location.reload()
  //     }, 3000);
  //   }, 2000);
  // }, 3000);
