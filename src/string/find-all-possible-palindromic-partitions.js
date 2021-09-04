// https://practice.geeksforgeeks.org/problems/find-all-possible-palindromic-partitions-of-a-string/1/?category[]=Strings&category[]=Strings&page=1&query=category[]Stringspage1category[]Strings

// TODO: This problem is not complete, need to cover more cases.

function isPalindrom2(string) {
  return string === string.split("").reverse().join("");
}

function isPalindrom(string) {
  let low = 0;
  let high = string.length - 1;

  while (low < high) {
    if (string[low] !== string[high]) {
      return false;
    }

    low++;
    high--;
  }

  return true;
}

function findPalindromicPartitions(string) {
  const array = [];

  for (let length = 1; length <= string.length; length++) {
    const list = [];
    let isPalindromExists = false;

    for (let j = 0; j < string.length; ) {
      const str = string.slice(j, j + length);

      if (isPalindrom(str) && str.length === length) {
        list.push(str);
        j = j + length;
        isPalindromExists = true;
      } else {
        list.push(string[j]);
        j++;
      }
    }

    if (isPalindromExists) {
      array.push(list);
    }
  }

  console.log(array);

  return array;
}

module.exports = findPalindromicPartitions;
