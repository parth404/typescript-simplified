import { IPerson, Person } from "../basicTypes/types-vs-interface";
import { person1, person2 } from "./defining-functions";

// Function to log person details to the console
function logPersonDetails(person: Person | IPerson): void {
  console.log(
    `${person.name}, aged ${person.age}, lives at ${person.address.street}, ${
      person.address.city
    }, ${person.address.country}. Hobbies include: ${person.hobbies.join(
      ", "
    )}.`
  );
}

// Example usage
logPersonDetails(person1);
logPersonDetails(person2);
