// ODD OR EVEN DRILL
function isEven(value) {
    if (value % 2 == 0) {
        return true;
    } else
        return false;
}
// O(1) or constant time.
// because its only ever looking at 1 value so no matter what, the run time is the same.
// best/worst/average all the same.
-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
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
-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -
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

_____________________________________________________
//NAIVE SEARCH DRILL
function naiveSearch(array, item) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === item) {
            return i;
        }
    }
}
//O(n) or linear time.
//it will always need to run through the array to find the matching element.  Time increases as input increases
//best, worst, average are all the same, because the algorithm will always need to execute the for loop
-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
//CREATING PAIRS DRILL
function createPairs(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            console.log(arr[i] + ", " + arr[j]);
        }
    }
}
//O(n^2) or quadratic
//The algorithm has two nested for loops, which will always be executed.
//best,worst, average are all the same.
________________________________________________________________
//GENERATE FIBONACCI DRILL
function generateFib(num) {
    let result = [];
    for (let i = 1; i <= num; i++) {

        // we're adding the first item
        // to the result list, append the
        // number 0 to results
        if (i === 1) {
            result.push(0);
        }
        // ...and if it's the second item
        // append 1
        else if (i == 2) {
            result.push(1);
        }

        // otherwise, sum the two previous result items, and append that value to results.
        else {
            result.push(result[i - 2] + result[i - 3]);
        }
    }
    // once the for loop finishes
    // we return `result`.
    return result;
} //O(n) or linear
//The algorithm, specifically, the looping is based on the value of num.  Therefore, the time is porportional to the num
//best, worst, average are all the same.
__________________________________________________________________
//EFFICIENCY SEARCH
function efficientSearch(array, item) {
    let minIndex = 0;
    let maxIndex = array.length - 1;
    let currentIndex;
    let currentElement;

    while (minIndex <= maxIndex) {
        currentIndex = Math.floor((minIndex + maxIndex) / 2);
        currentElement = array[currentIndex];

        if (currentElement < item) {
            minIndex = currentIndex + 1;
        } else if (currentElement > item) {
            maxIndex = currentIndex - 1;
        } else {
            return currentIndex;
        }
    }
    return -1;
}
//O(log(n)) or logarithmic
//The algorithm cuts the input in half and determines < or >, then continues with this algorithm
//best,worst, average is the same