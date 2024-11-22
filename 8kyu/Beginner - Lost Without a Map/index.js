// Given an array of integers, return a new array with each value doubled.

// For example:

// [1, 2, 3] --> [2, 4, 6]

//SOLUTION

// function maps(x) {
//     let doubleX = [];
//     for (let i = 0; i < x.length; i++) {
//         doubleX.push(x[i] * 2);
//     }
//     return doubleX
// }

function maps(x) {
    return x.map(item => item * 2);
}