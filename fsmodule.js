const fs = require('fs');

// fs.readFile ('file.txt', 'utf8', (err, data) => {
//     console.log (err, data)
// })

// console.log ("finished reading file")

// const a = fs.readFileSync ('file.txt')     //readFileSync for intentionally blocking something
// console.log(a.toString())
// console.log ("finished reading file")


fs.writeFile ('file.text', 'this is the data', () => {      //writeFileSync for intentionally blocking something
    console.log ('written in the file')
});
console.log ("finished reading file")

