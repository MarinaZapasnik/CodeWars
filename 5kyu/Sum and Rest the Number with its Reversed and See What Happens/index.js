// The number 45 is the first integer in having this interesting property: the sum of the number with its reversed is divisible by the difference between them(absolute Value).

// 45 + 54 = 99 
// abs(45 - 54) = 9
// 99 is divisible by 9.
// The first terms of this special sequence are :

// n        a(n)
// 1        45
// 2        54
// 3        495
// 4        594
// Make the function that receives n, the ordinal number of the term and may give us, the value of the term of the sequence. Let's see some cases (input ----> output):

// 1 -----> 45
// 3 -----> 495
// "Important: Do not include numbers which, when reversed, have a leading zero, e.g.: 1890 reversed is 0981, so 1890 should not be included."

// Your code will be tested up to the first 65 terms, so you should think to optimize it as much as you can.



function sumDifRev(n){
    let magicArray = []
    
    for (let i = 45; magicArray.length <= n; i ++) {
      
      let a = parseInt(i.toString().split("").reverse().join(""));
      
     
      if((i+a) % (Math.abs(i-a)) === 0) {
        magicArray.push(i)
        
      }
    }
    return magicArray[n-1]
  }