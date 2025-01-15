console.log('hello jee');

// let lastName = 'Sagar';

// let firstName = new String('Love');

// let message = 'this is  \n my first \n message';

// let message = `this is 
// my first 
// message`
// console.log(message);

// let words = message.split(' ');

// console.log(words);

// let date = new Date();
// console.log(date);


// let numbers = [1,3,5,7];

// console.log(numbers)

// console.log(numbers[0])

// end -> push

//beginning -> unshift

// middle -> splice

// searching

// console.log(numbers);

// koi number exist nhi kreta hoga to - value print krege

// console.log(numbers.indexOf(7));

//  we want to check if a number exist in an array

// if(numbers.indexOf(4) != -1)
//     console.log("present");

// console.log(numbers.includes(7));


// console.log(numbers.indexOf(1,5));


// let courses = [
//     {no:1, naam:'Love'},
//     {no:2, naam:'Rahul'}
// ];

// console.log(courses);

// 

// let course =courses.find(function(course) {
//     // return course.naam === 'Love';
//     return course.naam === 'Rahul';
// })
// console.log(course);

// let course =courses.find(course  => 
 
//     course.naam === 'Rahul');

// console.log(course);

// 
 

// let numbers =[1,2,3,4,5];
// let numbers2 = numbers;

// // numbers =[];
// // numbers.length = 0;

// numbers.splice(0,numbers.length);

// console.log(numbers);
// console.log(numbers2);

// let first = [1,2,3];
// let second = [4,5,6];

// let combined = first.concat(second);
// console.log(combined);

// let marks = [10,20,30,40,50,60,70,80];
// let sliced = marks.slice(2,6);
// console.log(sliced)

// let first = [1,2,3];
// let second = [4,5,6];

// let combined = [...first,'a',...second,'b'];
// console.log(combined);


// // how to create copy

// let another = {...combined};

// let arr = [10,20,30,40,50];
// for(let value of arr){
//     console.log(value)
// }

// arr.forEach(function(number) {
//     console.log(number)
// });


// let numbers = [10,20,30,40,50];
// const joined = numbers.join(',');

// console.log(joined);

// let message = 'This is my first message';
// let parts = message.split(' ');
// console.log(parts);

// let joined = parts.join('_');
// console.log(joined);

// let numbers = [40,30,20,10];
// numbers.sort();

// console.log(numbers);

// numbers.reverse()

// let numbers = [1,2,-1,-2];

// let filterd = numbers.filter(function(value){
//     return value >=0;
// });
// console.log(filterd); 

// let numbers = [1,2,3,4];
// console.log(numbers);

// let items = numbers.map(value => 'student_no' + value);
// console.log(items);

let numbers = [1,2,-6,-9];
let filtered = numbers.filter(value => 0);

let items = filtered.map(function(value){
    return {value: num}
   

})
console.log(items);