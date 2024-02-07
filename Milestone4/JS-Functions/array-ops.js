//write function to give sum of all no.s in the array//
// function sumOfNum(numbers){
//     let sum=0;

// for(const number of numbers){
//     console.log(number);
//     sum=sum+number;
// }
// return sum;
//     // console.log(numbers);

// }
// const numbs=[1,2,3,4,5,6];
// const sum=sumOfNum(numbs);
// console.log('Sum of numbers is',sum);

//write function to return only even no.s and give sum of even no.s in the array//
function evenNumbersOnly(numbers) {
    let evens=[];
    // let sum=0;
    for (const number of numbers) {
        if(number%2===0){
            console.log('even');
            console.log(number);
            evens.push(number);
            // sum=sum+number;
        }
        else{console.log('odd');
        console.log(number);}
        
    }
    
    return evens;
    // return sum;
    
}
const numbs = [1, 2, 3, 4, 5, 6, 7, 8];
const evens= evenNumbersOnly(numbs);
console.log('even numbers',evens);
// const sum= evenNumbersOnly(numbs);
// console.log('sum of even numbers',sum);