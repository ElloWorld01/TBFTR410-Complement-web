"use strict";

let message = "JavaScript is ok :)";
alert(message);
console.log(message);

function onLoad() {
  document.getElementById("input").addEventListener("input", function () {
    if (this.value == "") this.className = "white";
    else if (this.value.match(/^[0-9]+$/)) this.className = "green";
    else this.className = "red";
  });
  menu();
}

function menu() {
  let menu = document.getElementsByTagName("aside")[0];
  let h2s = menu.getElementsByTagName("h2");
  for (let i = 0; i < h2s.length; i++) {
    let img = document.createElement("img");
    img.src = "assets/images/minus.gif";
    let text = h2s[i].innerHTML;
    h2s[i].innerHTML = "";
    h2s[i].appendChild(img);
    h2s[i].appendChild(document.createTextNode(text));
  }
  for (let i = 0; i < h2s.length; i++) {
    h2s[i].addEventListener("click", function () {
      let img = this.getElementsByTagName("img")[0];
      if (img.src.match("plus")) {
        img.src = "assets/images/minus.gif";
        this.nextElementSibling.style.display = "block";
      } else {
        img.src = "assets/images/plus.gif";
        this.nextElementSibling.style.display = "none";
      }
    });
  }
}
