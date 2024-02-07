// //---------------- 12 inch=1 feet--------------//
// function inchTofeet(inch){
// const feet=inch/12;
// const feetNumber=parseInt(feet);
// const inchRemaining=inch%12;
// const result=feetNumber+' ft ' + inchRemaining+' inch'
// return result;
// }
// const height=inchTofeet(75);
// console.log(height);

// //------------miles to Kilometer--------------//
// function mileToKm(mile){
//     const kilo=mile*1.60934;
//     return kilo;
// }
// const distance=mileToKm(60);
// console.log(distance);

//--------------LEAP YEAR OR NOT---------------//
// function isLeapYear(year){
//     if(year%100!==0 && year%4===0){ //or, if(year%100===0 && year%400===0)
//         return true;
//     }
//     else{
//         return false;
//     }
// }
// const Year=isLeapYear(2074);
// console.log(Year); 

//----------AVG OF ODD NUMBERS IN AN ARRAY-----------//
// function oddAvg(numbers) {
//     const odds = [];
//     for (const number of numbers) {
//         if (number % 2 === 1) {
//             // console.log(number);
//             odds.push(number);
//         }
//     }
//     console.log(odds);
//     let sum = 0;
//     for (const number of odds) {
//         sum = sum + number;
//     }
//     const count = odds.length;
//     console.log(sum, count);
//     const avg = sum / count;
//     return avg;
// }
// const numbers = [1, 2, 3, 4, 5, 6, 7];
// const avg = oddAvg(numbers);
// console.log('avg of odd numbers', avg);

//-------------REMOVE DUPLICATES FROM ARRAY-------------//
//  const names=['rr','tt','tt','ry'];
//  const numbers=[3,4,5,6,7,8,3,3];

//  function noDuplicate(array){
//     const unique=[];
//     for(const item of array){
//         if(unique.includes(item)===false){
//             unique.push(item);
//         }
//     }
//     return unique;
//     // console.log(array);
//  }
//  const uniqueArray=noDuplicate(names);
// //  const uniqueArray=noDuplicate(numbers);
//  console.log(uniqueArray);

 //----------MATH OBJECT----------//
//  const max=Math.max(2,3,6,9,456);
//  console.log(max);
//  const min=Math.min(2,3,6,9,456);
//  console.log(min);

//  console.log(Math.PI);
//  console.log(Math.abs(-44));
//  console.log(Math.round(9.8));
//  console.log(Math.floor(9.2));
//  console.log(Math.ceil(9.78));
//  console.log(Math.random()*10); //gives random fraction numbers. and multiplying by 10 gives fraction values from 1-10 
//  const rand=Math.round(Math.random()*10)
//  console.log(rand);

 //------------------DATE------------------//
//  const today= new Date();
//  const date= new Date('2024-7-26');
// //  console.log(today);
//  console.log(date.getMonth());
//  console.log(date.getDay());
//  const specificDate=new Date(2024,7,26)
// //unix epoc

//----------------------SWAP,TEMP VARIABLE--------------//
let a=5;
let b=7;
console.log(a,b);
const temp=a;
a=b;
b=temp;
console.log(a,b);

let x=5;
let y=7;
console.log(x,y);
[x,y]=[y,x];
console.log(x,y);

