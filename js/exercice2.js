"use strict";

let message = "JavaScript is ok :)";
alert(message);
console.log(message);

function onLoad() {
  document.getElementById("before19").addEventListener("click", function () {
    getNbDays();
  });
  window.setInterval(updateClock1, 1000);
  // window.setTimeout(updateClock2, 1000);
  window.setInterval(updateGraphicClock, 1000);
}

function getNbDays() {
  const millis = new Date(2023, 6, 19).getTime() - Date.now();
  let lastNumberOfYear = new Date().getFullYear().toString().slice(-1);
  let days = Math.floor(millis / 1000 / 60 / 60 / 24);
  let elements = document.getElementsByTagName("p");
  for (let i = 0; i < elements.length; i++) {
    if (elements[i].id === "before19") {
      if (days == 1)
        elements[i].innerHTML = elements[i].innerHTML.replace("jours", "jour");
      elements[i].innerHTML = elements[i].innerHTML.replace(/xxx/, days);
      elements[i].innerHTML = elements[i].innerHTML.replace(
        /X/,
        lastNumberOfYear
      );
      break;
    }
  }
}

function updateClock1() {
  let paragraph = document.getElementById("clock");
  let date = new Date();
  paragraph.innerHTML = date.toLocaleTimeString();
}

function updateClock2() {
  let paragraph = document.getElementById("clock");
  let date = new Date();
  paragraph.innerHTML = date.toLocaleTimeString();
}

function updateGraphicClock() {
  let graphicClock = document.getElementById("graphic-clock");
  let hours1 = graphicClock.getElementsByTagName("img")[0];
  let hours2 = graphicClock.getElementsByTagName("img")[1];
  let minutes1 = graphicClock.getElementsByTagName("img")[2];
  let minutes2 = graphicClock.getElementsByTagName("img")[3];
  let seconds1 = graphicClock.getElementsByTagName("img")[4];
  let seconds2 = graphicClock.getElementsByTagName("img")[5];
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  hours1.src = `assets/images/${Math.floor(hours / 10)}.gif`;
  hours2.src = `assets/images/${hours % 10}.gif`;
  minutes1.src = `assets/images/${Math.floor(minutes / 10)}.gif`;
  minutes2.src = `assets/images/${minutes % 10}.gif`;
  seconds1.src = `assets/images/${Math.floor(seconds / 10)}.gif`;
  seconds2.src = `assets/images/${seconds % 10}.gif`;
}
