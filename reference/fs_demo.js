const fs = require('fs');
const path = require('path');

// Create Folder
// fs.mkdir(path.join(__dirname,'/testomer'), {}, err=> {
//     if(err) throw err;
//     console.log('Folder Created');
// });

// // Create File
// fs.writeFile(path.join(__dirname,'/testomer','hello.txt'),
//  'Hello World!',
//   err=> {
//     if(err) throw err;
//     console.log('File written to');
//  }
// );

// //Append / add to file
// fs.appendFile(path.join(__dirname,'/testomer','hello.txt'),
//  'Hello World 3!',
//   err=> {
//     if(err) {
//         throw err;
//     }
//     console.log('File appended');
//  }
// );

// Read File
// fs.readFile(path.join(__dirname, '/testomer','hello.txt'), 'utf8', (err, data) => {
//     if (err) throw err;
//     console.log(data);
// });

// rename file
// fs.rename(path.join(__dirname,'/testomer','hello.txt'),
//   path.join(__dirname,'/testomer','helloomer.txt'),
//   err=> {
//     if(err) throw err;
//     console.log('File renamed');
//  }
// );