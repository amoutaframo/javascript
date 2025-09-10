// let person1 = {
//     name: "aicha",
//     age: 24,
//     job: "doctor",
// }
// let person2 = {
//     name: "amina",
//     age: 27,
//     job: "influencer",
// }
// let person3 = {
//     name: "fatima",
//     age: 23,
//     job: "developer",
// }

// class person {
//     constructor(name, age, job) {
//         this.name = name;
//         this.age = age;
//         this.job = job;
//     }
// }
//     let person1 = new person("aicha", 24, "doctor");
//     let person2 = new person("amina", 27, "influencer");
//     let person3 = new person("fatima", 23, "developer");


// console.log(person1 {'age'})
// console.log(person.job )

// let {name,age} =person
class Animal{
    constructor(name ,age ,species) {
        this.name = name;
        this.age = age;
        this.species = species;
    }                                   //// properties of the object
    makeSound() {
        console.log(`${this.name} makes a sound.`); //bihavior what the object does
    
    }
    run() {
        console.log(`${this.name} is running.`);
    }
}
let dog=new Animal("dogi", 5, "canine");
let cat = new Animal("cati", 3, "feline");
let bird = new Animal("bir", 2, "avian");
console.log(dog.name);
dog.makeSound();
dog.run();