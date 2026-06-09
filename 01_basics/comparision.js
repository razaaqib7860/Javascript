/************ Basic comparision **************/

// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);

/************ different datatype compariesion**************/
//its first convert both data type in a single data type and then compare it 
//its not a good way, many times its may dont give you expected answer 
// try to compare same datatypes
 console.log("2" > 1);
 console.log("02" > 1);

console.log(null > 0);//false
console.log(null == 0);//false
console.log(null >= 0);//true

// the reason why comparison and equality get different values as comparision converts null => 0, where as equality dont.

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

// === (strict check : dont only compare its also check the datatype)

console.log("2" === 2);