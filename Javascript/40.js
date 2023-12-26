// //spread operator in array
// const array1=[1,2,3];
// const array2=[1,4,5,6];
// const newArray=[...array1,...array2,7,8,9];
// // const newArray=[..."123456"];
// console.log(newArray);

//spread operator in object
//if same key comes two time , then the value will be overridden by the new one
const obj1={
    key1:"value1",
    key2:"value2"
}
const obj2={
    key1:"valueunique",
    key3:"value3",
    key4:"value4"
}
// const newobj={...obj1, ...obj2};
//sometimes helpful in problem solving technique jastai array lai object, string lai object lagna paryo vane 
//ya position dekhauna paryo vane   
// const newobj={..."abcdefghijklmnopqrstuvwxyz"};
// const newobj={...obj1, ...obj2, key25:"value24"};
const newobj={...["item1", "item2"]};
console.log(newobj);