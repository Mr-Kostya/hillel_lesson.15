const todoForm = document.querySelector(".todo-form");
const todoInput = document.querySelector("input");
const todoCollection = document.querySelector(".todo-collection");
const li = document.createElement("li");
const todoTitle = document.createElement("span");
const editableInput = document.createElement("input");
const editButton = document.createElement("button");
const saveButton = document.createElement("button");
const deleteButton = document.createElement("button");

todoForm.addEventListener("submit", onSubmit);

function onSubmit(e) {
    if (todoInput.value === "") {
        shakeForm()
        return;
    }

    li.classList.add("todo-collection__item");

    todoTitle.classList.add("todo-collection__item__title");
    todoTitle.innerText = todoInput.value;

    editableInput.classList.add("input");
    editableInput.classList.add("input--todo");
    editableInput.classList.add("hidden");
    editableInput.type = "text";
    editableInput.value = todoInput.value;

    editButton.classList.add("button");
    editButton.classList.add("button--todo");
    editButton.classList.add("button--edit");
    editButton.innerText = "Edit";

    saveButton.classList.add("button");
    saveButton.classList.add("button--todo");
    saveButton.classList.add("button--save");
    saveButton.classList.add("hidden");
    saveButton.innerText = "Save";

    li.appendChild(todoTitle);
    li.appendChild(editableInput);
    li.appendChild(editButton);
    li.appendChild(saveButton);
    li.appendChild(deleteButton);
    todoCollection.appendChild(li);

    editButton.addEventListener("click", () => {
        toggleTodoEditForm();
        editableInput.focus();
    });

    saveButton.addEventListener("click", () => {
        todoTitle.innerText = editableInput.value;
        toggleTodoEditForm();
    });

    deleteButton.addEventListener("click", () => {
            todoCollection.removeChild(li);
        updateDeleteButton()
    });

    todoInput.value = "";

    e.preventDefault();
}

function updateDeleteButton() {
    deleteButton.classList.add("button");
    deleteButton.classList.add("button--todo");
    deleteButton.classList.add("button--delete");
    deleteButton.innerText = "Delete";
}

function toggleTodoEditForm() {
    todoTitle.classList.toggle("hidden");
    editableInput.classList.toggle("hidden");
    editButton.classList.toggle("hidden");
    saveButton.classList.toggle("hidden");
}

