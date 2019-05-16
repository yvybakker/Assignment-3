/* Make sure you do these last */
// Write a function that takes an array of integers and returns the sum of the integers after adding 1 to each.
// plusOneSum([1, 2, 3, 4]);

function addOneToEach(array) {
    var count = 0;
    for (let i = 0; i < array.length; i++) {
        count += 1 + array[i];
    }
    return count;
}
addOneToEach(plusOneSum);


// Write a function that accepts a multi dimensional array and returns a flattened version.
flatten([1, 2, [3, [4], 5, 6], 7])

function flatten(unFlattenArray) {
    var flattenArray = unFlattenArray.join('').split('');
    for (var j = 0; j < flattenArray.length; j++) {
        if (flattenArray[j] === ',') {
            flattenArray.splice(j, 1);
        }
    }
    return flattenArray;
}


// Given an array [a1, a2, ..., aN, b1, b2, ..., bN, c1, c2, ..., cN] convert it to [a1, b1, c1, a2, b2, c2, ..., aN, bN, cN]
let array = ['a1', 'a2', 'a3', 'b1', 'b2', 'b3', 'c1', 'c2', 'c3'];

function numberOrder() {
    var splitAll = [];
    for (let i = 0; i < array.length; i++) {
        var splitString = array[i].split("");
        var reversed = splitString[1] + splitString[0];
        splitAll.push(reversed);
    }
    let newArray = splitAll.sort();
    var reverseNewArray = [];
    for (let j = 0; j < array.length; j++) {
        var splitNewString = newArray[j].split("");
        var newReversed = splitNewString[1] + splitNewString[0];
        reverseNewArray.push(newReversed);
    }
    return reverseNewArray;
}
numberOrder();



// There is an array of non-negative integers. A second array is formed by shuffling the elements of the 
//first array and deleting a random element. Given these two arrays, find which element is missing in the second array.
// sorry really didn't figure this one out :(


// Write a function that returns the longest word(s) from a sentence. The function should not return any duplicate words (case-insensitive).
// Example
// longestWords("You are just an old antidisestablishmentarian") // ["antidisestablishmentarian"]
// longestWords("I gave a present to my parents") // ["present", "parents"]
// longestWords("Buffalo buffalo Buffalo buffalo buffalo buffalo Buffalo buffalo") // ["buffalo"] or ["Buffalo"]
var longestWord = "You are just an old antidisestablishmentarian"

function longest(str) {
    const stringArray = str.split(" ");
    const longestWord = stringArray.reduce((a, b) => {
        if (b.length > a.length) {
            return b;
        } else {
            return a;
        }
    });
    return [longestWord];
}
longest(longestWord);


// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
// Find the sum of all the multiples of 3 or 5 below 1000.
// sorry really didn't figure this one out :(

// Remove duplicate characters in a given string keeping only the first occurrences. 
// For example, if the input is ‘tree traversal’ the output will be "tre avsl".
function removeDuplicateCharacters(string) {
    var array = string.split('');
    var object = {};
    array.forEach(function (element1) {
        object[element1] = element1;
    })
    var outcome = Object.keys(object).join('');
    console.log(outcome);
}

removeDuplicateCharacters('hello world, how are you?');


// Write a sum method which will work properly when invoked using either syntax below.
function sumMethod(b) {
    if (arguments.length == 2) {
        return arguments[0] + arguments[1];
    } else {
        return function (a) {
            return b + a;
        };
    }
}
console.log(sumMethod(2, 3));
console.log(sumMethod(2)(3));