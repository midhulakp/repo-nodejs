import fs from "fs/promises";

fs.readFile("./file.txt", "utf-8")
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });

// fs.writeFile("./demo.txt", "good morning bangalore")
//   .then(() => {
//     console.log("file written");
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// fs.appendFile("./demo.txt", "\nits time for celebration")
//   .then(() => {
//     console.log("file appended");
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// fs.unlink("./some.txt")
//   .then(() => {
//     console.log("file deleted");
//   })
//   .catch((err) => {
//     console.log(err);
//   });
