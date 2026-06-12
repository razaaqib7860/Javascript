// Immediately Invoked Function Expressions (IIFE)
 
//when we you want that your function excute immediately and 
//we dont want to polute our function by gloabal variable


//just pack the whole function in a parathesis "()" 
//work like (function define)(parameter);

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();      //## semicolon(;) is required to stop the function


( (name /* argument */ ) => { 
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh' /*passing paramenter */) 