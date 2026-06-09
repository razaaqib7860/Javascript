const name = "hitesh"
const repoCount = 50

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('hitesh-hc-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);//gives the length of the string
// console.log(gameName.toUpperCase());//convert the whole string in uppercase

console.log(gameName.charAt(2));//gives the char at index 2
console.log(gameName.indexOf('t'));//gives the index of char 't'

const newString = gameName.substring(0, 4)//create a substring from 0 to 3(n-1) charachters
console.log(newString);

const anotherString = gameName.slice(-8, 4)//make a substring from starting point to n-1 character
console.log(anotherString);

const newStringOne = "   hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim());//trim the whitespace in string from both end 

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))// replace %20 from the string to "-"

console.log(url.includes('sundar'))//check wheter ist includes "sundar" or not

console.log(gameName.split('-'));//split the string in array based on '-'(hypen)