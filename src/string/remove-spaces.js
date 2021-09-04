// https://practice.geeksforgeeks.org/problems/remove-spaces0128/1/?category[]=Strings&category[]=Strings&page=1&query=category[]Stringspage1category[]Strings

function removeSpaces(str) {
  let newString = "";

  for (let char of str) {
    if (char !== " ") newString += char;
  }

  return newString;
}

module.exports = removeSpaces;
