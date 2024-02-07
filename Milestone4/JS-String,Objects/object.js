// nonprimitive datatype
const bottle={
    brand:'apple',
    price:44,
    unique:{color:'white' ,
    height:5
},
    isClean:false
}

//dot notation- dot diye object er property er value access kora and change o kora jai
// console.log(bottle.brand)
// const sale= bottle.price;
// console.log(sale);

//bracket notation- property er name e symbol thakle bracket notation use korai valo
// console.log(bottle['color'])
// const colour=bottle['color']
// console.log(colour)

// const colorName='colour';
// bottle[colour]="black"
// console.log(bottle)

//KEYS
// const keys=Object.keys(bottle);
// console.log(keys)

//VALUES
// const values=Object.values(bottle);
// console.log(values)

//NESTED OBJECTS
// console.log(bottle.unique.color)

//DELETE
delete bottle.unique;
console.log(bottle)