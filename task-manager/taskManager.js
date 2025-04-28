/*
04/28/25
Modules & Package Management - 3 Practice: Importing Modules
taskManager.js = custom module for managing tasks

Define and export the following functions:
1. addTask(tasks, task): Adds a new task to the task list.
2. listTasks(tasks): Logs all tasks to the console.
*/

function addTask(tasks, task) {
    tasks.push(task);
    console.log(`${task} has been added to tasks.`);
    return tasks;
}

function listTasks(tasks) {
    console.log("=== TASKS ===");
    tasks.forEach((task, index) => {
        console.log(`${index + 1}. ${task}`);
    });
}

module.exports = { addTask, listTasks };
