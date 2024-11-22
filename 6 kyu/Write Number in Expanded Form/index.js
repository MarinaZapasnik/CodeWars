
// Write Number in Expanded Form
// You will be given a number and you will need to return it as a string in Expanded Form. For example:

// expandedForm(12); // Should return '10 + 2'
// expandedForm(42); // Should return '40 + 2'
// expandedForm(70304); // Should return '70000 + 300 + 4'

//SOLUTION

function expandedForm(num) {
    let numArr = [];
    let i = 1;
    while (num > 0) {
        if (num % 10 != 0) {
            numArr.push(num % 10 * i)
        };
        num = (num - num % 10) / 10;
        i = i * 10;
    }
    return numArr.reverse().join(' + ')
}