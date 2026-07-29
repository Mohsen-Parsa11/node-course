const fs = require("fs");

// read stream
const readStream = fs.createReadStream("./buffer-docs/blog1.txt", {
  encoding: "utf8",
});

const writeStream = fs.createWriteStream('./buffer-docs/blog2.txt');

// readStream.on("data", (buffer) => {
// //   console.log("New buffer===========>");
// //   console.log(buffer);
//   writeStream.write('\n');
//   writeStream.write(buffer);
// });

// this do the same task as the readStream.on, transfer all data to new file
// readStream.pipe(writeStream);