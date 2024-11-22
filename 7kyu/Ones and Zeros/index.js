// Given an array of ones and zeroes, convert the equivalent binary value to an integer.

// Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.

//SOLUTION

function binaryArrayToNumber (arr) {
    let integer = 0;
    let arrLength = arr.length;
    for (let i = 0; i < arrLength; i ++) {
      integer = integer + arr[i] * (2 ** (arrLength - 1 - i))
    }
    return integer;
  };