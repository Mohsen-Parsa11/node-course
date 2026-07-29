const fs = require('fs');

//==== Read a file ===
// fs.readFile('./doc/blog1.txt', (error, data) => {
//     if(error)
//         console.log("🚀 ~ error:", error);
//         console.log("data ====>", data.toString())
// });

// console.log("the end")


//==== Write file =====
// fs.writeFile('./doc/blog1.txt', 'Hello Mohsen jan', () => {
//     console.log('file was written');
// });

// fs.appendFile('./doc/blog1.txt', '\nHello New File', () => {
//     console.log('file was appended');
// });

//=== Directories ===
// fs.mkdir('./openCode2', (error) => {
//     if(error)
//          console.log(error)
//     console.log("folder was created");
// });

//=== Remove directory ===
// fs.rmdir('./openCode2', (error)=>{
//     if(error)
//         console.log(error);
//     console.log("directory removed successfully");
// });

//=== Remove file ===
// fs.unlink('./doc/mohsen.txt', (error) => {
//     if(error)
//         console.log(error);
//     console.log('file removed successfully');
// });


// ======== mini project ========
// fs.mkdir('./openCode', (err) => {
//     if(err)
//         console.log(err);
//     console.log('directory created successfully');
// });

// fs.writeFile('./openCode/blog.txt', 'I love you honey' , (err) => {
//     if(err)
//         console.log(err)
//     console.log('file was written');
// });

// fs.readFile('./openCode/blog.txt', (err, data) => {
//     if(err)
//         console.log(err)
//     console.log(data.toString())
// });

// fs.unlink('./openCode/blog.txt', (err) => {
//     if(err)
//         console.log(err)
//     console.log('file has been removed');
// });

// fs.rmdir('./openCode', (err) => {
//     if(err)
//         console.log(err);
//     console.log('directory was removed successfully');
// });