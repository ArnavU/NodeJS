// Challenge 
// 1: Create a folder "New_Folder"
// 2: Create a file in it "New_file.txt"
// 3: Add more data into the file (append
// 4: Read the data without getting the buffer data at first
// 5: Rename the file name to myBio.txt
// 6: now delte both the file and the folder

const { error } = require('console');
const fs = require('fs');

const folderPath = './02_create_folder_file/New_folder';

// ############################# Creating a folder/directory #############################
// use fs.mkdir to create the folder
// if fs.mkdirSync is used then it may give error if the folder is already created
fs.mkdir(folderPath, (err) => {
    if(err) {
        console.log(`Error creating folder: ${err}\n`);
    }
    else {
        console.log(`Folder "${folderPath}" created successfully\n`);
    }
})

// create file inside folder
const filePath = "./02_create_folder_file/New_folder/New_file.txt";
fs.writeFile(filePath, "This is a new file inside created folder in Asynchronous way.", (err) => {
    if(err) {
        console.log(`Error occured: ${err}\n`);
    }
    else {
        console.log(`File: "${filePath}" created successfully\n`);
    }
});

// appending data in newly created file
fs.appendFile(filePath, "\nThis is an appended text.", (err) => {
    if(err) {
        console.log(`Error during append: ${err}\n`);
    }
    else {
        console.log(`File: "${filePath}" appended successfully.\n`);
    }
});

// reading file without getting buffer data
fs.readFile(filePath, 'utf8', (err, data) => {
    if(err) {
        console.log(`Error occured while reading: ${err}\n`);
    }
    else {
        console.log(`File data: ${data}\n`);
    }
})

// rename the file to myBio.txt
fs.rename(filePath, `./02_create_folder_file/New_folder/myBio.txt`, (err) => {
    if(err) {
        console.log(`Error occured while renaming: ${err}\n`);
    }
    else {
        console.log(`File renamed successfully.\n`);
    }
});