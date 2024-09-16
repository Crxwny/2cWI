function loadData(params) {
  fetch("https://api.openligadb.de/getbltable/bl1/2022").then((result) => {
    result.json().then((data) => {
      console.log(data);
      fillTable(data);
    });
  });
};

const fillTable = (data) => {
  let html = "";

  data.forEach((element) => {
    html +=
      "<div>" + element.points + " by Team " + element.teamName + "</div>";
  });
  document.getElementById("output").innerHTML = html;
};

loadData();
