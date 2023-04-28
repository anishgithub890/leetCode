/* 
You are given an m x n binary matrix mat of 1's (representing soldiers) and 0's (representing civilians). The soldiers are positioned in front of the civilians. That is, all the 1's will appear to the left of all the 0's in each row.

A row i is weaker than a row j if one of the following is true:

The number of soldiers in row i is less than the number of soldiers in row j.
Both rows have the same number of soldiers and i < j.
Return the indices of the k weakest rows in the matrix ordered from weakest to strongest.


*/

/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
var kWeakestRows = function (mat, k) {
  // find length m and n
  const m = mat.length;
  const n = mat[0].length;
  const arr = [];
  for (let i = 0; i < m; i++) {
    let current = 0;
    for (let j = 0; j < n; j++, current++) {
      if (mat[i][j] === 0) break;
    }
    arr.push([current, i]);
  }
  return arr
    .sort((x, y) => (x[0] === y[0] ? x[1] - y[1] : x[0] - y[0]))
    .slice(0, k)
    .map((items) => items[1]);
};

// output: [2,0,3]

// leet Solution

/**
 
var kWeakestRows = function (mat, k) {
	//Step 1:
	let freqMap = {};
	for (let i = 0; i < mat.length; i++) {
		// Step 2:
		let count = mat[i].lastIndexOf(1) + 1;
		// Step 3:
		if (freqMap[count] !== undefined) {
			freqMap[count] = [...freqMap[count], i];
		} else {
			freqMap[count] = [i];
		}
	}
	// Step 4 & 5
	return Object.values(freqMap)
		.reduce((arr, itm) => {
			arr = [...arr, ...itm];
			return arr;
		}, [])
		.slice(0, k);
};
 */
