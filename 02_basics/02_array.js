const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

marvel_heros.push(dc_heros) // its push dc_heros the entire array in marvel_heroes as a element

console.log(marvel_heros); //["thor","Ironman", "spiderman", ["superman", "flash", "batman"]]
console.log(marvel_heros[3][1]); //superman

const allHeros = marvel_heros.concat(dc_heros) //its  merge two or more arrays, and return a new array
console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros] // best method (spread), its like take a glass and drop it , its spread all over,
                                                      // same here this operator take all array , break them and merge them in a new array

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity) //flat operator: A array have indepth array like matrix and you want a simple array,just use this 🫶🏻
console.log(real_another_array);



console.log(Array.isArray("Hitesh")) // false its a string
console.log(Array.from("Hitesh")).   // create a array by converting string in array
console.log(Array.from({name: "hitesh"})) // interesting case (return empty array)

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); // convert all variable in array