//--------STRING------------//
// string is immutable
const capital='dhaka';
const city='dhaka ';
console.log(capital.length);
console.log(capital[0]);

//CASE
console.log(capital.toUpperCase());
console.log(capital.trim()); //removes whitespace from start and end

//SLICE
const address='Chattogram';
const part=address.slice(1,5); //for splice at first take the iniatial index and then the index after the one we want to stop
console.log(part);

//SPLIT
// const sentence='i am raina';
// console.log(sentence.split(' ')); 
// console.log(sentence.split('a')); 

//JOIN
const friends=['raina','mun','sadia','shen','jubi'];
console.log(friends.join('|'));

//CONCAT
const first='Raina';
const last='Nusrat';
const fullName= first+' '+last; //Concat
// or const fullName2=first.concat(' ').concat(last)
console.log(fullName);

//INCLUDES
console.log(last.includes('u'));

//REVERSE

// style1
// const sentence='i am raina';
// let reverse=' '
// for (const letter of sentence){reverse=letter+reverse;}
// console.log(reverse);

//style2
// const sentence='i am raina';
// let reverse=' '
// for(let i=0;i<sentence.length;i++){
//     // console.log(sentence[i]);
//     const letter=sentence[i];
//     reverse=letter+reverse;
// }
// console.log(reverse);

//shortcut style
const sentence='i am raina';
const reverse=sentence.split('').reverse().join('');
console.log(reverse);