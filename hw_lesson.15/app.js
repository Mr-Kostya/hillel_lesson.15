const todoForm = document.querySelector(".todo-form");
const todoInput = document.querySelector("input");
const todoCollection = document.querySelector(".todo-collection");
const currentForm = document.querySelector(".todo-form");

todoForm.addEventListener("submit", onSubmit);

const createDeleteButton = () => {
    const deleteButton = document.createElement("button");
    deleteButton.classList.add("button");
    deleteButton.classList.add("button--todo");
    deleteButton.classList.add("button--delete");
    deleteButton.innerText = "Delete";
    deleteButton.id = "delete";
    return deleteButton;
};

const createDoneButton = () => {
    const doneButton = document.createElement("button");
    doneButton.classList.add("button");
    doneButton.classList.add("button--todo");
    doneButton.classList.add("button--done");
    doneButton.id = "done";
    doneButton.innerText = "Done";
    return doneButton;
};

const createTitle = (value) => {
    const todoTitle = document.createElement("span");
    todoTitle.classList.add("todo-collection__item__title");
    todoTitle.innerText = value;
    return todoTitle;
};

const events = {
    done: (target) => target.classList.add("todo-item__done"),
    delete: (target) => target.remove()
};

const onClick = (e) => events[e.target.id](e.currentTarget);

const createTodoItemElement = () => {
    const li = document.createElement("li");
    li.classList.add("todo-collection__item");
    li.appendChild(createTitle(todoInput.value));
    li.appendChild(createDoneButton());
    li.appendChild(createDeleteButton());
    li.addEventListener("click", onClick);
    todoCollection.appendChild(li);
};

function onSubmit(e) {
    e.preventDefault();

    if (todoInput.value === "") {
        alert('fill in the field!');
        return false;
    }
    createTodoItemElement();
    currentForm.reset();
}
