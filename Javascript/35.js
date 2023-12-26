//Array destructring 

const myArray=['value1','value2','value3','value4'];
// let myval1=myArray[0];
// let myval2 = myArray[1];
// console.log("value of myval1 is ", myval1);
// console.log("value of myval2 is ", myval2);

// so this process could be simplified by the use of array destructring 
// let[myval1, myval2, myval3]=myArray;
//if we want to assign the valure of myval2 as value3 then we skip the one index like
// let[myval1, , myval2 ]=myArray;
//so now myval1 and 2 are independent variable and if we have used const we couldn't change that.
// console.log("value of myval1 is ", myval1);
// console.log("value of myval2 is ", myval2);

//now if we want to make the newarray of value3 and value4 then
// const myNewArray=myArray.slice(2);
// console.log(myNewArray);

//but we don't have to do this like we simply could do 
let[myval1,myval2, ...myNewArray ]=myArray;
console.log("value of myval1 is ", myval1);
console.log("value of myval2 is ", myval2);
console.log(myNewArray);

