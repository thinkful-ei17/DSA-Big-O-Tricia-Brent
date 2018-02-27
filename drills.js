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
________________________________________________________
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
// best case 1st item matches 2nd O(1) its constant.
// O(n^2) or polynomial time.
// worst/average is all quadratic because no matter what we have to run each loop at least 1 time.
_________________________________________________________
//DOUBLER DRILL
function doubleArrayValues(array) {
    for (let i = 0; i < array.length; i++) {
        array[i] *= 2;
    }
    return array;
}
// best is O(1) if 1 item in array.
// O(n) or linear time.
// it always runs through the entire array so it will increase linearly with the size of the data.
// worst/average all the same because were looping through entire array.

____________________________________________________________
//NAIVE SEARCH DRILL
function naiveSearch(array, item) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === item) {
            return i;
        }
    }
}
//best case element at 0index matches item O(1) or constant.
//O(n) or linear time.
//it will always need to run through the array to find the matching element.  Time increases as input increases
//best, worst, average are all the same, because the algorithm will always need to execute the for loop
_______________________________________________________________
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
//best O(n) if 1 or 2
//worst, average are all the same.
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
} 
//best case is O(1) where the number = 0 we we simply return the empty array.
//O(n) or linear
//The algorithm, specifically, the looping is based on the value of num.  Therefore, the time is porportional to the num
//worst, average are all the same.
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
//best case is find item in middle first try O(1)
//O(log(n)) or logarithmic
//The algorithm cuts the input in half and determines < or >, then continues with this algorithm
//worst, average is the same

___________________________________________________________________________
// RANDOM ELEMENT DRILL
function findRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}
// its O(1) or constant time.
// its only ever looking for one index in the array no matter the size of the data.
// best/worst/avg same 

____________________________________________________________________________
// IS IT PRIME DRILL 
function isPrime(n) {
    // if n is less than 2 or a decimal, it's not prime
    if (n < 2 || n % 1 != 0) {
        return false;
    }
    // otherwise, check if `n` is divisible by any integer
    // between 2 and n.
    for (let i = 2; i < n; ++i) {
        if (n % i == 0) return false;
    }
    return true;
}

// best-case is O(1) or constant in the case of someone entering a 2 or a decimal.
// its O(n) or linear time.
// it will always have to loop though at n times.
// worst/avg is linear because it depends solely on the number.
