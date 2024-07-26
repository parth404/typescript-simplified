// Typing variables as functions

// Function type that takes two numbers and returns a number
let add: (a: number, b: number) => number;

// Assigning a function to the variable
add = (a: number, b: number): number => {
  return a + b;
};

// Function type that takes a string and returns void
let logMessage: (message: string) => void;

// Assigning a function to the variable
logMessage = (message: string): void => {
  console.log(message);
};

// Function type that takes a variable number of arguments and returns a number
let sum: (...numbers: number[]) => number;

// Assigning a function to the variable
sum = (...numbers: number[]): number => {
  return numbers.reduce((total, num) => total + num, 0);
};

// Function type that takes an object and returns a string
type Person = {
  name: string;
  age: number;
  address: {
    street: string;
    city: string;
    country: string;
  };
};

let displayPersonDetails: (person: Person) => string;

// Assigning a function to the variable
displayPersonDetails = (person: Person): string => {
  const {
    name,
    age,
    address: { street, city, country },
  } = person;
  return `${name} is ${age} years old, lives at ${street}, ${city}, ${country}.`;
};

// Example usage
console.log(add(5, 3)); // Output: 8
console.log(add(10, 20)); // Output: 30

logMessage("Hello, TypeScript!"); // Output: Hello, TypeScript!
logMessage("This is a test message."); // Output: This is a test message.

console.log(sum(1, 2, 3, 4, 5)); // Output: 15
console.log(sum(10, 20, 30, 40)); // Output: 100

const person1: Person = {
  name: "Jane Doe",
  age: 28,
  address: {
    street: "456 Elm St",
    city: "Somewhere",
    country: "USA",
  },
};

const person2: Person = {
  name: "John Smith",
  age: 35,
  address: {
    street: "789 Maple St",
    city: "Anywhere",
    country: "Canada",
  },
};

console.log(displayPersonDetails(person1));
// Output: Jane Doe is 28 years old, lives at 456 Elm St, Somewhere, USA.

console.log(displayPersonDetails(person2));
// Output: John Smith is 35 years old, lives at 789 Maple St, Anywhere, Canada.
