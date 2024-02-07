function monthlySavings(arr, livingCost) {
    if (!Array.isArray(arr) || typeof livingCost !== 'number') {
        return "Invalid input";
    }
    let totalPay = 0;
    for (const payment of arr) {
        if (payment >= 3000) {
            newPay = payment - (payment * 0.2);
            totalPay = newPay + payment;
        }
        else {
            totalPay = totalPay + payment;
        }
    }
    const totalSaving = (totalPay) - livingCost;
    if (totalSaving >= 0) {
        return totalSaving;
    } else {
        return "earn more";
    }
}
const totalCalc = monthlySavings([1000, 2000, 3000], 5400);
// const totalCalc = monthlySavings([ 1000 , 2000 , 2500 ] , 5000);
// const totalCalc = monthlySavings([ 900 , 2700 , 3400],10000);
// const totalCalc = monthlySavings(100, [ 900 , 2700 , 3400]);
console.log(totalCalc);
