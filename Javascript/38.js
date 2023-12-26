//how to iterate object
const person={
    name:"Melina",
    age:22,
    //since js don't allow space so we have to conside it as string
    "person hobbies":['guitar','singing','music']
}

//for in loop
//object.keys

for(let key in person)
{
    // console.log(person[key]);
    // console.log(`${key}:${person[key]}`);
    console.log(key,":", person[key]);
}

console.log(typeof Object.keys(person));
const val =Array.isArray(Object.keys(person));
console.log(val);

// //object.key
// for(let key of Object.keys(person)){
//     console.log(key, person[key]);
// }