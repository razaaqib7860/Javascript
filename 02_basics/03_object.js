//non-singleton

// object literals

const mySym = Symbol("key1")
const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary", //both are correct way to declare keys
                                    //## but in this case you have to console it in [].
                                    // console.log(JsUser["full name"])
    
    [mySym]: "mykey1",

    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(JsUser.email)
console.log(JsUser["email"]). // both are correct way to console (this is important)
console.log(JsUser["full name"]) // here you cant excess it by '.' 
console.log(JsUser[mySym])

JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser)             // its freeze the keys value and no further modification
JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`); // access keys by using "this-operator"
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());