// You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. 
// If the word's length is even, return the middle 2 characters.

//SOLUTION

function getMiddle(s) {
    let lenS = s.length;
    return (lenS % 2 === 0) ? `${s[lenS / 2 - 1]}${s[lenS / 2]}` : `${s[(lenS - 1) / 2]}`
}