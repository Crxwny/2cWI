let todos = [
  { id: 1, title: "Putzen", isDone: false },
  { id: 2, title: "Kochen", isDone: true },
  { id: 3, title: "Einkaufen", isDone: false },
  { id: 4, title: "Lernen", isDone: false },
];

let maxId = 4;
printTasks();

document.getElementById("input").addEventListener("change", function (event) {
  console.log(event.target.value);
  maxId++;
  todos.push({ id: maxId, title: event.target.value, isDone: false });
  printTasks();
  event.target.value = "";
});

function printTasks() {
  let html = "";
  todos.forEach((element) => {
    let style = element.isDone ? "green" : "none";
    html +=
      "<div class='task' style='background-color:" +
      style +
      "'>" +
      element.title +
      " - " +
      element.isDone +
      "<div onClick = 'setIsDone(" +
      element.id +
      ")'>Done</div><div onClick = 'deleteTask(" +
      element.id +
      ")'>Delete</div></div>";
  });

  document.getElementById("todos").innerHTML = html;
}

function deleteTask(id) {
  let index = todos.findIndex((element) => {
    if (element.id === id) {
      return true;
    }
  });
  todos.splice(index, 1);
  printTasks();
}

function setIsDone(id) {
  let todo = todos.find((element) => {
    if (element.id === id) {
      return true;
    }
  });
  todo.isDone = !todo.isDone;
  printTasks();
}
