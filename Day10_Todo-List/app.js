const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
window.addEventListener("load", eventHandler);
class TodoItem {
    static number = 0;
    constructor(content, isDone) {
        this.id = TodoItem.number++;
        this.content = content;
        this.isDone = Boolean(isDone);
    }

    get content() { return this._content };
    set content(newContent) { this._content = newContent };
    get isDone() { return this._isDone };
    set isDone(newStatus) { this._isDone = Boolean(newStatus) };
    get id() { return this._id };
    set id(newId) { return this._id = newId };
}

function eventHandler(event) {
    todoList = [];
    getTodoList();
    $(".todo-list").addEventListener("click", function (e) {
        if (e.target.matches(".fa-trash")) {
            deleteToDoItem(e.target.parentElement);
        }
        else if (e.target.matches(".todo-item span")) {
            const li = e.target.parentElement;
            li.classList.toggle("done");
        }
    });

    $(".todo-container input").addEventListener("keydown", function (e) {
        if (e.key === "Enter" && this.value.trim()) {
            addItem(this.value.trim(), false);
            this.value = "";
        }
    });

    $("button.save").addEventListener("click", saveTodoList);

}

function deleteToDoItem(todoItem) {
    todoItem.classList.add("deleted");
    setTimeout(() => {
        todoItem.parentElement.removeChild(todoItem);
    }, 500);
}

function addItem(content, isDone) {
    const item = new TodoItem(content, isDone);
    const template = `<li class="todo-item ${(item._isDone ? "done" : "")}" data-id="${item._id}">
    <span>${content}</span>
    <i class="fa fa-trash"></i>
</li>`;
    $(".todo-list").insertAdjacentHTML("afterbegin", template);
}

function saveTodoList() {
    let todoList = [];
    TodoItem.number = 0;
    const todoItem = $$(".todo-list>li");
    todoItem.forEach(item => {
        todoList.unshift(new TodoItem(item.querySelector("span").textContent, item.classList.contains("done")));
    });
    localStorage.setItem("todoList", JSON.stringify(todoList));
    alert("Save successfull");
}

function getTodoList() {
    let todoList = JSON.parse(localStorage.getItem("todoList"))?.map(item => new TodoItem(item._content, item._isDone)) || [];
    todoList.forEach(element => {
        TodoItem.number = Math.max(TodoItem.number, element._id);
        addItem(element._content, element._isDone);
    });
}