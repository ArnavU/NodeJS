const fs = require('fs');

let delPath = './02_create_folder_file/New_folder';

// delete the folder using fs.rm
fs.rm(delPath, {recursive: true}, (err) => {
    if(err) {
        console.log(`Some error occured while deleting the folder ${err}`);
    }
    else {
        console.log(`Folder "${delPath}" deleted successfully.`);
    }
} )