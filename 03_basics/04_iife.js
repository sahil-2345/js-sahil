(function chai(){
    //named IIFE
    // console.log(`DB CONNECTED`);
})();

( (name) =>  {
    //unamed IIFE
    // console.log(`DB CONNECTED TWO ${name}`);  
} )('sahil')

let val1 = 10
let val2 = 20
function addnum(num1 , num2){
    let total = num1 + num2
    return total
}
let result1 = addnum(val1, val2)
let result = addnum(10, 2)
console.log(addnum);
