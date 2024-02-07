// const friend=['raina','taina','khaina']
// for(let i=0;i<friend.length;i++){
//     console.log(friend[i]);
// }

// let i=0;
// while(i<friend.length){
//     console.log(friend[i]);
//     i++;
// }

//REVERSE
// const numbers=[1,2,3,4,5,6,7];
// // numbers.reverse();
// // console.log(numbers);
// const rev_numbers=[];
// for(const num of numbers){
//     rev_numbers.unshift(num)
// }
// console.log(rev_numbers);

//SORTING
const number=[4,46,7,8,9,3,1,2];
// const number_asc=number.sort()//not working properly
const number_asc=number.sort(function(a,b){return a-b})
console.log(number_asc);