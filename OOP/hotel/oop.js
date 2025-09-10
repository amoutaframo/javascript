// Base class: Person
class Person {
  constructor(firstName, lastName, gender, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.gender = gender; // true/false
    this.age = age;
  }

  changeName(newFirstName, newLastName) {
    this.firstName = newFirstName;
    this.lastName = newLastName;
  }
}

// Derived class: Worker (extends Person)
class Worker extends Person {
  constructor(
    firstName,
    lastName,
    gender,
    age,
    nationalInsuranceNum,
    position,
    shift
  ) {
    super(firstName, lastName, gender, age); // call parent constructor
    this.nationalInsuranceNum = nationalInsuranceNum;
    this.position = position;
    this.shift = shift;
  }
}

// Derived class: Customer (extends Person)
class Customer extends Person {
  constructor(
    firstName,
    lastName,
    gender,
    age,
    checkinDate,
    roomNumber,
    checkoutDate
  ) {
    super(firstName, lastName, gender, age);
    this.checkinDate = checkinDate;
    this.roomNumber = roomNumber;
    this.checkoutDate = checkoutDate;
  }
}

// Example usage
const worker1 = new Worker(
  "Ali",
  "Hassan",
  true,
  28,
  "NI12345",
  "Receptionist",
  "Night"
);
console.log(worker1);

const customer1 = new Customer(
  "Fatouma",
  "Omar",
  false,
  24,
  "2025-08-22",
  101,
  "2025-08-25"
);
console.log(customer1);

// Change name of customer
customer1.changeName("Amina", "Said");
console.log(customer1);
' caracteristique du oop : encapsulation, abstraction, inheritance, polymorphisme'
// encapsulation : regrouper des donnees et des methodes dans une meme entite
// abstraction : cacher les details d'implementation et ne montrer que les fonctionnalites essentielles
// inheritance : une classe peut heriter des proprietes et methodes d'une autre classe
// polymorphisme : une methode peut avoir plusieurs formes (ex: methode override)