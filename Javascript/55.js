// function returning function 
function myfunc(){
//     function myfunc1(){
//         return "hello world";
//     }
//     return myfunc1;
// }
//this could also be written as
       return function (){
            return "hello world";
        }
    }

const a=myfunc();
console.log(a());