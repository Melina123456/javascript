//use const for creating array
const fruits=['Banana','apple'];
// fruits=['mang0'];
fruits.push('kiwi');
fruits.unshift("mango");
console.log(fruits);
//here the array is const but we could change the value because we are never changing the constant that is memory 
//but we are changing the heap memory 
//but if we try to reassign the value of fruits, it will give the error 
//and here we could use array methods
//and it is better to use const rather than let while constructing array 
