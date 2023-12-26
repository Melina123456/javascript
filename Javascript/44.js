//function declaration
function singHappyBirthday(){
    console.log("Happy Birthday to you...");
}
singHappyBirthday();

function sum(num1, num2,num3){
    return num1+num2+num3;
}
// a=sum(2, 3);
// a= sum();//gives NaN which is not a number
a=sum(2,3,4);
console.log(a);

// function isEven(num){
//     if(num % 2===0)
//     {
//         return true;
//     }
//         return false;
// }
//this could be simplified as
function isEven(num){
    return num%2===0;
}
b=isEven(12);
console.log(b);

function firstCharacter(anystring){
    return anystring[0];
}
console.log(firstCharacter("melina"));

function findTarget(array, target)
{
    for(i=0;i<array.length;i++){
        if(array[i]==target){
            return i;
        }
    }
    return -1;
}
const myarray=[1,2,3,4,5];
ans=findTarget(myarray,11);
console.log(ans);