/*
04/28/25
Modules & Package Management - 3 Practice: Importing Modules
app.js = main file to import and use other files

○ Import the custom modules (taskManager.js and fileHandler.js)
and the path built-in module.
○ Implement the following functionality:

Load existing tasks from a file named tasks.json.
2. Add new tasks to the list.
3. List all tasks.
4. Save the updated task list back to the file.
*/

const fs = require('fs');

const taskManager = require('./taskManager');
const fileHandler = require('./fileHandler');
const path = require('path');

let filepath = "test.txt";
let tasks = {};
let taskArr = [];

tasks = fileHandler.loadTasks

// module.exports = {saveTasks} // import function saveTasks from fileHandler

// test functions from fileHandler.js
// fileHandler.saveTasks("");

taskArr = taskManager.addTask(taskArr, "check calendar");
fileHandler.saveTasks
console.log(fileHandler.saveTasks(filepath, tasks));
