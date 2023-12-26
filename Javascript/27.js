//array methods
//array push pop

let fruits=["apple", "banana", "kiwi"];
console.log(fruits);
// fruits.push("mango");
// console.log(fruits);

//pop
// fruits.pop();
// console.log(fruits);
//we could store this popped fruit in another array to like
// let poppedfruit=fruits.pop();
// console.log(`The removed fruit is ${poppedfruit}`); 


//array shift unshift
//unshift is to add elements at first of the array 
fruits.unshift("cherry");
fruits.unshift("grapes");
console.log(fruits);

//shift is to remove elements from the first of the array 
fruits.shift();
console.log(fruits);
let removedFruit=fruits.shift();
console.log(fruits);
console.log(`The removed fruit from the first is ${removedFruit}`);

//push and pop is faster than unshift and shift because they add/remove element from the very last while in unshift/shift it starts from the first
// and they have to shift all the items so time complexity is more.