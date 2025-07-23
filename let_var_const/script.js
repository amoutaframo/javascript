// Using var
var name = "Fatou";
console.log("Name (var):", name); // Output: Fatou

var name = "Omar"; // Redeclaration is allowed with var
console.log("New Name (var):", name); // Output: Omar

// Using let
let age = 25;
console.log("Age (let):", age); // Output: 25

age = 30; // Reassignment is allowed
console.log("New Age (let):", age); // Output: 30

// let age = 35; ❌ Redeclaration not allowed in same scope

// Using const
const country = "Djibouti";
console.log("Country (const):", country); // Output: Djibouti

// country = "France"; ❌ Error: Assignment to constant variable
// const country = "Kenya"; ❌ Error: Cannot redeclare a const

// Bonus: Inside a block (scope difference)
if (true) {
    var city = "Ali Sabieh"; // Accessible outside the block
    let job = "Developer";   // Only inside this block
    const hobby = "Reading"; // Only inside this block

    console.log("Inside block:");
    console.log("City (var):", city);    // Ali Sabieh
    console.log("Job (let):", job);      // Developer
    console.log("Hobby (const):", hobby);// Reading
}

console.log("Outside block:");
console.log("City (var):", city); // ✅ Works


// console.log(job); ❌ Error: job is not defined
// console.log(hobby); ❌ Error: hobby is not defined
