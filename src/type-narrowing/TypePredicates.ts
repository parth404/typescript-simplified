// Type Predicate Functions are a way to define a function that checks if a value satisfies a specific type.
// The function returns a boolean value based on whether the value satisfies the type predicate.

// Example

// Define a type predicate function
function isNumber(x: any): x is number {
  return typeof x === "number";
}

// Use the type predicate function
let a: number | string = 10;

if (isNumber(a)) {
  console.log(a * 2); // 20
}

// In the above example, we define a type predicate function isNumber that checks if a value is of type number.

// We then use this type predicate function to narrow down the type of the variable a.

// Inside the if block, TypeScript knows that the variable a is of type number, so we can perform number operations on it.

// Type Predicate Functions are useful when you want to create custom type guards for specific types.

// Example

type Person = {
  name: string;
  age: number;
};

type Todo = {
  title: string;
  completed: boolean;
};

function isPerson(obj: Person | Todo): obj is Person {
  return (obj as Person).age !== undefined;
}

const item1: Person | Todo = { name: "Alice", age: 30 };
const item2: Person | Todo = { title: "Buy milk", completed: false };

if (isPerson(item1)) {
  console.log(item1.name); // "Alice"
} else {
  // console.log(item1.title); // Error: Property 'title' does not exist on type 'Person'
}

if (isPerson(item2)) {
  console.log(item2.name); // Error: Property 'name' does not exist on type 'Todo'
} else {
  console.log(item2.title); // "Buy milk"
}

// In the above example, we define a type predicate function isPerson that checks if an object is of type Person.

// Example 2: Type Predicate for Nested Objects

type Address = {
  street: string;
  city: string;
};

type User = {
  name: string;
  address: Address;
};

function isAddress(obj: any): obj is Address {
  return obj && typeof obj.street === "string" && typeof obj.city === "string";
}

function isUser(obj: any): obj is User {
  return obj && typeof obj.name === "string" && isAddress(obj.address);
}

const user1: any = {
  name: "Bob",
  address: { street: "123 Main St", city: "Anytown" },
};
const user2: any = { name: "Charlie", address: { street: "456 Elm St" } };

if (isUser(user1)) {
  console.log(user1.address.city); // "Anytown"
} else {
  console.log("Not a valid user");
}

if (isUser(user2)) {
  console.log(user2.address.city); // Error: Property 'city' does not exist on type 'Address'
} else {
  console.log("Not a valid user");
}

//   Example 3: Type Predicate for Arrays

type NumberArray = number[];

function isNumberArray(arr: any[]): arr is NumberArray {
  return arr.every((item) => typeof item === "number");
}

const array1: any[] = [1, 2, 3];
const array2: any[] = [1, "two", 3];

if (isNumberArray(array1)) {
  console.log(array1.reduce((a, b) => a + b, 0)); // 6
} else {
  console.log("Not a number array");
}

if (isNumberArray(array2)) {
  console.log(array2.reduce((a, b) => a + b, 0)); // Error: Argument of type 'string' is not assignable to parameter of type 'number'
} else {
  console.log("Not a number array");
}

// Example 4: Type Predicate for Discriminated Unions

type Circle = {
  kind: "circle";
  radius: number;
};

type Square = {
  kind: "square";
  side: number;
};

type Shape = Circle | Square;

function isCircle(shape: Shape): shape is Circle {
  return shape.kind === "circle";
}

const shape1: Shape = { kind: "circle", radius: 10 };
const shape2: Shape = { kind: "square", side: 5 };

if (isCircle(shape1)) {
  console.log(shape1.radius); // 10
} else {
  //   console.log(shape1.side); // Error: Property 'side' does not exist on type 'Circle'
}

if (isCircle(shape2)) {
  //   console.log(shape2.radius); // Error: Property 'radius' does not exist on type 'Square'
} else {
  console.log(shape2.side); // 5
}

//   Example 5: Type Predicate for Complex Nested Structures

type Company = {
  name: string;
  employees: Person[];
};

function isCompany(obj: any): obj is Company {
  return (
    obj &&
    typeof obj.name === "string" &&
    Array.isArray(obj.employees) &&
    obj.employees.every(isPerson)
  );
}

const company1: any = {
  name: "Tech Corp",
  employees: [
    { name: "Alice", age: 30 },
    { name: "Bob", age: 25 },
  ],
};
const company2: any = {
  name: "Biz Inc",
  employees: [
    { name: "Charlie", age: 40 },
    { title: "Manager", completed: true },
  ],
};

if (isCompany(company1)) {
  console.log(company1.employees[0].name); // "Alice"
} else {
  console.log("Not a valid company");
}

if (isCompany(company2)) {
  console.log(company2.employees[0].name); // Error: Property 'name' does not exist on type 'Todo'
} else {
  console.log("Not a valid company");
}

//   In the above example, we define a type predicate function isCompany that checks if an object is of type Company.
