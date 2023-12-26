//param destructuring

//object 
//react

const person={
    name:"Melina",
    gender:"female",
    age:22
}

// function printDetails(obj){
//     console.log(obj.name);
//     console.log(obj.gender);
// }
// printDetails(person);

function printDetails({name, gender,age}){
    console.log(name);
    console.log(gender);
    console.log(age);
}
printDetails(person);