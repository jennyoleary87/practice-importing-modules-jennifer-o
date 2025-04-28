/*
04/28/25
Modules & Package Management - 3 Practice: Importing Modules
fileHandler.js = custom module for saving and reading tasks from a file

Use the fs (File System) built-in module to define and export the following functions:
1. saveTasks(filePath, tasks): Writes the tasks to a file in JSON format.
2. loadTasks(filePath): Reads and parses the tasks from the file.
If the file doesn’t exist, return an empty array.
*/

const fs = require('fs');

function saveTasks(filePath, tasks) {
    try {
        if (filePath === "") {
            throw new error(`Filepath ${filePath} is empty.`);
        } else {
            fs.writeFileSync(filePath, JSON.stringify(tasks)) // creates a new file
            Console.log("Your tasks ${tasks} have been saved.");
        }
    } catch (error) {
        // error parameter
        console.error(error.message);
    }
}

function loadTasks(filePath) {
    try {
        if (filePath === "") {

        } else
            fs.readFileSync(filePath)
    } catch (error) {
        console.error(error.message);
    }
}

// fs.readFileSync(file, encoding)
// fs.writeFileSync(file, data)

module.exports = { saveTasks, loadTasks };
