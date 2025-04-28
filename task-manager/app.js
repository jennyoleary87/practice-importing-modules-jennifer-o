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

const taskManager = require('./taskManager');
const fileHandler = require('./fileHandler');
const path = require('path');

let taskPath = path.join(__dirname, 'tasks.json'); // join paths
// __dirname = absolute path of directory containing the currently executing JS file
let tasks = fileHandler.loadTasks(taskPath);

tasks = taskManager.addTask(tasks, "Brush hair");
tasks = taskManager.addTask(tasks, "Drink Water");
// clear tasks.json before running or else it will keep adding the same tasks

// TEST FUNCTIONS
taskManager.listTasks(tasks); // list all the tasks
fileHandler.saveTasks(taskPath, tasks); // save the tasks to the json file
// console.log(tasks);
