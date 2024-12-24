import fs from "fs";

fs.readFile("./some.txt", "utf-8", (err, data) => {
  if (err) console.log(err);
  console.log(data);
});

fs.writeFile("./file.txt", "hi helloooo", (err) => {
  if (err) console.log(err);
  console.log("file written");
});

fs.appendFile("./file.txt", "\nits tome for a hangout", (err) => {
  if (err) console.log(err);
  console.log("file append done");
});

fs.unlink("./text.txt", (err) => {
  if (err) console.log(err);
  console.log("file deleted");
});
