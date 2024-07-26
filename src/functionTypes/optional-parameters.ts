import { Person } from "../basicTypes/types-vs-interface";

// Function to greet a person with an optional greeting message
function greet(person: Person, greeting?: string): string {
  const greetMessage = greeting ? greeting : "Hello";
  return `${greetMessage}, ${person.name}!`;
}

// Function to get the total of numbers with an optional initial value
function getTotal(numbers: number[], initialValue?: number): number {
  const startValue = initialValue ? initialValue : 0;
  return numbers.reduce((total, num) => total + num, startValue);
}

// Usage examples
const person = {
  name: "John Doe",
  age: 30,
  hobbies: ["reading", "traveling", "coding"],
  address: {
    street: "123 Main St",
    city: "Anytown",
    country: "USA",
  },
};

const numbers = [1, 2, 3, 4, 5];

console.log(greet(person)); // Output: Hello, John Doe!
console.log(greet(person, "Hi")); // Output: Hi, John Doe!
console.log(getTotal(numbers)); // Output: 15
console.log(getTotal(numbers, 10)); // Output: 25
console.log(person.hobbies); // Output: ['reading', 'traveling', 'coding']
