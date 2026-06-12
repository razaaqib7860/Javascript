
function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

 sayMyName() // calling the sayMyName function

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result
    return number1 + number2     // it will return the answer but not print it..
}

const result = addTwoNumbers(3, 5) 

console.log("Result: ", result);     // here we contain the answer in a varaibale and then its print


function loginUserMessage(username = "sam"){     // when no input given so by deafault sam will be username
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMessage())
console.log(loginUserMessage("hitesh"))


function calculateCartPrice(val1, val2, ...num1){ // converting cartprice in a array
    return num1
}

console.log(calculateCartPrice(200, 400, 500, 2000)) // [500,2000]
 // here val1 conatin 200, and val2 contain 400 and remaining comes under num1 as a array


const user = {
    username: "hitesh",
    prices: 199
} 
// we are creating a function for the object
function handleObject(anyobject){ // use anyobject so that we can access this fuction using any object
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

handleObject(user) // first declare object then call function
handleObject({     // we declare object in fuction while calling function
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]
function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));