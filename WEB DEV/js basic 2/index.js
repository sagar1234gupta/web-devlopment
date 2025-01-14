console.log('lets start')

// object create

// let rectangle = {
//     length: 1,
//     breadth: 2,
    
//    draw: function(){
//     console.log('drawing rectangle')
//    }
// };


// factory function


//  function createReactangle(len,bre){
//     return  rectangle = {
//         length: len,
//         breadth: bre,

//         draw: function(){
//             console.log('drawing rectangle');

//         }
//     };
//  }
//  let rectangleobj1 = createReactangle(5,4);
//  let rectangleobj2 = createReactangle(6,8);
//  let rectangleobj3 = createReactangle(2,5);


// constructor function --> pascal Notation --> first letter of every word is capital -->NumberOfStudent

// function Rectangle(len , bre) {
// this.length = len;
// this.breadth = bre;
// this.draw = function(){
//     console.log('drawing');
// }
// };


//  object creation using contructor function


// let rectangleobject = new  Rectangle(6,7);
// rectangleobject.color =  'yellow';
// console.log(rectangleobject);

// delete rectangleobject.color;
// console.log(rectangleobject);
 
// let Rectangle1 = new Function(
//     'length',
//     `this length = len
// this.breadth = bre;
// this.draw = function(){
//     console.log('drawing');
// }`);

//  object creation using rectangle

// let rect = new Rectangle1(2,3);

// console.log(rect);

// rectangle.length();
// rectangle.breadth();
//  rectangle.draw();



// let rectangle1 = {
//     length: 1,
//     breadth: 2,
    
//    draw: function(){
//     console.log('drawing rectangle')
//    }
// };

// let rectangle2 = {
//     length: 1,
//     breadth: 2,
    
//    draw: function(){
//     console.log('drawing rectangle')
//    }
// };

// primitive

// let a = 10;
// let b = a;
//  a++;
//  console.log(a);
//  console.log(b);

//  refrence

// let a = {value: 10};
// let b = a;

// a.value++;

// console.log(a.value);
// console.log(b.value);

// let rectangle = {
//     length:2,
//     breadth:4
// }

// for in loop

// 


    // keys are reflected throuh key variable
    //  values are reflected  through rectangle[key]

//     console.log(key,rectangle[key]);
// }

//  for of loop

// for(let key of Object.keys(rectangle)){
//     for(let key of Object.entries(rectangle)){
// console.log(key);
// }

// if('color' in rectangle) {
//     console.log('present');
// }
// else{
//     console.log('Absent')
// }

// if('length' in rectangle) {
//     console.log('present');
// }
// else{
//     console.log('Absent')
// }

// let src = {
//     a: 10,
//     b: 20,
//     c: 30
// };
// let dest = {};

// for (let key in src){
//     dest[key] = src[key];

// }

// console.log(dest);

// src.a++;

// object 2
let src = {
    a:20,
    b:20,
    c:30
};
let src2 = {value : 25};
let dest = src

console.log(dest);

src.a++;

console.log(dest);
