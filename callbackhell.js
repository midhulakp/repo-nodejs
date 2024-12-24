import fs from "fs";

fs.mkdir("./src", (err) => {
  if (err) console.log(err);
  fs.writeFile("./src/index.html", "", (err) => {
    if (err) console.log(err);
    fs.writeFile("./src/App.jsx", "", (err) => {
      if (err) console.log(err);
      fs.writeFile("./src/main.jsx", "", (err) => {
        if (err) console.log(err);
        console.log("process done");
      });
    });
  });
});
