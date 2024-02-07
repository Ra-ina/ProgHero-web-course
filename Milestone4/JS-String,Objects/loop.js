const bottle={
    brand:'apple',
    price:44,
    unique:{color:'white' ,
    height:5
},
    isClean:false
}

//for of : used in array
//for in : used in object
// for(const prop in bottle){
//     console.log(prop)
//     console.log(bottle[prop])
// }

const keys=Object.keys(bottle);
console.log(keys);
for(const key of keys){
    console.log(key, ':',bottle[key]);
}
