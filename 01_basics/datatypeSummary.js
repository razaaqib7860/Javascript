//Type of Datatypes on the basic of memory allocation and access 

//1.Primitive

   // 7 types : String,Number,Boolean,null,undefined,Symbol,BigInt
   
const score = "100" //string
const scoreValue = 100.3 // number

const isLoggedIn = false//boolean
const outsideTemp = null//null
let userEmail;//undefined

const id = Symbol('123')//symbol
const anotherId = Symbol('123')
// console.log(id === anotherId); //false, as symbol is always a unique

const bigNumber = 3456543576654356754n // bigInt(write a big int or just write n in last)


// 2.Non Primitive (Reference)   

   // Array,Objects,Functions    
const heros = ["shaktiman", "naagraj", "doga"];//array

let myObj = {//object
    name: "hitesh",
    age: 22,
}

const myFunction = function(){//function
    console.log("Hello world");
}

// console.log(typeof myFunction); //fuction object

/************ Memoryyyyyy ************/
// Two types: Stack (primitive), Heap(Non-Primitive)

// STACK share the copy of the memory.(so main memory doesnt change)
let a=18
let b=a;
b=45;
console.log(a,b);//a=18,b=45 (value of a doesnt change)

// Heap share the same refernce value of the memory(so its change the orignal value)
let userOne={
email:"raza@google.com",
age:19
}
let userTwo=userOne;
userTwo.age=44;
console.log(userOne.age)//44 (orignal value change as modified in userTwo)