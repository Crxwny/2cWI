function loadData(params) {
  fetch("https://api.openligadb.de/getbltable/bl1/2022").then((result) => {
    result.json().then((data) => {
    console.log(data);})
  });
}

loadData();
