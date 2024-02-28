//for each
const numbers = [1, 5, 6, 4, 15];
// const result = numbers.forEach(n => console.log(n))
const result = numbers.forEach(n => {
    
})
console.log(result)

//filter
// filter selects elements based on a condition and returns an array with the elements that fulfilled the condition.
const numbers = [1, 5, 6, 4, 15];
const players = [75, 65, 67, 72, 55, 59]
// const selected = players.filter(p => p > 70);
// const selected = players.filter(p => p > 80);
// const selected = players.filter(p => p > 50);
const selected = players.filter(p => p % 2 === 1)
console.log(selected)

const friends = ['Tom', 'John', 'Micheal', 'Oliver', 'Tim', 'Joshna'];
const oddFriends = friends.filter(friend => friend.length > 4)
console.log(oddFriends)

//find
const players = [75, 65, 67, 72, 55, 59];

// const selected = players.find(player => player > 70)
const selected = players.find(player => player > 80)
console.log(selected)

/**
 * 1. map 
 * 2. forEach
 * 3. filter 
 * 4. find
 * 5. reduce
*/
