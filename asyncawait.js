import fs from "fs/promises";

async function resolvePromise() {
  try {
    let data = await fs.readFile("./file.txt", "utf-8");
    console.log(data);
    // await fs.writeFile("./sample.txt", "have a great day");
    // await fs.appendFile(
    //   "./sample.txt",
    //   "\n its time to start a beautiful day with smile"
    // );
    // await fs.unlink("./file.txt");
  } catch (error) {
    console.log(err);
  }
}
resolvePromise();
