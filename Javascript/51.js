//default parameters

// const add=(a,b)=>{
//     if(typeof b==="undefined"){
//         b=0;
//     }
//     return a+b;
// }
// //if we don't give parameter then it will give undefined.
// a= add(2);
// console.log(a);

//this in javascript we could do as 
const add=(a,b=0)=>{
    return a+b;
}
//if we don't give parameter then it will give undefined.
//even if we give parameter it will work fine.
a= add(2, 8);
console.log(a);
