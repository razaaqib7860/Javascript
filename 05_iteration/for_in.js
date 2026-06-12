// for in loop
          // used for access keys.
          // best for object




const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) { // in for-in loop we have to access values using key
    //console.log(`${key} shortcut is for ${myObject[key]}`);
}
for (const [key,value] in myObject) {          //in for-in loop, its always return keys of object not values
   // console.log(`${key} shortcut is for ${value}`);   //its return only key in both
}

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {     // we cant excess direct value of an array, we use keys to get the values
    //console.log(programming[key]);
}

// map in for-in loop

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

for (const key in map) {      
    //console.log(key);      // here map is not iterateable so,its not give any output.
}