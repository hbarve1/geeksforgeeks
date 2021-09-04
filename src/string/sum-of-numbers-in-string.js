// https://practice.geeksforgeeks.org/problems/sum-of-numbers-in-string-1587115621/1/?category[]=Strings&category[]=Strings&page=1&query=category[]Stringspage1category[]Strings

function sumOfNumbersInString(str) {
  let sum = 0;
  let num = "";

  // console.log(str.split(/[^0-9]/g));

  for (let i in str) {
    const index = parseInt(i);

    let number = parseInt(str[index]);

    if (Number.isNaN(number) === false) {
      num += str[index];
      const nextNumber = parseInt(str[index + 1]);

      if (Number.isNaN(nextNumber)) {
        sum += parseInt(num);
        num = "";
      }
    }
  }

  return sum;
}

module.exports = sumOfNumbersInString;
