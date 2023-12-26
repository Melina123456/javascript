//template string , It is such string in which we use baptics to minimize unnecessary closing and opening of string 

let firstName="Melina";
let age =22;

// and what i have to print is hello my name is Melina and I am 22 years old , we could do it with 

// let aboutMe= "Hello My name is " +firstName +" and I am " +age +" years old ";
//this is hard so we could use template string like

aboutMe=`Hello My name is ${firstName} and I am ${age} years old.`
//this is simple and easy and fast too using baptics.
console.log(aboutMe);

