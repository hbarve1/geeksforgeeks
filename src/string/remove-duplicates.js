// https://practice.geeksforgeeks.org/problems/remove-duplicates3034/1/?category[]=Strings&category[]=Strings&page=1&query=category[]Stringspage1category[]Strings

function removeDuplicates(string) {
  const set = new Set();

  for (let char of string) {
    if (!set.has(char)) {
      set.add(char);
    }
  }

  return [...set].join("");
}

module.exports = removeDuplicates;
