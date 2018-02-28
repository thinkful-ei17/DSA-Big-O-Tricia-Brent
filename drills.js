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
________________________________________________________;
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
_________________________________________________________;
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

____________________________________________________________;
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
_______________________________________________________________;
//CREATING PAIRS DRILL
function createPairs(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            console.log(arr[i] + ', ' + arr[j]);
        }
    }
}
//O(n^2) or quadratic
//The algorithm has two nested for loops, which will always be executed.
//best O(n) if 1 or 2
//worst, average are all the same.
________________________________________________________________;
//GENERATE FIBONACCI DRILL
function generateFib(num) {
    const result = [];
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
        // once the for loop finishes
        // we return `result`.
        return result;
    }
    //best case is O(1) where the number = 0 we we simply return the empty array.
    //O(n) or linear
    //The algorithm, specifically, the looping is based on the value of num.  Therefore, the time is porportional to the num
    //worst, average are all the same.
    __________________________________________________________________;
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

    ___________________________________________________________________________;
    // RANDOM ELEMENT DRILL
    function findRandomElement(arr) {
        return arr[Math.floor(Math.random() * arr.length)];
    }
    // its O(1) or constant time.
    // its only ever looking for one index in the array no matter the size of the data.
    // best/worst/avg same 

    ____________________________________________________________________________;
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
    _____________________________________________________________________________
    //COUNTING SHEEP
    function countSheep(num) {
        //stopping condition of base case
        if (num === 0) {
            console.log(`All sheep jumped over the fence`);
        }
        //this is the recursive case
        //this will be executed until it reaches base case
        else {
            console.log(`${num}: Another sheep jump over the fence`);
            countSheep(num - 1);
        }
    }
    //Best case = O(1), worst case = O(n)
    //If the number is 0, the operations will occur only once, else, the operations will occur n times and
    //is based on n input


    ________________________________________________________________________________
    //ARRAY DOUBLE
    function double_all(arr) {
        if (!arr.length) {
            return [];
        }
        return [arr[0] * 2, ...double_all(arr.slice(1))];
    }

    //Best case = O(1), worst case = O(n)
    //If the array is empty, the "if" operation will occur only once, else the operation will occur n times and
    //is based on the size of the array


    ________________________________________________________________________________ /
        //REVERSE STRING
        function reverseString(str) {
            if (str.length < 2) {
                return str;
            }
            return reverseString(str.slice(1)) + str[0];
        }

    //Best case = O(1), worst case = O(n)
    //If the str is less than 2 in length then we only execute the if statement, else the algorithm will exeucte
    //n times based on the length of the string.


    _____________________________________________________________________

    // Exercise 4 - Triangular Number
    // Calculates the nth triangular number.
    // A triangular number counts the objects that can form an equilateral triangle. 
    // The nth triangular number is the number of dots composing a triangle with n dots on a side, 
    // and is equal to the sum of the n natural numbers from 1 to n. 
    // This is the Triangular Number Sequence: 1, 3, 6, 10, 15, 21, 28, 36, 45
    //                           *
    //             *           *    *
    // *     |   *   *  |   *    *    *  |
    //  1st     2nd             3rd             nth?  
    // 1st trianular number = 1
    // 2nd = (1+2) = 3
    // 3rd = (1+2+3) = 6 
    // 5th = (1+2+3+4+5) = 15
    // Input: 5
    // Output: 15

    //Should always return n*(n+1)/2
    function triangle(n) {
        if (n < 2)
            return n;
        return n + triangle(n - 1);
    }
    // best case = O(1) where n is < 2. 
    // worst/avg = O(n) where we recursively loop n times.

    ____________________________________________________________________
    // Exercise 5 - String Splitter
    // Split a string based upon a separator (similar to String.prototype.split).
    // Input: '1/21/2018'
    // Output: 1212018 OR ["1", "21", "2018"]

    function split(str, sep) {
        var idx = str.indexOf(sep);
        if (idx == -1)
            return [str];
        //you don't have to return an array, you can return a string as an array of 
        //character 
        //return str;
        return [str.slice(0, idx)].concat(split(str.slice(idx + sep.length), sep))
            //all these are valid syntax
            //return (str.slice(0,idx) + (split(str.slice(idx + sep.length), sep)))
            //return str.slice(0,idx).concat(split(str.slice(idx + sep.length), sep))
    }

    // best case = O(1) where the sep isnt found inside the string.
    // worst/avg = O(1) because it splits the string and concats it in one operation.

    ____________________________________________________________________
    // Exercise 6 - Binary Representation
    // Write a recursive function that prints out the binary representation of a given number. 
    // For example the program should take 3 as an input and print 11 as output, or 25 as an input 
    // and print 11001 as an output. Note that the binary representation of 0 should be 0. 
    // Input: 25
    // Output: 11001

    function convertToBinary(num) {
        if (num > 0) {
            let binary = Math.floor(num % 2); //save the reminder in binary
            //divide the number by 2 and send that to the function again
            //carry the reminder to the next recursion call
            return (convertToBinary(Math.floor(num / 2)) + binary);
        } else {
            return ''; //base case - at some point the divisions will lead to 0
        }
    }
    // best case is O(1) where the number input is less than or equal to 0.
    // worst/avg case is O(log(n)) because we're halfing the number each recursive call.

    _______________________________________________________________________
    // Exercise 7 - Anagrams
    // An anagram is any word or phrase that exactly reproduces the letters in another order. 
    // Write a program that creates an anagram (listing all the rearrangements of a word) of a given word. 
    // For example, if the user types east, the program should list all 24 permutations, including eats, etas, teas, 
    // and non-words like tsae.
    // Hint: For your algorithm, you might want to think about a prefix and use that to create the new words. 
    // For example, given east, use e as a prefix and you would place e in front of all six permutations of ast 
    // — ast, ats, sat, sta, tas, and tsa. This will give you the words east, eats, esat, esta, etas, and etsa. 
    // Continue this way until you find all the anagrams for east. There should be 24 of them.
    // Input: 
    // Output: 

    let counter = 0;

    function anagrams(prefix, str) {
        if (str.length <= 1) {
            counter++;
            // console.log(`The anagram is ${prefix}${str}`);
        } else {
            for (let i = 0; i < str.length; i++) {
                let currentLetter = str.substring(i, i + 1);
                let previousLetters = str.substring(0, i);
                let afterLetters = str.substring(i + 1);
                anagrams(prefix + currentLetter, previousLetters + afterLetters);
            }
        }
    }

    function printAnagram(word) {
        counter = 0;
        //console.log(`The word for which we will find an anagram is ${word}`);
        anagrams(' ', word);
        console.log(counter);
    }

    // best case O(1) where the string is empty.
    // worst/avg = O(n!) where we recursively call anagrams n! times.

    /* ==============================
    Exercise 8: Animal Hierarchy
    Step through the code and find the input to the program, input to each recursive calls, 
    output of each recursive calls and the output of the program. The purpose of this 
    exercise is not for you to copy paste the code and find out the output but rather 
    step through each line, analyze each step to understand how recursion works.
    */

    const animalHierarchy = [
        { id: 'Animals', parent: null },
        { id: 'Mammals', parent: 'Animals' },
        { id: 'Dogs', parent: 'Mammals' },
        { id: 'Cats', parent: 'Mammals' },
        { id: 'Golden Retriever', parent: 'Dogs' },
        { id: 'Husky', parent: 'Dogs' },
        { id: 'Bengal', parent: 'Cats' },
        { id: 'Alien', parent: null }
    ]

    // ==============================
    function traverse(animalHierarchy, parent) {
        let node = {};
        animalHierarchy.filter(item => item.parent === parent)
            .forEach(item => node[item.id] = traverse(animalHierarchy, item.id));
        return node;
    }
    //best case O(n) because you need to pass over the array at least one time and call traverse 1 time 
    //worse case O(n^2) because you need to pass over the array n times and call traverse n size of the
    //pased in array object 


    /*=================================================================================
    Exercise 9 - Factorial
    Write a recursive program that finds the factorial of a given number. 
    The factorial of a number can be found by multiplying that number by each number 
    between itself and one. The factorial of 5 is equal to 5 * 4 * 3 * 2 * 1 = 120
    Input: 5
    Output: 120
    */
    function factorial(n) {
        // Base Case - when n is equal to 0, we stop the recursion
        if (n === 0) {
            return 1;
        }
        // This is our Recursive Case
        // It will run for all other conditions except when n is equal to 0
        return n * factorial(n - 1);
    }

    //best case input  = 0, therefore O(1)
    //worst case O(n), based on size of n, input factorial get called.

    /*=================================================================================
    Exercise 9 - Fibonacci
    Write a recursive program that prints the fibonacci sequence of a given number. 
    The fibonnaci sequence a series of numbers in which each number is the sum of the 
    two preceding numbers. 
    For example the 7th fibonacci number in a fibonaci sequence is  13. 
    The sequence looks as follows: 1 1 2 3 5 8 13.
    Input: 7
    Output: 13
    1 1 2 3 5
    0+1
    1+1
    1+2
    2+3
    3+5

    
    */
    function fibonacci(n) {
        // Base case
        if (n <= 0) {
            return 0;
        }
        // Base case
        if (n <= 2) {
            return 1;
        }
        // Recursive case
        return fibonacci(n - 1) + fibonacci(n - 2);
    }

    //worst case O(fib(n)) and depends upon the value of input on the number of times function
    //gets called recursively.

    /*
    Organization Chart
    Write a recursive function that prints the following organization chart. 
    Your output should be as shown below with proper indentation to show the hierarchy.
    */

    let organization = {
        "Zuckerberg": {
            "Schroepfer": {
                "Bosworth": {
                    "Steve": {},
                    "Kyle": {},
                    "Andra": {}
                },
                "Zhao": {
                    "Richie": {},
                    "Sofia": {},
                    "Jen": {}
                },
                "Badros": {
                    "John": {},
                    "Mike": {},
                    "Pat": {}
                },
                "Parikh": {
                    "Zach": {},
                    "Ryan": {},
                    "Tes": {}
                }
            },
            "Schrage": {
                "VanDyck": {
                    "Sabrina": {},
                    "Michelle": {},
                    "Josh": {}
                },
                "Swain": {
                    "Blanch": {},
                    "Tom": {},
                    "Joe": {}
                },
                "Frankovsky": {
                    "Jasee": {},
                    "Brian": {},
                    "Margaret": {}
                }
            },
            "Sandberg": {
                "Goler": {
                    "Eddie": {},
                    "Julie": {},
                    "Annie": {}
                },
                "Hernandez": {
                    "Rowi": {},
                    "Inga": {},
                    "Morgan": {}
                },
                "Moissinac": {
                    "Amy": {},
                    "Chuck": {},
                    "Vinni": {}
                },
                "Kelley": {
                    "Eric": {},
                    "Ana": {},
                    "Wes": {}
                }
            }
        }
    };

    function traverseA(data, depth = 0) {
        let indent = " ".repeat(depth * 4);
        Object.keys(data).forEach(key => {
            console.log(indent + key);
            traverseA(data[key], depth + 1)
        });
    }

    function traverseB(node, indent = 0) {
        for (var key in node) {
            console.log(" ".repeat(indent), key);
            traverseB(node[key], indent + 4);
        }
    }
    // best case O(n) where we have an object with no keys.
    // worst/avg O(n) where we recursively call the function for every key in the function.


    function main() {
        //console.log('#1 - count sheep');
        //countSheep(5);

        //console.log('#2 - Array Doubler');
        //let arr = [10,5,3,4];
        //console.log(double_all(arr));

        //console.log('#3 - Reverse String');
        //console.log(reverseString("tauhida"));

        //console.log('#4 - nth Triangular Number');
        //console.log(triangle(5));

        //console.log('#5 - String Splitter');
        //console.log(split('1/21/2018', '/'));

        //console.log('#6 - Binary Representation');
        //console.log(convertToBinary(25));

        //console.log('#7 - Anagrams');
        //printAnagram("east");

        //console.log('#8 - animalHierarchy');
        //console.log(traverse(animalHierarchy, null));

        //console.log('#9 - Factorial');
        //console.log(factorial(5)); //120

        //console.log('#10 - Fibonacci');
        //console.log(fibonacci(7));

        console.log('#11 - Organization Chart');
        console.log(traverseA(organization));
        //console.log(traverseB(organization));

    }
    main()