// https://practice.geeksforgeeks.org/problems/java-convert-string-to-lowercase2313/1/?category[]=Strings&category[]=Strings&page=1&query=category[]Stringspage1category[]Strings

function toLowercase(arr, n) {
  let newString = "";

  for (let char of arr) {
    if (char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90) {
      newString += String.fromCharCode(char.charCodeAt(0) - 65 + 97);
    } else {
      newString += char;
    }
  }

  return newString;
}

module.exports = toLowercase;
