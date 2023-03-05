"use strict";

let message = "JavaScript is ok :)";
alert(message);
console.log(message);

function onLoad() {
  let searchPage;
  document
    .getElementById("search-button")
    .addEventListener("click", function () {
      searchPage = search(searchPage);
    });
}

function search(searchPage) {
  searchPage =
    searchPage || document.getElementsByTagName("body")[0].childNodes;
  let searchValue = document.getElementById("search-input").value;
  let searchResult = [];
  searchResult = recursiveSearch(searchPage, searchValue, searchResult);
  for (let i = 0; i < searchResult.length; i++) {
    let span = document.createElement("span");
    span.className = "select";
    span.innerHTML = searchValue;
    searchResult[i].nodeValue = searchResult[i].nodeValue.replace(
      searchValue,
      span.outerHTML
    );
  }
}

function recursiveSearch(searchPage, searchValue, searchResult) {
  for (let i = 0; i < searchPage.length; i++) {
    if (searchPage[i].nodeType === Node.TEXT_NODE) {
      if (searchPage[i].nodeValue.includes(searchValue)) {
        searchResult.push(searchPage[i]);
      }
    } else {
      recursiveSearch(searchPage[i].childNodes, searchValue, searchResult);
    }
  }
  return searchResult;
}
