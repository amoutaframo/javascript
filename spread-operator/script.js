
// const fruit = ["banana", "apple", "orange", "mango"];
// console.log(...fruit); // ...spread operator


// const user = { name: "Fatouma", age: 25 };
// const copyUser = { ...user, job: "developer", city: "New York" };

// console.log(copyUser); // { name: "Fatouma", age: 25 }


// function sum(a, b, c) {
//   return a + b + c;
// }
// let numbers = [10, 20, 30];
// console.log(sum(...numbers)); // 60
 
let numbers=[1,2,3]
console.log(numbers); 
let copynumbers = [numbers,[4,5,6],[7,8,9]];
console.log(copynumbers[2][1]); //multidimensional array two ,dimensional array

//rest-operator

// function sum(a,b,c,d ,...rest) {
//     return a + b + c
//     console.log(sum(rest))
// }

// // console.log(sum(1, 2, 3, 4)); // 10
// // console.log(sum(5, 10));      // 15
// console.log(sum(5, 10, 15, 20, 25,30,35,40,45)); // 30