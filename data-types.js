//declare a variable and assign it a value
let greeting = 'Hello, World!';
console.log(greeting)

let message = "He asked \'You can't be serious\'";
console.log(message)

//Numbers

let pi = 3.14;
let age = 28;

console.log(pi);
console.log(age);

//numbers with mathematical operators

console.log(1 + 1); // 2
console.log(2 - 1); // 1
console.log(2 * 2); // 4
console.log(3 / 4); // 0.75

//boolean

let isDrinkingAge = true;
let isSeniorCitizen = false;

console.log(isDrinkingAge);
console.log(isSeniorCitizen);

//Arrays
let favoriteFruits = ['mango', 'raspberry', 'blueberry'];
console.log(favoriteFruits);


// Print the first element
console.log(favoriteFruits[0]);

// Print each element
console.log(favoriteFruits[0]);
console.log(favoriteFruits[1]);
console.log(favoriteFruits[2]);

//Objects

let userObject = {
    name: 'Adam',
    age: 28,
    favoriteFruits: ['mango', 'raspberry', 'blueberry']
  };
  
  console.log(userObject.name); // Adam
  console.log(userObject.age); // 28
  console.log(userObject.favoriteFruits); // [ 'mango', 'raspberry', 'blueberry' ]
  console.log(userObject.favoriteFruits[0]); // mango

  //objects within objects

  /*

let userObject = {
  name: 'Adam',
  age: 28,
  favoriteFruits: ['mango', 'raspberry', 'blueberry'],
  car: {
    make: 'Honda',
    model: 'Civic',
    isFunctional: true
  }
};

console.log(userObject.car.make); // Honda
console.log(userObject.car.model); // Civic
console.log(userObject.car.isFunctional); // true

  */


  //conditionals
  if (userObject.age >= 21) {
    console.log('This user can drink!');
  } else {
    console.log('This user cannot drink!');
  }

