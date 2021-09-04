// https://practice.geeksforgeeks.org/problems/display-longest-name0853/1/?category[]=Strings&category[]=Strings&page=1&query=category[]Stringspage1category[]Strings

function displayLongestName(array) {
  let maxString = "";

  for (let str of array) {
    if (maxString.length < str.length) maxString = str;
  }

  return maxString;
}

module.exports = displayLongestName;
