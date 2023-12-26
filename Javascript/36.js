//object is reference type
//arrays are good but no sufficient 
//for real world data
// objects store key value pair
//object doesn't have index

//how to create objects
//name,age ,hobbies are also called as properties.
const person={
    name:"Melina",
    age:22,
    hobbies:['guitar','singing','music']
}
console.log(person);

//how to access data from objects
//we can access like that too 
console.log(person["name"]);
console.log(person.age);
console.log(person.hobbies);

//how to add key value pair to object
person.gender = 'female';
//we could also add like
person["subject"]='Math';
console.log(person);

