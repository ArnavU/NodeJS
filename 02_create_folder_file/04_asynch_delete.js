const fs = require('fs');

// deleting file
const filePath = `./02_create_folder_file/New_folder/myBio.txt`;
fs.unlink(filePath, (err) => {
    if(err) {
        console.log(`Error occured while deleting file: ${err}\n`);
    }
    else {
        console.log(`File: "${filePath}" deleted successfully.\n`);
    }
})

const folderPath = './02_create_folder_file/New_folder';
fs.rm(folderPath, {recursive: true}, (err) => {
    if(err) {
        console.log(`Error occured while deleting: ${err}\n`);
    }
    else {
        console.log(`Folder deleted successfully.\n`);
    }
})

