// ODD OR EVEN DRILL
function isEven(value) {
  if (value % 2 == 0) {
    return true;
  }
  else
    return false;
}
// O(1) or constant time.
// because its only ever looking at 1 value so no matter what, the run time is the same.
// best/worst/average all the same.
------------------------------------------------
// ARE YOU HERE DRILL
function areYouHere(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    const el1 = arr1[i];
    for (let j = 0; j < arr2.length; j++) {
      const el2 = arr2[j];
      if (el1 === el2) return true;
    }
  }
  return false;
}
// O(n^2) or polynomial time.
// best/worst/average is all quadratic because no matter what we have to run each loop at least 1 time.
-------------------------------------------------------
//DOUBLER DRILL
function doubleArrayValues(array) {
  for (let i = 0; i < array.length; i++) {
    array[i] *= 2;
  }
  return array;
}
// O(n) or linear time.
// it always runs through the entire loop so it will increase linearly with the size of the data.
// best/worst/average all the same because were looping through entire array.

