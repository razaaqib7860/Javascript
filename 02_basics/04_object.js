// singleton
const tinderUser1 = new Object() //its singleton object 

// Object.create

const tinderUser = {} // its non-singleton object (both work same)

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {  //object in object 
    email: "some@gmail.com",

      fullname: {

          userfullname: {

            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }      // same issue its merge object in object as an element of it

//const obj3 = Object.assign({}, obj1, obj2, obj4)
                                    //its merge all the target object in first object which is 

const obj3 = {...obj1, ...obj2} // spread operator
 console.log(obj3);               


const users = [ // Array of objects (can be excess using index)
    {
        id: 1,
        email: "h1@gmail.com"
    },
    {
        id: 2,
        email: "h2@gmail.com"
    },
    {
        id: 3,
        email: "h3@gmail.com"
    },
]

console.log(users[1].email) // return email of object at index 1 (h2@gmail.com)

console.log(tinderUser);

console.log(Object.keys(tinderUser)); //print all the keys of the object
console.log(Object.values(tinderUser)); // print all the values of the object
console.log(Object.entries(tinderUser)); // 

console.log(tinderUser.hasOwnProperty('isLoggedIn')); //check is object own the key?

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

const {courseInstructor: instructor} = course //de-structure of an object

// console.log(courseInstructor);
console.log(instructor);

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[ //array of object
    {},
    {},
    {}
]