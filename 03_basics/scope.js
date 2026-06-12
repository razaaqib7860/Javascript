
let a = 300
if (true) {
    let a = 10
    const b = 20
    var c = 300.     // we declare var c in this local scope but it can be accessable as gloably outside .
    // console.log("INNER: ", a); 
    
}



// console.log(a);
// console.log(b);
// console.log(c);


function one(){       // function inside function
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

     two()

}

// one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5)) //### here you can access function before fucntion is define

function addone(num){ 
    return num + 1
}



addTwo(5)  //here you cant access the fuction before its define as its store in a variable which is not define yet.
const addTwo = function(num){
    return num + 2
}