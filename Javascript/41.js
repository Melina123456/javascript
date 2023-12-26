//object destructuring 

const band={
    bandname:"The elements",
    song:"birsine hau ki",
    year:2018,
    anothersong:"putali"
};
// const bandname=band.bandname;
// const song=band.song;

// console.log(bandname);
// console.log(song);

//so this long code could replaced with the help of destructuring\
//you could use anything const let
// const{bandname, song,...rest }=band;
// console.log(bandname);
// console.log(song);
// console.log(rest);

//if i want to change the name of bandname as var1 i could do that too
const {bandname : var1, anothersong : var2}=band;
console.log(var1);
console.log(var2);

