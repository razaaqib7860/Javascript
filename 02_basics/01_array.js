// array
const myArr = [0, 1, 2, 3, 4, 5]
// console.log(myArr[1]);   // we can access array element like this.

const myHeors = ["shaktiman", "naagraj"]
const myArr2 = new Array(1, 2, 3, 4)

// Array methods
myArr.push(6)   //add 6 in last of array
myArr.push(7)
myArr.pop()      // remove and return the last element of the array;

myArr.unshift(9)  //add given number in front of the array (not productive as we have to shift all the array)
myArr.shift()     //delete the first element 

console.log(myArr.includes(9));  //check wheather given number is in array or not(boolean)
console.log(myArr.indexOf(3));   // shows the index of element '3'

const newArr = myArr.join()      //its join the array elements in single and convert it in STRING

console.log(myArr);
console.log( newArr);


// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)     // slice will  returns a shallow copy of a portion of an array into a 
                                  // new array object selected from start to end (end not included)
                                 // ## The original array will not be modified.

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)   // splice will also return a portion of array into a new array onject 
                                    //# from start to end(including)
                                    // ##### The original arra will be modified
console.log("C ", myArr);
console.log(myn2);