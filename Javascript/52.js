//rest parameters

function myfun(a, b,...c){
    console.log(`valuer of a is ${a}`);
    console.log(`valuer of b is ${b}`);
    // console.log(`valuer of c is ${c}`);
    console.log("value of c is ",c)
}
// myfun(2,3,4);
//if i give a lot of parameters and want to store it to c i will use spread operator
//and here c is array since i have given bapticks and curly braces it is  giving as string.
myfun(2,3,4,5,6,7,8);

// addnumbers(1,2,3,4,5,6)

function addnumbers(...numbers){
    let total=0;
    for(let number of numbers)
    {
        total=total+number;
    }
    return total;
}
a = addnumbers(1,2,3,4,5,6,7,8,9);
console.log(a);