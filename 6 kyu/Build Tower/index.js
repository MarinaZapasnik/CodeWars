// Build Tower
// Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. 
// A tower block is represented with "*" character.

// For example, a tower with 3 floors looks like this:

// [
//   "  *  ",
//   " *** ", 
//   "*****"
// ]
// And a tower with 6 floors looks like this:

// [
//   "     *     ", 
//   "    ***    ", 
//   "   *****   ", 
//   "  *******  ", 
//   " ********* ", 
//   "***********"
// ]

//SOLUTION

function towerBuilder(nFloors) {
    let arr = [];
    let floor;
    for (let i = 0; i < nFloors; i++) {
        floor = ' '.repeat(nFloors - 1 - i) + '*'.repeat(i * 2 + 1) + ' '.repeat(nFloors - 1 - i);
        arr.push(floor);
    }
    return arr
}