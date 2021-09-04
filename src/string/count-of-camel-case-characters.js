// https://practice.geeksforgeeks.org/problems/find-the-camel3348/1/?category[]=Strings&category[]=Strings&page=1&query=category[]Stringspage1category[]Strings

function countCamelCase(string) {
  let count = 0;

  for (let char of string) {
    if (char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90) count++;
  }

  return count;
}

module.exports = countCamelCase;
