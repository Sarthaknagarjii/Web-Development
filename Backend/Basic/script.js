// let n =5;
// for(let i=0; i<n; i++){
//     console.log("Hello",i); 

// }


/* # Here now we use anotther file funciton (math.js)
   in this file with the help of module.export in node */

const math = require("./math");

console.log(math.sum(5,5));
console.log(math.mul(4,5));
