// Example of an array type in TypeScript
const numbers: number[] = [1, 2, 3, 4, 5];

const strings: string[] = ["apple", "banana", "cherry"];

const mixedArray: (number | string)[] = [1, "two", 3, "four", 5];

// Example of an object type in TypeScript
interface Person {
  name: string;
  age: number;
  hobbies: string[];
  isProgrammer?: boolean; // Optional property
  address: {
    street: string;
    city: string;
    country: string;
  };
}

const person: Person = {
  name: "John Doe",
  age: 30,
  hobbies: ["reading", "traveling", "coding"],
  address: {
    street: "123 Main St",
    city: "Anytown",
    country: "USA",
  },
};

// Demonstrating functions with object types and array types
function greet(person: Person): string {
  return `Hello, ${person.name}!`;
}

function getTotal(numbers: number[]): number {
  return numbers.reduce((total, num) => total + num, 0);
}

// Usage examples
console.log(greet(person)); // Output: Hello, John Doe!
console.log(getTotal(numbers)); // Output: 15
console.log(person.hobbies); // Output: ['reading', 'traveling', 'coding']

// Array of objects
const people: Person[] = [
  {
    name: "Alice",
    age: 25,
    hobbies: ["hiking", "painting"],
    address: {
      street: "456 Maple St",
      city: "Othertown",
      country: "Canada",
    },
  },
  {
    name: "Bob",
    age: 35,
    hobbies: ["gaming", "cooking"],
    address: {
      street: "789 Oak St",
      city: "Elsewhere",
      country: "UK",
    },
  },
];

people.forEach((person) => {
  console.log(greet(person));
});
