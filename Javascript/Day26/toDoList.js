const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", removeTodo);

document.querySelector(".todo-input").addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    addTodo(e);
  }
});

function addTodo(e) {
  e.preventDefault();

  if (todoInput.value === "") return;
  else {
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    const newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);

    saveLocalTodos(todoInput.value);

    const editButton = document.createElement("button");
    editButton.innerHTML = `<i class="fa-solid fa-pen-to-square"></i>`;
    editButton.classList.add("edit-btn");
    todoDiv.appendChild(editButton);

    const trashButton = document.createElement("button");
    trashButton.classList.add("trash-btn");
    trashButton.classList.add("fa-solid");
    trashButton.classList.add("fa-trash");
    todoDiv.appendChild(trashButton);

    todoList.appendChild(todoDiv);

    todoInput.value = "";
  }
}


function removeTodo(e) {
  console.log(e.target.classList);
  if (e.target.classList.contains("trash-btn")) {
    e.target.parentElement.remove();
    removeLocalTodos(e.target.parentElement);
  }
}

function saveLocalTodos(todo) {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  todos.push(todo);
  localStorage.setItem("todos", JSON.stringify(todos));
}

function removeLocalTodos(todo) {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  const todoIndex = todo.children[0].innerText;
  todos.splice(todos.indexOf(todoIndex), 1);
  localStorage.setItem("todos", JSON.stringify(todos));
}
