//primitive vs reference data type 
// let num1= 4;
// let num2 = num1;
// console.log("value of num1 is", num1);
// console.log("value of num2 is", num2);
// num1++;
// console.log("Value after incrementing num1:")
// //here increment of num1 doesn't affect the value of num2 since it is stored in stack 
// console.log("value of num1 is", num1);
// console.log("value of num2 is", num2);

//reference type
//in here we use heap data structure to store items and stack is maintain for pointer 
//and in this program there are two pointer but the both are holding the same address so updating one will update another too.
let array1=["item1", "item2"];
let array2= array1;
console.log("Value of array1 is", array1);
console.log("Value of array2 is", array2);
array1.push("item3");
console.log("array after pushing item");
console.log("Value of array1 is", array1);
console.log("Value of array2 is", array2);



