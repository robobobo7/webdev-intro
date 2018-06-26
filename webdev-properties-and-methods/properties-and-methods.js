// pop method in javascript

let favoriteFruits = ['mango', 'blueberry', 'raspberry'];
let returnedValue = favoriteFruits.pop();

console.log(favoriteFruits); // ['mango', 'blueberry']
console.log(returnedValue); // raspberry

// Push methid in javascript

let favoriteFruits = ['mango', 'blueberry', 'raspberry'];
let returnedValue = favoriteFruits.push('passionfruit');

console.log(favoriteFruits); // ['mango', 'blueberry', 'raspberry', 'passionfruit']
console.log(returnedValue); // 4

// Iteration..Or loops

for (let i = 0; i < 5; i++) {
    console.log(i);
  }
  
  console.log('Done! Outside the for loop!');

//   another one
  let name = 'Adam';

  for (let i = 0; i < name.length; i++) {
    console.log(name.charAt(i));
  }

//  This loop prints all of the elements in the array
let sales = [5, 7, 3.5, 8];

for (let i = 0; i < sales.length; i++) {
  console.log(sales[i]);
}

// This loop sums all of the elemets in the array. Handy!

let sales = [5, 7, 3.5, 8];
let total = 0;

for (let i = 0; i < sales.length; i++) {
  total = total + sales[i];
}

console.log(total); // 23.5

// this loop modifies an array of strings

let exclamations = ['run', 'hide', 'get away'];

for (let i = 0; i < exclamations.length; i++) {
  exclamations[i] = exclamations[i].toUpperCase();
}

console.log(exclamations); // ['RUN', 'HIDE', 'GET AWAY']