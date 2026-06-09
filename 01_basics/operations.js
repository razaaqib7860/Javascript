// *********************** Operations ***********************

let value = 3
let negValue = -value
// console.log(negValue);

/* Basic Operations */

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "hello"
let str2 = " hitesh"

let str3 = str1 + str2 //its add the two strings
// console.log(str3);

/***** ToPrimative Abstract operation ******/
// https://tc39.es/ecma262/#sec-toprimitive

console.log("1" + 2);//12
console.log(1 + "2");//12
console.log("1" + 2 + 2);//122
console.log(1 + 2 + "2");//32
console.log(1 + "2" + 2);//122


// console.log( (3 + 4) * 5 % 3); 

// console.log(+true); 
// console.log(+"");

let num1, num2, num3
num1 = num2 = num3 = 2 + 2 //not a good way

//post and prefix
let gameCounter = 100
++gameCounter;
console.log(gameCounter);

// link to study postfix and preefix
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion