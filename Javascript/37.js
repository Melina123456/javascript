//difference between dot and bracket notation
const key ="email";
const person={
    name:"Melina",
    age:22,
    //since js don't allow space so we have to conside it as string
    "person hobbies":['guitar','singing','music']
}
console.log(person["person hobbies"]);
person[key]="thapamelina@gmail.com";
console.log(person);