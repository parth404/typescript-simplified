import { Person } from "../basicTypes/types-vs-interface";

// Function using destructured parameters with nested objects and default values
function displayPersonDetails({
  name,
  age,
  address: { street, city, country },
  hobbies = [],
}: Person): string {
  const hobbiesList = hobbies.length > 0 ? hobbies.join(", ") : "no hobbies";
  return `${name} is ${age} years old, lives at ${street}, ${city}, ${country}, and enjoys ${hobbiesList}.`;
}

// Function using rest parameters to calculate the average of numbers
function calculateAverage(...numbers: number[]): number {
  const total = numbers.reduce((sum, num) => sum + num, 0);
  return numbers.length > 0 ? total / numbers.length : 0;
}

// Example usage
const person: Person = {
  name: "Jane Doe",
  age: 28,
  hobbies: ["reading", "traveling", "coding"],
  address: {
    street: "456 Elm St",
    city: "Somewhere",
    country: "USA",
  },
};

console.log(displayPersonDetails(person));
// Output: Jane Doe is 28 years old, lives at 456 Elm St, Somewhere, USA, and enjoys reading, traveling, coding.

console.log(calculateAverage(1, 2, 3, 4, 5)); // Output: 3
console.log(calculateAverage(10, 20, 30)); // Output: 20
console.log(calculateAverage()); // Output: 0
