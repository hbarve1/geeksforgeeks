//https://practice.geeksforgeeks.org/problems/java-reverse-a-string0416/1/?category[]=Strings&category[]=Strings&page=1&query=category[]Stringspage1category[]Strings

function reverseString(string) {
  let newString = "";

  for (let i = string.length - 1; i >= 0; i -= 1) {
    newString += string[i];
  }

  return newString;
}

module.exports = reverseString;
