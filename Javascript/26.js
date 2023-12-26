//intro to arrays
//reference type
//ordered collection of items

// let fruits=["apple", "Mango",  "grapes"];
// console.log(fruits);
// console.log(fruits[1]);
// let mixed = [1,2,3, "melina",undefined, null];
// console.log(mixed);

//array is object type in js since reference type


// let fruits=["apple", "Mango",  "grapes"];
// console.log(fruits);
// fruits[0]="litchi";
// fruits[2]='kiwi';
// console.log(fruits);
// console.log(typeof fruits);


//how to check if array is array or not ? so we use function
let fruits=["apple", "Mango",  "grapes"];
let obj={};
console.log(typeof fruits);
console.log(typeof obj);
console.log(Array.isArray(fruits));
console.log(Array.isArray(obj));                                                                                                                                                                  