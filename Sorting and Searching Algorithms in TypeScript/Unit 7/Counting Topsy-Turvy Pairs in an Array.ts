function mergeAndCount(arr1: number[], arr2: number[]): [number[], number] {
  let i = 0;
  let j = 0;
  const merged: number[] = [];
  let topsyTurvys = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] <= arr2[j]) {
      merged.push(arr1[i]);
      i++;
    } else {
      merged.push(arr2[j]);
      topsyTurvys += arr1.length - i;
      j++;
    }
  }

  while (i < arr1.length) {
    merged.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    merged.push(arr2[j]);
    j++;
  }

  return [merged, topsyTurvys];
}

function countTopsyTurvys(arr: number[]): [number[], number] {
  if (arr.length === 1) return [arr, 0];

  const middle = Math.floor(arr.length / 2);
  const [left, leftTopsyTurvys] = countTopsyTurvys(arr.slice(0, middle));
  const [right, rightTopsyTurvys] = countTopsyTurvys(arr.slice(middle));
  const [merged, mergeTopsyTurvys] = mergeAndCount(left, right);

  return [merged, leftTopsyTurvys + rightTopsyTurvys + mergeTopsyTurvys];
}

console.log(countTopsyTurvys([4, 2, 1, 3])); // Prints [ [ 1, 2, 3, 4 ], 4 ]