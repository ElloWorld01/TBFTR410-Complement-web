"use strict";

let message = "JavaScript is ok :)";
alert(message);
console.log(message);

function onLoad() {
  defineHeading1();
  defineHeading2();
  defineHeading3();
  defineHeading4();
  swapInnerHTML();
  dateAlter();
}

function defineHeading1() {
  document.title = document.getElementById("title").textContent;
}

function defineHeading2() {
  document.title = document.getElementsByTagName("h2")[0].textContent;
}

function defineHeading3() {
  let h2s = document.getElementsByTagName("h2");
  if (h2s.length > 0) {
    document.title = h2s[h2s.length - 1].textContent;
  } else {
    document.title = "Lombardo Elisabeth";
  }
}

function defineHeading4() {
  let elements = document.getElementsByClassName("firstOrLast");
  if (elements.length > 0) {
    if (elements.length % 2 == 0) {
      document.title = elements[0].textContent;
    } else {
      document.title = elements[elements.length - 1].textContent;
    }
  } else {
    document.title = "Lombardo Elisabeth";
  }
}

function swapInnerHTML() {
  let p = document.getElementsByTagName("p");
  let tmp = p[0].innerHTML;
  p[0].innerText = p[1].innerHTML;
  p[1].innerText = tmp;
}

function dateAlter() {
  let date = new Date();
  let days = {
    0: "dimanche",
    1: "lundi",
    2: "mardi",
    3: "mercredi",
    4: "jeudi",
    5: "vendredi",
    6: "samedi",
  };
  let day = days[date.getDay()];
  let dayNumber = date.getDate();
  let months = {
    0: "janvier",
    1: "février",
    2: "mars",
    3: "avril",
    4: "mai",
    5: "juin",
    6: "juillet",
    7: "août",
    8: "septembre",
    9: "octobre",
    10: "novembre",
    11: "décembre",
  };
  let month = months[date.getMonth()];
  let year = date.getFullYear();
  let firstAuthor = document
    .querySelectorAll('meta[name="author"]')[0]
    .getAttribute("content");
  // let lastAauthor = document.querySelectorAll('meta[name="author"]')[document.querySelectorAll('meta[name="author"]').length - 1].getAttribute('content');
  let div = document.getElementById("update-date");
  div.innerHTML = `Dernière modification : le ${day} ${dayNumber} ${month} ${year} par ${firstAuthor}`;
}
