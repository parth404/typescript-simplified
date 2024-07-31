import "./styles.css";

type Todo = {
  id: string;
  name: string;
  complete: boolean;
};

const form = document.querySelector<HTMLFormElement>("#new-todo-form")!;
const todoInput = document.querySelector<HTMLInputElement>("#todo-input")!;
const list = document.querySelector<HTMLUListElement>("#list")!;

let todos: Todo[] = loadTodos();
todos.forEach(renderNewTodo);

form.addEventListener("submit", handleFormSubmit);

function handleFormSubmit(e: Event) {
  e.preventDefault();

  const todoName = todoInput.value.trim();
  if (!todoName) return;

  const newTodo: Todo = {
    id: crypto.randomUUID(),
    name: todoName,
    complete: false,
  };

  todos.push(newTodo);
  renderNewTodo(newTodo);
  saveTodos();
  todoInput.value = "";
}

function renderNewTodo(todo: Todo) {
  const listItem = createListItem(todo);
  list.append(listItem);
}

function createListItem(todo: Todo): HTMLLIElement {
  const listItem = document.createElement("li");
  listItem.classList.add("list-item");

  const label = document.createElement("label");
  label.classList.add("list-item-label");

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.checked = todo.complete;
  checkbox.classList.add("label-input");
  checkbox.addEventListener("change", () =>
    handleCheckboxChange(todo, checkbox)
  );

  const textElement = document.createElement("span");
  textElement.classList.add("label-text");
  textElement.innerText = todo.name;

  const deleteButton = document.createElement("button");
  deleteButton.classList.add("delete-btn");
  deleteButton.innerText = "Delete";
  deleteButton.addEventListener("click", () =>
    handleDeleteButtonClick(todo, listItem)
  );

  label.append(checkbox, textElement);
  listItem.append(label, deleteButton);

  return listItem;
}

function handleCheckboxChange(todo: Todo, checkbox: HTMLInputElement) {
  todo.complete = checkbox.checked;
  saveTodos();
}

function handleDeleteButtonClick(todo: Todo, listItem: HTMLLIElement) {
  listItem.remove();
  todos = todos.filter((t) => t.id !== todo.id);
  saveTodos();
}

function saveTodos() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

function loadTodos(): Todo[] {
  const value = localStorage.getItem("todos");
  return value ? (JSON.parse(value) as Todo[]) : [];
}
