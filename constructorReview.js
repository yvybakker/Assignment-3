//Create a Animal Constructor that has the following parameters. 
//species, name, legs, color, food (which is an array of foods they can eat).
function Animal(species, name, legs, color, food) {
  this.species = species;
  this.name = name;
  this.legs = legs;
  this.color = color;
  this.food = food;
}


//Now create a person function that creates an object and returns it 
//(not in constructor form) that has the following parameters. name, age, height, gender
function makePerson(name, age, height, gender) {
  var person = {
    name: name,
    age: age,
    height: height,
    gender: gender
  };
  return person;
}


//Create a animal array and a person array.
var animal = ["lion", "tiger", "panther", "elephant"]
var person = ["leo", "ben", "jack", "john"]

//Create two instances of Animal and push those into your animal array
animal.push(new Animal('Ben', 'panther', 4, 'black', 'meat'));
animal.push(new Animal('Peter', 'panda', 4, 'black and wihte', 'bamboo']));

//Create two instances of person and push those into your person array.
person.push(createPerson('Jill', 40, '1.75m', 'female'));
person.push(createPerson('Jack', 20, '1.85m', 'male'));

//Now we want every instance of Animal to have an eat method. 
//This method will choose a random item in that instances food array, then alert "(name) ' ate ' 
//(whichever food was chosen)".
function Animal(species, name, legs, color, food) {
  this.species = species,
    this.name = name,
    this.legs = legs,
    this.color = color,
    this.food = food
}
Animal.prototype.eat = function (food) {
  let randomFood = food[Math.floor(Math.random() * food.length)];
  return randomFood;
}
let zebra = new Animal("mamal", "Charles", 4, "black&white", ["apples", "bananas", "oranges"]);
let random = zebra.eat(zebra.food);
console.log(zebra.name.concat(" ate ").concat(random));


// At this point, if we wanted to add something to every istance of person could we? 
// Yes or no? and why or why not?
// No.
/*
  1) What happens when you use the 'new' keyword to call a Constructor function?
  You create a new object.
  2) What's a good way to describe the keyword 'this'
  this. refers to the owner of the method.
  3) Can a normal function which creates an object and then returns that object use the prototype?
  No.
  4) What happens if you forget to use 'new' when calling a constructor?
  It will not create a new object.
*/