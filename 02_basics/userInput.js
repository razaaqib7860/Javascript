const prompt = require("prompt-sync")();

const student = {
    name: prompt("Enter your name: "),
    email: prompt("Enter your email: "),
    studentClass: prompt("Enter your class: ")
};

console.log(student);