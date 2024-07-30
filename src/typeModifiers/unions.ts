// In the below example we have a union type that can be either a string or a number.
let id: string | number | boolean = 7;
console.log(id); // Output: 7

id = "seven";
id = true;

// In the below example for optional properties, we have a union type that can be
// either a boolean or undefined automatically added by the ?.
interface IEmployee {
  active?: boolean;
}

// In the below example for union types, we have a union type for different statuses
// that can be either Complete, Incomplete, or Draft.
type Todo = {
  title: string;
  status: "Complete" | "Incomplete" | "Draft";
};

const todo1: Todo = {
  title: "Clean the house",
  status: "Complete",
};

// Example of union of different types
type Person = {
  name: string;
  age: number;
};

type TodoPerson = Todo | Person;

// Example showing use of Todo type
const todo2: TodoPerson = {
  title: "Clean the house",
  status: "Complete",
};

// Example showing use of Person type
const person: TodoPerson = {
  name: "Alice",
  age: 30,
};

// Limitation of union types
// Doesn't work with Interfaces, we can do this with Types

// Some more examples

// Example 1: Union of different object types with nested properties and optional fields
type Employee = {
  id: number;
  name: string;
  position: string;
  department?: {
    name: string;
    location: string;
  };
};

type Contractor = {
  id: number;
  name: string;
  contractDuration: string;
  agency?: {
    name: string;
    contact: string;
  };
};

type Worker = Employee | Contractor;

// Example usage of Worker type
const fullTimeEmployee: Worker = {
  id: 1,
  name: "Alice",
  position: "Developer",
  department: {
    name: "Engineering",
    location: "Building A",
  },
};

const contractWorker: Worker = {
  id: 2,
  name: "Bob",
  contractDuration: "6 months",
  agency: {
    name: "Tech Solutions",
    contact: "contact@techsolutions.com",
  },
};

// Example 2: Union of different types including arrays and objects
type ApiResponse =
  | { status: "success"; data: any[] }
  | { status: "error"; error: string }
  | { status: "loading"; progress: number };

// Example usage of ApiResponse type
const successResponse: ApiResponse = { status: "success", data: [1, 2, 3] };
const errorResponse: ApiResponse = { status: "error", error: "Network error" };
const loadingResponse: ApiResponse = { status: "loading", progress: 50 };

// Example 3: Union of function types with different parameter and return types
type StringOrNumberFunction =
  | ((input: string) => string)
  | ((input: number) => number);

type ComplexFunction =
  | ((input: string) => { result: string; length: number })
  | ((input: number) => { result: number; isEven: boolean });

// Example usage of ComplexFunction type
const stringFunction: ComplexFunction = (input: string) => {
  return { result: input.toUpperCase(), length: input.length };
};

const numberFunction: ComplexFunction = (input: number) => {
  return { result: input * 2, isEven: input % 2 === 0 };
};

console.log(stringFunction("hello")); // Output: { result: 'HELLO', length: 5 }
console.log(numberFunction(10)); // Output: { result: 20, isEven: true }
