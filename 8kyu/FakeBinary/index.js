// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

// Note: input will never be an empty string

function fakeBin(x) {
  let numbers = x.toString().split("");
  let numbersToBin = numbers.map((item) => bin(item));

  console.log(numbersToBin.join(""));
  return numbersToBin.join("");
}

function bin(n) {
  if (n < 5) {
    return 0;
  } else {
    return 1;
  }
}

fakeBin(444555888);
