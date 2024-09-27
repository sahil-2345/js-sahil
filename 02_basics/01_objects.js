// singleton
// Object create

// Object Literals

const mySym = Symbol("key1")






const JsUser = {
    name: "Sahil",
    age: 21,
    mySym: "key1", 
    location: "Mumbai",
    email: "sahil@google.com",
    isLoggedIn: false,
    lastLoginDays: ["MOnday", "Saturday"]
}
console.log(JsUser.email)
console.log(JsUser["email"]);
console.log(JsUser["mySym"]);

JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "hitesh@microsft.com"
// console.log(JsUser)

JsUser.greeting = function(){
    console.log(`Hello Js user, ${this.name}`);
}
console.log(JsUser.greeting());