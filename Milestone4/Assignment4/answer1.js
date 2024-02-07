function calculateMoney(ticketSold){
    const ticketPrice=120;
    const lunchExpense=50*8;
    const doormanExpense=500;
    const totalExpense=(doormanExpense+lunchExpense);
    const remainingMoney=(ticketSold*ticketPrice)-totalExpense;
    if(ticketSold < 0){
        return "Invalid Number";
    }
    return remainingMoney;   
}
const ticketsBought=calculateMoney(-1055);
console.log(ticketsBought);