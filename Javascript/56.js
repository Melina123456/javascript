//important array methods

//forEach
//map
//filter
//reduce

//forEach

// const numbers=[2,3,4,5];

// function func(number , index){
//     console.log(`number is ${number} and index is ${index}`);
    // console.log("index is ", index);
    // console.log(`${number}*2=${number*2}`);
// }
// for(let i=0;i<numbers.length;i++){
//     multiplyby2(numbers[i], i);
// }

//you could make the func or callback function outside or inside the foreach 
// numbers.forEach(function(number,index)
// {
//     console.log(`number is ${number} and index is ${index}`);
// });

// numbers.forEach(function(number, index)
// {
//     console.log(number*2, index);
// });

const users=[
    {firstName:"Melina", age:21},
    {firstName:"Mohit", age:23},
    {firstName:"Raj", age:22},
    {firstName:"Luson", age:18}
]
//this is by destructuring
// users.forEach(function({firstName, age}){
//     console.log(firstName);
//     console.log(age);
// })
//without destructuring
// users.forEach(function(user){
//     console.log(user.firstName);
//     // console.log(user.age);
// });
//by making arrow function
users.forEach((user)=>{
    console.log(user.firstName);
    // console.log(user.age);
});