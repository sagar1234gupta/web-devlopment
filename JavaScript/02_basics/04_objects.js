// const tinderUser = new Object()

const tinderUser ={}

 tinderUser.id = "1435abd"
 tinderUser.name = "sagar"
 tinderUser.isLoggedIn = false
 
// console.log(tinderUser);

const regularUser = {
    email: "sagar2572gmail.com",
    fullname: {
        userfullname: {
            firstname: "sagar",
            lastname: "gupta"
        }
    }
}
// console.log(regularUser.fullname)
// console.log(regularUser.fullname.userfullname)
// console.log(regularUser.fullname.userfullname.firstname)

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1,obj2}        
// const obj3 = Object.assign({ },obj1 , obj2 , obj4)
const obj3 ={...obj1 , ...  obj2 , ... obj4} 
// console.log(obj3)

const users = [
    {
        id: 1,
        email: ""
    },
    {
    id: 2,
    email: ""
    },
    {
        id: 3,
        email: ""
    },
]
users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));



const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

const { courseInstructor} = course
console.log(courseInstructor);

// {
//     "name": "sagar",
//     "coursename": "js in build",
//     "price": "free"
// }









