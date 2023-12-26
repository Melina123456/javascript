//how to clone the array 
//how to concatenate the array
let array1=["item1", "item2"];
// let array2=array1;
//methods to clone the array , 3 methods
//1.
// let array2=["item1", "item2"];
//2.
// let array2=array1.slice(0);
//if you want to add something to array2
// let array2=array1.slice(0).concat(["item3",'item4']);
//3.
// let array2=[].concat(array1);
//if you want to add something 
// let array2=[].concat(array1,['item3','item4']);
//spread operator
// let array2=[...array1];
//if you want to concat
// let array2=[...array1,"item3","item4"];

//another method is 
let anotherarray=["item3", "item4"];
let array2=[...array1, ...anotherarray];

array1.push("item3");
console.log(array1===array2);
console.log(array1);
console.log(array2);


