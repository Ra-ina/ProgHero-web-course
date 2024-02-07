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
const userInput = { name: "rahat", birthYear: 2002, siteName: "Facebook" };
console.log(password(userInput));
