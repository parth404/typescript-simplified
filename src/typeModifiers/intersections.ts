// Defining an intersection type
// An intersection type is a type that combines multiple types into one. It is denoted by the & symbol.
// Also works between Interface and Types

// Example
type Person = {
  name: string;
  age: number;
};

type PersonWithId = Person & { id: string }; // Intersection type

// Example usage
const personWithId: PersonWithId = {
  name: "Alice",
  age: 30,
  id: "123",
};

// Example of Intersection between Interface and Type
interface IPerson {
  name: string;
  age: number;
}

interface Todo {
  title: string;
  status: "Complete" | "Incomplete" | "Draft";
}

interface IPersonWithId extends Person, Todo {
  id: string;
} // Intersection type
const personWithId2: IPersonWithId = {
  id: "123",
  name: "Alice",
  age: 30,
  title: "Clean the house",
  status: "Complete",
};

// not useful in case of primitive values
// Example
type A = string & number; // Error: Type 'string' is not assignable to type 'string & number'.
// Intersection types are useful when you want to combine object types.

// Error when combining Object types with same property
type Pet = {
  name: string;
  age: number;
};

type Pet3 = Pet & { name: number; breed: string }; // here name is string in Pet and number in Pet3
// const pet3: Pet3 = { name: "Fluffy", age: 3, breed: "Poodle" }; // error
// Type 'string' is not assignable to type 'never'.
// overlapping types that have incompatible properties will result in an error.

// More Examples

// Example 1: Intersection of multiple object types with nested properties
type Address = {
  street: string;
  city: string;
  country: string;
};

type ContactInfo = {
  email: string;
  phone: string;
};

type Employee = Person & Address & ContactInfo;

// Example usage of Employee type
const employee: Employee = {
  name: "Alice",
  age: 30,
  street: "123 Main St",
  city: "Metropolis",
  country: "Wonderland",
  email: "alice@example.com",
  phone: "123-456-7890",
};

// Example 2: Intersection of function types with different parameter and return types
type StringFunction = (input: string) => string;
type NumberFunction = (input: number) => number;

type StringOrNumberFunction = StringFunction & NumberFunction;

// Example usage of StringOrNumberFunction type
const stringOrNumberFunction: StringOrNumberFunction = ((input: any) => {
  if (typeof input === "string") {
    return input.toUpperCase();
  } else if (typeof input === "number") {
    return input * 2;
  }
}) as StringOrNumberFunction;

console.log(stringOrNumberFunction("hello")); // Output: HELLO
console.log(stringOrNumberFunction(10)); // Output: 20

// Example 3: Intersection of different types including arrays and objects
type User = {
  id: number;
  username: string;
};

type Permissions = {
  canEdit: boolean;
  canDelete: boolean;
};

type UserWithPermissions = User & Permissions;

// Example usage of UserWithPermissions type
const userWithPermissions: UserWithPermissions = {
  id: 1,
  username: "john_doe",
  canEdit: true,
  canDelete: false,
};

console.log(userWithPermissions);
// Output: { id: 1, username: 'john_doe', canEdit: true, canDelete: false }
