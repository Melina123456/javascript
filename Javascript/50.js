//block scope vs function scope

//let and const are block scope that is they can be accessed only from the block
//var is function scope that is we could access from anywhere inside the function

//block are independent of each other

// {
//     var firstName="Melina";
//     console.log(firstName);
// }
// // console.group(firstName);

// {
//     let firstName="Thapa"
//     console.log(firstName);
// }

// if(true){
//     let  firstName="Melina";
//     console.log(firstName);
// }
// console.group(firstName);
let firstName="Meli";
function myapp(){
    if(true){
        var  firstName="Melina";
        console.log(firstName);
    }
    console.log(firstName);
}
console.log(firstName);
myapp();