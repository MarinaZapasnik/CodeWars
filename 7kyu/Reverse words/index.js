// Complete the function that accepts a string parameter, and reverses each word in the string. 
// All spaces in the string should be retained.

//SOLUTION

function reverseWords(str) {
    let strArr = str.split(' ');
    let newStr = '';
    let word;
    for (let i = 0; i < strArr.length; i++) {
        word = strArr[i].split('');
        newStr = newStr + word.reverse().join('') + ' ';
    }
    return newStr.trim();
};