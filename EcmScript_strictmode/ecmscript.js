// ===== 1. let and const =====
let name = "Fatou";
const PI = 3.14;
if (true) {
  let age = 25;
  console.log("1. Block scoped variable:", age); // 25
}
// console.log(age); // ❌ Error

// ===== 2. Arrow Functions =====
const add = (a, b) => a + b;
console.log("2. Arrow function result:", add(2, 3)); // 5

// ===== 3. Template Literals =====
let user = "Fatou";
console.log(`3. Template literal: Hello, ${user}!`);

// ===== 4. Default Parameters =====
function greet(person = "Guest") {
  console.log(`4. Default param: Hello, ${person}!`);
}
greet();
greet("Fatou");

// ===== 5. Destructuring =====
const person = { name: "Fatou", age: 25 };
const { name: personName, age: personAge } = person;
console.log("5. Destructured values:", personName, personAge);

// ===== 6. Spread and Rest Operators =====
// Spread
const arr1 = [1, 2];
const arr2 = [...arr1, 3, 4];
console.log("6. Spread array:", arr2);

// Rest
function sum(...numbers) {
  return numbers.reduce((a, b) => a + b, 0);
}
console.log("6. Rest sum:", sum(1, 2, 3, 4, 5));

// ===== 7. Classes =====
class Person {
  constructor(name) {
    this.name = name;
  }
  greet() {
    console.log(`7. Class method: Hi, I'm ${this.name}`);
  }
}
const p = new Person("Fatou");
p.greet();

// ===== 8. Promises =====
let promise = new Promise((resolve, reject) => {
  setTimeout(() => resolve("8. Promise resolved: Done!"), 1000);
});
promise.then((result) => console.log(result));

// ===== 9. Modules =====
// Note: To test ES6 modules, create separate files and run in browser or Node.js with type="module"
// Example in math.js:
// export const PI = 3.14;
// export function square(x) { return x * x; }
// Then in main.js:
// import { PI, square } from './math.js';

// ===== 10. for...of =====
const fruits = ["apple", "banana", "mango"];
for (const fruit of fruits) {
  console.log("10. for...of loop fruit:", fruit);
}
