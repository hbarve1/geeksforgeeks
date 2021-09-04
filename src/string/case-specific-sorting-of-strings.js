// https://practice.geeksforgeeks.org/problems/case-specific-sorting-of-strings4845/1/?category[]=Strings&category[]=Strings&page=1&query=category[]Stringspage1category[]Strings

function mergeArray(array1, array2) {
  const mergedArray = [];

  while (array1.length || array2.length) {
    if (array1.length === 0) mergedArray.push(array2.shift());
    else if (array2.length === 0) mergedArray.push(array1.shift());
    else if (array1[0] > array2[0]) {
      mergedArray.push(array2.shift());
    } else {
      mergedArray.push(array1.shift());
    }
  }

  return mergedArray;
}

function mergeSort(array) {
  let middle = Math.floor(array.length / 2);

  if (array.length < 2) return array;

  const leftArray = mergeSort(array.slice(0, middle));
  const rightArray = mergeSort(array.slice(middle));

  return mergeArray(leftArray, rightArray);
}

function specificCaseSortingString(string) {
  let lowerCaseString = "";
  let upperCaseString = "";
  let array = [];

  for (let index in string) {
    if (
      string[index].charCodeAt(0) >= 97 &&
      string[index].charCodeAt(0) <= 122
    ) {
      lowerCaseString += string[index];
      array.push(0);
    }

    if (
      string[index].charCodeAt(0) >= 65 &&
      string[index].charCodeAt(0) <= 90
    ) {
      upperCaseString += string[index];
      array.push(1);
    }
  }

  let sortedLowerCaseString = mergeSort([...lowerCaseString]);
  let sortedUpperCaseString = mergeSort([...upperCaseString]);

  const result = array.map((value) => {
    if (value === 0) return sortedLowerCaseString.shift();
    if (value === 1) return sortedUpperCaseString.shift();
  });

  return result.join("");
}

module.exports = specificCaseSortingString;
