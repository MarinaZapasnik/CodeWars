// It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. 
// You're given one parameter, the original string. You don't have to worry about strings with less than two characters.

//SOLUTION

function removeChar(str) {
    let newStr = ''
    for (let i = 1; i < (str.length - 1); i++) {
        newStr = newStr + str[i]
    }
    return newStr
};