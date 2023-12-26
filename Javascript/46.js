//Arrow function

const singHappyBirthday =()=>{
    console.log("Happy Birthday to you...");
}
singHappyBirthday();

const sum =(num1, num2,num3)=>{
    return num1+num2+num3;
}
a=sum(2,3,5);
console.log(a);

const isEven = (num)=> num%2===0;

b=isEven(12);
console.log(b);

const firstCharacter =  anystring=> anystring[0];

console.log(firstCharacter("melina"));

const findTarget = (array, target)=>
{
    for(i=0;i<array.length;i++){
        if(array[i]==target){
            return i;
        }
    }
    return -1;
}
const myarray=[1,2,3,4,5];
ans=findTarget(myarray,3);
console.log(ans);