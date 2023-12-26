//nested destructuring
const users=[
    {userId:1, Name:"Melina", gender:"female"},
    {userId:2, Name:"Raj", gender:"male"},
    {userId:3, Name:"Luson", gender:"male"}
]
// const[user1, user2, user3]=users;
const[{userId:id, Name},{Name:user2Name},{gender}]=users;
console.log(user2Name);
console.log(id, Name);
console.log(gender);