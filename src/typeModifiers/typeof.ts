// The typeof modifier in TypeScript is used to obtain the type of a variable
// or property as a type literal. It is often used in conjunction with type
// annotations to create new types based on existing values.

// Example: Basic Usage
// Suppose we have a variable person with a type annotation of Person:
type Person = {
  name: string;
  age: number;
  address?: {
    street: string;
    city: string;
    country: string;
  };
};

const person: Person = { name: "Alice", age: 30 };

// We can use typeof to create a new type that represents the type of the person variable:
type PersonType = typeof person;

// The PersonType type is equivalent to the Person type, as it represents the type of the person variable.

// Example showing use in a function
// We can use typeof in a function to create a new type based on the type of a parameter:
function printPersonDetails(person: Person) {
  type PersonType = typeof person;
  console.log(`Name: ${person.name}, Age: ${person.age}`);
}

// The PersonType type is a new type that represents the type of the person parameter.

// Example mapping function

// We can also use typeof with mapped types to create new types based on the types of existing values:

type PersonDetails = {
  [K in keyof Person]: string;
};

// The PersonDetails type is a mapped type that maps each key of Person to a string type.

// Example using mapped type

// We can use the PersonDetails type to create a new object with string values for each key of Person:

const personDetails: PersonDetails = {
  name: "Alice",
  age: "30",
};

// The personDetails object has string values for each key of the Person type.

// More Examples

// Example 1: Using typeof with nested objects

type Address = {
  street: string;
  city: string;
  country: string;
};

type Employee = {
  id: number;
  name: string;
  address: Address;
};

// We can use typeof with nested objects to access the types of the nested objects:

type AddressType = typeof person.address;

// The AddressType type is equivalent to the Address type, as it represents the type of the address property of the person variable.

// Example 2: Using typeof with function

function greet(name: string) {
  return `Hello, ${name}!`;
}

// We can use typeof with functions to access the type of the function:

type GreetFunction = typeof greet;

// The GreetFunction type is equivalent to the type of the greet function, which is (name: string) => string.

// Example 3: Using typeof with arrays

const numbers = [1, 2, 3];

// We can use typeof with arrays to access the type of the array elements:

type NumberType = (typeof numbers)[number];

// The NumberType type is equivalent to the type of the elements of the numbers array, which is number.
