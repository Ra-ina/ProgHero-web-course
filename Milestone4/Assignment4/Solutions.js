function calculateMoney(ticketSale) {
    const ticketPrice = 120;
    const lunchExpense = 50 * 8;
    const doormanExpense = 500;
    const totalExpense = (doormanExpense + lunchExpense);
    const remainingMoney = (ticketSale * ticketPrice) - totalExpense;
    if (ticketSale < 0) {
        return "Invalid Number";
    }
    return remainingMoney;
}


function checkName(name) {
    if (typeof name !== 'string') {
        return "invalid";
    }
    const Name = name.toLowerCase();
    const endChar = ["a", "y", "i", "e", "o", "u", "w"];
    const lastCharacter = Name.charAt(Name.length - 1);
    if (endChar.includes(lastCharacter)) {
        return "Good Name";
    }
    else {
        return "Bad Name";
    }
}


function deleteInvalids(array) {
    if (!Array.isArray(array)) {
        return "invalid Array";
    }
    let newArray = [];
    for (const items of array) {
        if (typeof items === 'number' && !isNaN(items)) {
            newArray.push(items);
        }
    }
    return newArray;
}


function password(obj) {
    if (typeof obj !== 'object' || !obj.siteName || !obj.birthYear || !obj.name || obj.birthYear.toString().length !== 4) {
        return "Invalid";
    }
    const name = obj.name;
    const birthYear = obj.birthYear;
    const siteName = obj.siteName;
    const site = siteName[0].toUpperCase();
    const site2 = siteName.slice(1);
    const passString = site.concat(site2).concat('#').concat(name).concat('@').concat(birthYear);
    return passString;
}


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