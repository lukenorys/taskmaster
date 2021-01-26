var buttonEl = document.querySelector("#save-task");
console.log(buttonEl);

// for this code blockm, 4 steps were done. 1. create a new task item 2. style the new task item 3. add the text 4. append this element to the task list.
// going forward, these are the 4 steps that will be key to dynamically creating elements with the DOM.
var buttonEl = document.querySelector("#save-task");
var tasksToDoEl = document.querySelector("#tasks-to-do");

var createTaskHandler = function() {
    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";
    listItemEl.textContent = "This is a new task.";
    tasksToDoEl.appendChild(listItemEl);
}

buttonEl.addEventListener('click', createTaskHandler);