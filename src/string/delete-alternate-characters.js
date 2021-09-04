// https://practice.geeksforgeeks.org/problems/java-delete-alternate-characters4036/1/?category[]=Strings&category[]=Strings&page=1&query=category[]Stringspage1category[]Strings

function deleteAlternateChar(string) {
  let newString = "";

  for (let i in string) {
    if (i % 2 === 0) newString += string[i];
  }

  return newString;
}

module.exports = deleteAlternateChar;
