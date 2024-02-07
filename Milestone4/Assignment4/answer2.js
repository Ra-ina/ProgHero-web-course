function checkName(name) {
    if(typeof name !== 'string'){
        return "invalid";
    }
    const Name = name.toLowerCase();
    const endChar=["a", "y", "i", "e", "o", "u", "w"];
const lastCharacter=Name.charAt(Name.length-1);

if(endChar.includes(lastCharacter)){
    return "Good Name";
}
else{
    return "Bad Name";
}
 }
    const givenName=checkName(['raINAEAEAEAV']);
    console.log(givenName);
