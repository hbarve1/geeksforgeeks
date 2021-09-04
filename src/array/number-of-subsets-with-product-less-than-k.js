// https://practice.geeksforgeeks.org/problems/number-of-subsets-with-product-less-than-k/1

function findAllSubsets(arr) {
  return arr.reduce(
    (subsets, value) => subsets.concat(subsets.map((set) => [...set, value])),
    [[]],
  );
}

// @TODO: optimisation is pending for this
function findSubset(arr, k) {
  return arr
    .reduce(
      (subsets, value) => {
        const subset = [];

        subsets.map((set) => {
          const tempArr = [...set, value];
          const mul = tempArr.reduce((acc, val) => acc * val, 1);

          if (mul <= k) {
            subset.push(tempArr);
            // subset.push({ set: tempArr, mul });
          }
        });

        return subsets.concat(subset);
      },
      [[]],
    )
    .filter((val) => Boolean(val.length)).length;
}

module.exports = findSubset;
