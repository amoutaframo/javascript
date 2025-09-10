// function multiple( x,y) {
//     return x+y
// }
// console.log(multiple(2, 4)) // call the function

// anonymous function
//  var multiply = function (x,y) {
//      return x * y  
//      console.log(multiply(2, 4)); 
// } 

// //arrow function
// let multiple1 = (x, y) => x + y
// console.log(multiple1(2, 5))
 
//  let salarycalculator = (salary) => salary - 35
// console.log(multiple1(20000));
const words = ["china", "france", "canada", "italy"]
const uppercased = words.map(country => country.toUpperCase())//map fait comme le loops
console.log(uppercased)
const numbers = [2, 3, 4, 5, 6]
const double = numbers.map(x => x * 2)
console.log(double)
const double1 = numbers.map(function (x) {
   return x + 2
}) 
console.log(double1);
