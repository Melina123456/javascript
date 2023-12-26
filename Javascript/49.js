//lexical scope
//if the fun2 cannot find myvar at fun2 function, then it will see its lexical scope which is fun1, again if not found will check 
//myapp and later on the global scope or lexical scope
const myvar="value11";
const myapp=()=>{
    // const myvar="value1";
    const fun1=()=>{
        const fun2=()=>{
            // const myvar="value2";
            console.log(myvar);
        }
        fun2();
    }
    console.log(myvar);
    fun1();
}
myapp();