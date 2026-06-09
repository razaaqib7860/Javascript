let score = "33"
let score2="54abc"

console.log(typeof score);
console.log(typeof score2);


let valueInNumber=Number(score)
let valueInNumber2=Number(score2)

console.log(typeof valueInNumber);
console.log(valueInNumber);

console.log(typeof valueInNumber2)
console.log(valueInNumber2); // NaN (Not a Number)

// "33"=>33
//"54abs"=>NaN (but type is number)
// true =>1; faluse =>0

let isLoggedIn = "raza"
let boolenIsLoggedIn = Boolean(isLoggedIn)
console.log(boolenIsLoggedIn);

// 1=>true; 0 =>false
// ""(empty string) => false
// "raza" =>true