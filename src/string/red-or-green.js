// https://practice.geeksforgeeks.org/problems/red-or-green5711/1/?category[]=Strings&category[]=Strings&page=1&query=category[]Stringspage1category[]Strings

function redOrGreen(str) {
  let green = 0;
  let red = 0;

  for (let char of str) {
    green = char === "G" ? green + 1 : green;
    red = char === "R" ? red + 1 : red;
  }

  return green > red ? red : green;
}

module.exports = redOrGreen;
