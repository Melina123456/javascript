//function inside function
function myapp(){
    const fun1=()=>{
        console.log("hello");
    }
    const add=(num1,num2)=>
    {
        return num1+num2;
    }
    
    const mult=(num1, num2)=>{
        return num1*num2;
    }
    console.log("inside my app");
  fun1();
    console.log(add(22,3));
    console.log(mult(2,3));
}
myapp();