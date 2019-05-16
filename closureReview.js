var callFriend = function () {
  var friend = 'Jake';

  function callF(number) {
    return 'Calling ' + friend + ' at ' + number;
  }
  return callF;
};

//Above you're given a callFriend function that returns another function. 
//Do what you need to do in order to call your function and get 'Calling Jake at 435-215-9248' in your console.
var callFriend = function () {
  var friend = 'Jake';

  function callF(number) {
    return 'Calling ' + friend + ' at ' + number;
  }
  return callF;
};
var Y = callFriend();
Y('435-215-9248');


//Write a function that accepts a function as it's first argument and returns a new function (which calls the 
//original function that was passed in) that can only ever be executed once.
function one(two, num) {
  return function three() {
    two();
  }
};


//Once completed, add a second arguments that allows the function to be executed N number of times. 
//After the function has been called N number of times, console.log('STAHHP');
function limit(fn, n) {
  let counter = 0;
  return function () {
    if (counter < n) {
      fn();
      counter += 1
    } else return 'stop'
  }
}

function greeting() {
  console.log('hello');
  return
}
greeting = limit(greeting, 2);
greeting();
greeting();
greeting();
greeting();


//count loop X amount of times