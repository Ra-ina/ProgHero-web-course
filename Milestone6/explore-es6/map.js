// map ==> loops through each element of the array and do the operation that you passed in the call back function and hold the result from each operation in an array and finally returns you the array

const numbers = [4, 5, 2, 8, 10];

function doubleIt(num) {
    // console.log('num now', num)
    return num * 2;
}

const double2 = n => n * 2;

const result = numbers.map(doubleIt);
// console.log(result)

const output = numbers.map(double2)
// console.log(output)
const output2 = numbers.map(n => n * 2);

// const doubled = [];
// for(const num of numbers){
//     const double = num * 2;
//     doubled.push(double)
// }

// console.log(doubled)



const numbers = [12, 10, 8, 15, 7];

const doubled = numbers.map(num => num * 2)
// console.log(doubled)
const fiveBonus = numbers.map(num => num + 5);
// console.log(fiveBonus)
const halves = numbers.map(num => num / 2);

const friends = ['Tom', 'John', 'Micheal', 'Oliver'];

const lengths = friends.map(frnd => frnd.length)
// console.log(lengths)
const firstLetter = friends.map(friend => friend[0])
console.log(firstLetter);