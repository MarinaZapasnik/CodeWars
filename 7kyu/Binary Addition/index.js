// Implement a function that adds two numbers together and returns their sum in binary. 
// The conversion can be done before, or after the addition.

// The binary number returned should be a string.

// Examples:(Input1, Input2 --> Output (explanation)))

// 1, 1 --> "10" (1 + 1 = 2 in decimal or 10 in binary)
// 5, 9 --> "1110" (5 + 9 = 14 in decimal or 1110 in binary)

//SOLUTION

function addBinary(a, b) {
    let sum = a + b;
    let binaryArr = [];
    while (sum > 0) {
        binaryArr.push(sum % 2);
        sum = (sum - sum % 2) / 2;
    }
    return binaryArr.reverse().join('')
}