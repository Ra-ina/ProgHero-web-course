//highest mark
function getMax(num1,num2,num3){
    if(num1>num2 && num1>num3){
        console.log('num1 is highest');
    }
    else if(num2>num1 && num2>num3){
        console.log('num2 is highest');
    }
    else{
        console.log('num3 is highest');
    }

}
getMax(16,9,10);
// console.log(max);

const max=Math.max(3,5,6,89);
console.log(max);