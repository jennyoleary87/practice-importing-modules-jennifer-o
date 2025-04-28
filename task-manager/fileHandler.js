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
        // JSON connects files
        fs.writeFileSync(filePath, JSON.stringify(tasks)) // creates a new file ; stringify makes everything a string
        console.log(`Your tasks "${tasks}" are saved to \n~${filePath}.`);
    } catch (error) {
        console.error(`An error occurred while saving your tasks. \n${error.message}`);
        return false;
    }
}

function loadTasks(filePath) {
    try {
        if (fs.existsSync(filePath)) {
            let data = fs.readFileSync(filePath, 'utf8'); // utf8 is used to encode text data in strings and other data structures
            return JSON.parse(data); // parse gets rid of brackets
        }
        console.log(`Cannot find file ${filePath}.`);
        return []; // returns task array
    } catch (error) {
        console.error(`An error occurred while loading your tasks.`);
        return []; // returns task array
    }
}

module.exports = { saveTasks, loadTasks };