// https://practice.geeksforgeeks.org/problems/print-first-letter-of-every-word-in-the-string3632/1/?category[]=Strings&category[]=Strings&page=1&query=category[]Stringspage1category[]Strings

function printFirstLetter(string) {
  let newString = "";

  for (let i in string) {
    if (i == 0) {
      newString += string[i];
    } else if (string[i - 1] === " ") {
      newString += string[i];
    }
  }

  return newString;
}

module.exports = printFirstLetter;
