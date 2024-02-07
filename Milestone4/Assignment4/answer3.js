function deleteInvalids(array) {
    if (!Array.isArray(array)) {
        return "invalid array";
    }
    let newArray = [];
    for (const items of array) {
        if (typeof items === 'number' && !isNaN(items)) {
            newArray.push(items);
        }
    }
    return newArray;
}
const nArray = deleteInvalids([1 , null, undefined, 18, -19, NaN, "12", [1, 2], { ob: "lala" }]);
console.log(nArray);
