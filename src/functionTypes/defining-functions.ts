import { IPerson, Person } from "../basicTypes/types-vs-interface";

// Example usage
export const person1: Person = {
  name: "Alice",
  age: 30,
  hobbies: ["reading", "hiking", "coding"],
  address: {
    street: "123 Main St",
    city: "Anytown",
    country: "USA",
  },
};

export const person2: IPerson = {
  name: "Bob",
  age: 35,
  hobbies: ["gaming", "cooking", "photography"],
  address: {
    street: "789 Oak St",
    city: "Elsewhere",
    country: "UK",
  },
};

// Function to display person details
function displayPersonDetails(person: Person | IPerson): string {
  return `${person.name}, aged ${person.age}, lives at ${
    person.address.street
  }, ${person.address.city}, ${
    person.address.country
  }. Hobbies include: ${person.hobbies.join(", ")}.`;
}

console.log(displayPersonDetails(person1));
console.log(displayPersonDetails(person2));
