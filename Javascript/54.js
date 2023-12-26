//callback functions
//question given by raj not related to callback functions
// const str= "hare krishna hare krishna krishna krishna hare hare ";
// const obj={}
// for (let x of str)
// {
//     if(obj[x]){
//         obj[x] += 1;
//     }else
//     {
//         obj[x]=1;
//     }
// }
// console.log(obj);

//callback functions 
function myfunc1(name){
    console.log("hello I am myfunc1");
    console.log(`My name is ${name}`);
}
//jab ham function accept karte hey toh convention hey ki callback likhna he parameter ke jaga pe
function myfunc(callback){
    console.log("hello I am myfunc");
    callback("Melina");
}
//we can pass here array, string, object and also function called callback function.
// myfunc({name:"melina"});
myfunc(myfunc1);