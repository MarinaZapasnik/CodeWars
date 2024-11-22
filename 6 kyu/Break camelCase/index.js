// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

//SOLUTION

function solution(string) {
    let newStr = string.split('');
    let breakUp = [newStr[0]];
    let letter;
    for (let i = 1; i < newStr.length; i++) {
        letter = newStr[i].toUpperCase();
        if (newStr[i] === letter) {
            breakUp.push(` ${newStr[i]}`)
        } else { 
            breakUp.push(newStr[i])
        }
    }
    return breakUp.join('');
}