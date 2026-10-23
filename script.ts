const taskInput = document.getElementById("taskInput") as HTMLInputElement;
const taskList = document.getElementById("taskList") as HTMLUListElement;

function addTask(): void {
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Digite uma tarefa.");
    return;
  }

  const item = document.createElement("li");
  item.textContent = taskText;

  taskList.appendChild(item);

  taskInput.value = "";
}
