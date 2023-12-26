//hoisting
//when we make function with function declaration , then we could call it even before defining it 
//but if we do the same with function expression and arrow function, it will not work ,
 //this behaviour is called hoisting

//  hello();

//  function hello(){
//     console.log("hello world");
//  }

//function expression
//  const hello =function (){
//     console.log("hello world");
//  }

 //arrow function
//  const hello = ()=>{
//     console.log("hello world");
//  }

// console.log(hello);
// var hello="Hello world";
// console.log(hello);

//but if we do the same thing by let and const it will not work 
console.log(hello);
let hello="Hello world";
// const hello="Hello world";
console.log(hello);
