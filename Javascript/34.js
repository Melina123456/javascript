//for in loop in array
const fruits=['apple','banana','mango'];
const fruits2=[];
//here in the place of fruit we could write anything like index.and i am writing index here 
for(let index in fruits)
{
    fruits2.push(fruits[index].toUpperCase());
    // console.log(fruits[fruit].toUpperCase());
}
console.log(fruits2);

//we use this and traditional for loop the most.
// traditional for loop means like as the one in 30.js