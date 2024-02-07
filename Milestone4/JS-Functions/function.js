// function Raina(){ //function declare
//     console.log('my name');
//     console.log('my name');
//     console.log('my name');
// }
// Raina();// function call

// //PARAMETER AND ARGUMENT
// function square(number){ //PARAMETER=number; comma di onek gula parameter dewa jabe// parameter only works within the function
// console.log('the number is: ',number);
// const square= number*number;
// console.log('the square is: ',square);
// }
// square(4); //the value of number is 4 here. ARGUMENT=4// argument can be both variables and numbers.  

// //RETURN
// function cutHalf(number){
//     const half=number/2;
//     return half; //return means ekhan theke ber hoi jabe
// }
// cutHalf(20);
// const output= cutHalf(20);
// console.log('output is ',output);

//RETURN WITH CONDITION
// function isEven(number){
//     if(number%2===0){
//         return true;
//     }
//     else {return false;
//     }
// }
// console.log(isEven(5));
// console.log(isEven(8));

// function isOdd(number){
//     if(number%2===1){
//         return true;
//     }
//     return false;
// }
// console.log(isOdd(5));
// console.log(isOdd(8));

//------------for a given string tell whether it has even no. of characters or not-----------// 
// function evenSized(str) {
//     const size = str.length;
//     console.log(str, size);
//     if (size % 2 === 0) {
//         console.log('even size');
//         return true;
//     }
//     else {
//         console.log('odd size');
//         return false;
//     }

// }
// evenSized('Chittagong');

function numberOfElements(numbers){
const len=numbers.length;
console.log(len);
return len;

}
numberOfElements([2,3,4,4,5]);
// 