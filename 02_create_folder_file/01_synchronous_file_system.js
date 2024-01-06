// Challenge 
// 1: Create a folder "New_Folder"
// 2: Create a file in it "New_file.txt"
// 3: Add more data into the file (append
// 4: Read the data without getting the bu ffer data at first
// 5: Rename the file name to myBio.txt
// 6: now delte both the file and the folder

const fs = require('fs');

const folderPath = './02_create_folder_file/New_folder';

// ############################# Creating a folder/directory #############################
// use fs.mkdir to create the foldere
// if fs.mkdirSync is used then it may give error if the folder is already created
// fs.mkdir(folderPath, (err) => {
//     if(err) {
//         console.log(`Error creating folder: ${err}`);
//     }
//     else {
//         console.log(`Folder "${folderPath}" created successfully`);
//     }
// })

// Synchronous version
fs.mkdirSync(folderPath);


// ############################## Deleting a folder/directory ##############################
// const delPath = './New_folder';
// fs.rm(delPath, {recursive: true}, (err) => {
//     if(err) {
//         console.log(`Error occured while Deleting folder "${delFolder}`);
//     }
//     else {
//         console.log(`Folder "${delPath}" deleted successfully`);
//     }
// })

// Creating a file inside "New_folder"
fs.writeFileSync("./02_create_folder_file/New_folder/New_file.txt", "My name is Arnav Umarkar this is a file inside folder");

// appending to the file inside folder
fs.appendFileSync("./02_create_folder_file/New_folder/New_file.txt", "\nI am studying in VIIT");

// reading data without getting the buffer data
const readPath = './02_create_folder_file/New_folder/New_file.txt';
const encoding = 'utf8';
// fs.readFile(readPath, encoding, (err, data) => {
//     if(err) {
//         console.log(`\nError reading file: ${err}`);
//     }
//     else {
//         console.log(`\nFile content: \n${data}`);
//     }
// });

// Synchronous version of readFile
let data = fs.readFileSync(readPath, encoding);
console.log();
console.log(data);

// rename the file inside folder
fs.renameSync(readPath, './02_create_folder_file/New_folder/myBio.txt');


// deleting file
// fs.unlinkSync(path, new_path); 