// 


const tinderUser = {}

tinderUser.id = "12345abc"
tinderUser.name = "Sahil"
tinderUser.isLoggedIn = false
//  console.log(tinderUser);
 
const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname:"Sahil",
            lastname:"Vairat"
        }
    }
}
// console.log(regularUser.fullname.userfullname.firstname)
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}
// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2, obj4)
const obj3 = {...obj1, ...obj2}
// console.log(obj3);
const users = [
    {
        id: 1,
        email: "s@google.com"
    },
    {
        id: 1,
        email: "s@google.com"
    },
    {
        id: 1,
        email: "s@google.com"
    },
]

users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
// console.log(tinderUser.hasOwnPorperty('isLoggedIn'));

const  course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "sahil"
}
// course.courseInstructor
const {courseInstructor: instructor} = course
// console.log(courseInstructor);
// console.log(instructor);
// Destructoring
// const navbar = ({compnay}) => {

// }

// navbar(comapny = "sahil")

// {
//     "name": "sahil",
//     "coursename": "js in hindi",
//     "price": "free"
// }
[
    {},
    {},
    {}
]




