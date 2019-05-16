//create a function named 'last' that returns the last item from 'threeItems'
//alert the result of your function
var threeItems = [1, 2, 3];
var last = threeItems[threeItems.length - 1];
alert(last)


/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */
//Loop through evenArray removing all values that aren't even 
var evenArray = [1, 2, 3, 6, 22, 98, 45, 23, 22, 12];
for (var i = 0; i < evenArray.length; i++) {
  if ((evenArray[i] % 2) == 1) {
    evenArray.splice(i, 1);
    i = i - 1;
  }
}
console.log(evenArray);


/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */
// below you're given a function that will return a random number between 0 and 30 and an array full or numbers 
// 'randomArray'. Your job is to write a function that will get a random number, then loop through the array to 
// see if that random number is in the array. If it is, alert true, if it's not, alert false
var getRandomArbitrary = function () {
  return Math.floor(Math.random() * (30 - 0) + 0);
}
var randomArray = [0, 3, 4, 5, 6, 7, 9, 14, 17, 24, 25, 26, 29, 30];

function checkArray() {
  var result = false;
  for (var i = 0; i < randomArray.length; i++) {
    if (getRandomArbitrary() === randomArray[i]) {
      return true;
    }
  }
  return result;
}



/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */
//Create a copy of first and save it into second. Then, add 6 and 7 to the end of second. When you run this, 
//first should be just [1,2,3,4,5] and second will be [1,2,3,4,5,6,7] if you created your copy correctly.
var first = [1, 2, 3, 4, 5];
var second;
var first = [1, 2, 3, 4, 5];
var second = [first];
second.push('6', '7')
alert(first) //[1,2,3,4,5];
alert(second) //[1,2,3,4,5,6,7];


/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */
//write a function called longest that takes in our sentence variable, and returns the longest word in that sentence.
var sentence = "Dev Mountain is the best"

function longest(str) {
  const stringArray = str.split(" ");
  const longestWord = stringArray.reduce((a, b) => {
    if (b.length > a.length) {
      return b;
    } else {
      return a;
    }
  });
  return longestWord;
}
longest(sentence);


/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */
//write a function called capitalize that takes in the myPoem variable and capitalizes every word 
//What is a jQuery but a misunderstood object? --> What Is A JQuery But A Misunderstood Object?
var myPoem = 'What is a jQuery but a misunderstood object?'

function capitalize(str) {
  str = str.split(" ");
  for (var i = 0, x = str.length; i < x; i++) {
    str[i] = str[i][0].toUpperCase() + str[i].substr(1);
  }
  return str.join(" ");
}
console.log(capitalize(myPoem));


/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */
//Write a function called vowelCounter that takes in a string (theOdyssey) and returns how many vowels are in that string.
var theOdyssey = "function expression or function declaration? Tis an obvious choice";
const vowels = ["a", "e", "i", "o", "u"]

function vowelCounter(text) {
  let counter = 0;
  for (let letter of text.toLowerCase()) {
    if (vowels.includes(letter)) {
      counter++
    }
  }
  return counter
}
vowelCounter(theOdyssey);