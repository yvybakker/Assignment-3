/* Declare and Define the functions here that will make the function calls below work properly */
// var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
// first(names, function(firstName){
// });
// console.log('The first name in names is ', firstName)
var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
var firstName = names.find(function (element) {
  return element == names[0];
});
console.log('The first name in names is', firstName);


/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */
// var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
// last(names, function(lastName){
//   console.log('The last name in names is ', lastName);
// });
var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
var lastName = names.find(function (element) {
  return element == names[names.length - 1];
});
console.log('The last name in names is', lastName);


/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */
//have the contains function return a boolean value for if the name is in the array or not.
var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];

function contains(string, array, callback) {
  var result = false;
  for (var i = 0; i < array.length; i++) {
    if (array[i] === string) {
      result = true;
    }
  }
  callback(result);
}


/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */
//Produce a new array of values by mapping each value in list through a transformation function
function map(array, callback) {
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    newArray.push(callback(array[i]));
  }
  console.log(newArray);
}


/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */
// var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
// uniq(names, function (uniqArr) {
//   console.log('The new names array with all the duplicate items removed is ', uniqArr);
// });
function uniq(array, callback) {
  array.forEach(function (element, index) {
    for (var j = 0; j < array.length; j++) {
      if (element === array[j] && index !== j) {
        array.splice(j, 1);
        break;
      }
    }
  });
  callback(array);
}


/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */
function each(array, callback) {
  for (var i = 0; i < array.length; i++) {
    callback(array[i], i);
  }
}
var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
each(names, function (item, indice) {
  console.log('The item in the ' + indice + 'position is ' + item)
});


/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */
var users = [{
    id: '12d',
    email: 'tyler@gmail.com',
    name: 'Tyler',
    address: '167 East 500 North'
  },
  {
    id: '15a',
    email: 'cahlan@gmail.com',
    name: 'Cahlan',
    address: '135 East 320 North'
  },
  {
    id: '16t',
    email: 'ryan@gmail.com',
    name: 'Ryan',
    address: '192 East 32 North'
  },
];

function getUserById(string, array, callback) {
  for (var i = 0; i < array.length; i++) {
    if (array[i].id === string) {
      callback(array[i]);
    }
  }
}


/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */
//Looks through each value in the list, returning the first one that passes a truth test 

function find(array, callback) {
  for (var i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      console.log(array[i]);
    }
  }
}

var numbers = [1, 2, 3, 4, 5, 6];
find(numbers, function (num) {
      return num % 2 == 0; //should return 2