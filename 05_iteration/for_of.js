// for of
          // used for access values.
          // best for array and maps

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {   //for-of loop, declare a index inside it like hereits "num", it will check condition and all by self
    //console.log(num);
}

const greetings = "Hello world!"
for (const greet of greetings) {
    //console.log(`Each char is ${greet}`)
}


// Maps 

const map = new Map()
map.set('IN', "India") //you can insert the value in map using map.set 
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")


// console.log(map);

for (const key of map) {
    //console.log(key)       //its print the whole map , we only want key then what?..
}

for (const [key, value] of map) {   // [key,value] its deconstruction of map , // now you can access only key or value or both
    //console.log(key, ':-', value);
}

// object in for-of loop

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

for (const [key, value] of myObject) {
  //  console.log(key, ':-', value);     // Error: myObject is not iterable, 
                                        // for-of doesnt work in object as obect is not iterable in this
}