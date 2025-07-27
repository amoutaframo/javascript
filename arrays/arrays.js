let firstNames =  ['John', 'ali',345];
let ages = [30, 23];
// var firstvar = firstNames[1];
// console.log(firstNames[1]); // John
// console.log(ages[1]); // 23
// console.log(firstNames.length); // 2
// console.log(ages.indexOf(30)); //index of 30 is 0
// console.log(firstvar); // John
firstNames.push('fatouma','suad','ahmed'); // Add 'fatouma' to the end of the firstNames array
// console.log(firstNames);
// firstNames.pop(firstNames); // Remove the last element from the firstNames array
// firstNames.shift(); // Remove the first element from the firstNames array
// firstNames.unshift('Ali'); // Add 'Ali' to the beginning of the firstNames array
// firstNames.splice(1, 2); // Remove 2 elements starting from index 1
// firstNames.splice(1, 0, 'Fatouma'); // Insert 'Fatouma' at index 1 without removing any elements
// firstNames.splice(2, 1, 'Suad'); // Replace the element at index 2 with 'Suad'
firstNames.length = 2;

console.log(firstNames);
var student = ['ayan', 'ali', 'fatouma', 'suad'];
var anothersmallarray = student.slice(0, 3); // Extract elements from index 0 to index 3 (not inclusive)
console.log(anothersmallarray); // ['ayan', 'ali', 'fatouma']
student.reverse(); // Reverse the order of elements in the student array
console.log(student); // ['suad', 'fatouma', 'ali', 'ayan']