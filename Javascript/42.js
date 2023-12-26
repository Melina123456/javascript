//objects inside the array
//very useful in real world applications
const users=[
    {userId:1, Name:"Melina", gender:"female"},
    {userId:2, Name:"Raj", gender:"male"},
    {userId:3, Name:"Luson", gender:"male"}
]
// for(let user of users){
//     console.log(user);
    // console.log(user.userId);
    // console.log(user.Name);
// }

for(let index in users)
{
    // console.log(users[index]);
    console.log(users[index]);
}