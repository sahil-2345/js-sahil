
function sayMyName(){
    console.log("S");
    console.log("A");
    console.log("H");
    console.log("I");
    console.log("L");
}
// sayMyName()

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
    
// }
function addTwoNumbers(number1, number2){
    // let result = number1 + number2
    // return result
    return number1 + number2
}
// const result = addTwoNumbers(3, 5)
// console.log("Result: ", result);

// function loginUserMessage(username = "sam")
//     if(!username){
//            console.log("Please enter a username")
//            return
//     }
//     return`${username} just logged in`
// }
// console.log(loginUserMessage("sahil"))

function calculateCartPrice(val1, val2, ...num1){
      return num1
}
// console.log(calculateCartPrice(200, 300, 500, 2000))

const user = {
    username: "sahil",
    prcies: 199
}
function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.prcie}`);
    
}
// handleObject(user)
handleObject({
    username: "sam",
    prcie: 399  
})

const myNewArray = [200, 400, 100, 600]
function returnSecondValue(getArray){
    return getArray[1]
}
// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 1000, 6000]));
