let buffer = new Buffer.from("Shankar");
console.log(buffer);
console.log(buffer.toJSON());

buffer.write("codeinnodejs");
console.log(buffer.toString());
