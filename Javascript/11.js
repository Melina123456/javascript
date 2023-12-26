//undefined , null and BigInt

//undefined is case in which we create variable but don't assign any values like

// let firstName;
// console.log(typeof firstName);
// firstName = "Melina";
// console.log(typeof firstName, firstName);

//for null 
let myVariable=null;
console.log(myVariable)
myVariable="Melina ";
console.log(typeof myVariable,myVariable);
console.log(typeof null);
//this is one of the bug of javascript and if we try to solve this we have to change the whole framework so it is left as bug or error

//BigInt
// this is the newly introduced data type in js 
//you can set data type bigint by using bigint or by assigning n at the last of number as given below 
let myNumber=BigInt(20)
let anotherNumber=123n;
console.log(Number.MAX_SAFE_INTEGER);
console.log(typeof myNumber, myNumber);
console.log(anotherNumber);
console.log(myNumber+anotherNumber);
//you can add the number both of bigint but you cannot add bigint and int this will give error 