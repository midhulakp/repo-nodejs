import fs from "fs";
import zlip from "zlib";

let gzip = zlip.createGzip();
let readStream = fs.createReadStream("./index.txt", {
  encoding: "utf-8",
  highWaterMark: 3,
});
let writeStream = fs.createWriteStream("compress.txt.gz");
// let writeStream = fs.createWriteStream("./write.txt");

// readStream.on("data", (chunk) => {
//   console.log(chunk);
//   writeStream.write(chunk);
// });

//DUPLEX STREAM

// readStream.pipe(writeStream);

readStream.pipe(gzip).pipe(writeStream);
