import { EventEmitter } from "events";

class myClass extends EventEmitter {}

let studentObject = new myClass();

//observer1 -----parents

studentObject.on("result", (resultType) => {
  //on is a listner function
  if (resultType === "distinction") {
    console.log("happy");
  } else {
    console.log("sad");
  }
});

//observer2 -----friends

studentObject.on("result", (resultType) => {
  if (resultType === "distinction") {
    console.log("sad");
  } else {
    console.log("happy");
  }
});
//observer3 -----relatives

studentObject.on("result", (resultType) => {
  if (resultType === "distinction") {
    console.log("jealous");
  } else {
    console.log("act like they are sad");
  }
});

studentObject.emit("result", "fail");
