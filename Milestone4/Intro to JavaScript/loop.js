//---------for of loop--------//
// const numbers=[1,2,3,4,5,6,7,8]
// for(const num of numbers)
// console.log(num)

// --------if---------//
// const number=7;
// if(number<10){
//     console.log('small number');
// }
// console.log('blah');

//---------while loop---------//

//range
// let num=0; //loop variable
// while(num<=5){
//     console.log('loop',num);
//     num+=1;
// }

//sum
// let num=1;
// let sum=0;
// while(num<=5){
//     console.log(num);
//     sum=sum+num;
//     console.log('sum',sum);
//     num++;
// }

//even number
// let num = 1;
// while(num <= 10){
//     console.log(num);

//     if(num % 2 === 0){
//         console.log('even number', num)
      
//     }
// num++;
// }

// //-----------for loop-------------//

// for(let num1=0;num1<5;num1++){
//     console.log(num1);
// }
// //even
// for(let i=0;i<=10;i=i+2){
//     console.log(i)
// }
// //odd
// for(let i=1;i<=10;i=i+2){
//     console.log(i)
// }
//sum
// let sum=0;
// for(let i=1;i<=10;i++){ 
//     sum=sum+i;
//     console.log(i)
// }
// console.log('the sum is' ,sum);
//even
// for(let i=0; i <= 10;i++){

//     if(i% 2 === 0){ //or i!==1
//         console.log('even number', i)
//     }
// }

//--------------break-------------//
// for(let i=0; i <100;i++){
//     console.log(i);

//     if(i>=50){
//         break;
//     }
// }
// console.log('bye');
//------------continue--------------// skipthis one and continue from next part
// for(let i=1; i <10;i++){

//     if(i% 2 ===1){
//       continue;
//     }
//     console.log(i)
// }

let n=0;
while(n<15){
    n++;
    if(n % 5 !== 0){
        continue;
    }
    console.log(n);
   
}