const numbers=[1,2,3,4,5,6];
console.log(numbers.length);
console.log(numbers[2]);

//push,pop
numbers.push(55);//element added in the last
console.log(numbers);
numbers.pop(55); //last element is removed
console.log(numbers);

//shift, unshift
numbers.shift(55);//first element is removed
console.log(numbers);
numbers.unshift(55); // element is added in the beginning
console.log(numbers);

//includes ; case sensitive
const friends=['raina','taina','khaina']
console.log(friends.includes('raina'))
if(friends.includes('raina')){
    console.log('dance')
}
else{console.log('cry')}

//indexOf
const friend=['raina','taina','khaina']
console.log(friend.indexOf('taina'))

//isArray
const frnds=['raina','taina','khaina']
const age=[]
const food="burger"
console.log(Array.isArray(food))

// slice(2,4) means starts from index2 upto before 4