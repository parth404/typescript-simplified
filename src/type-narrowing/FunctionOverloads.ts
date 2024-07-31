// Function Overloads in typescript are used to define multiple function signatures
// for a single function. The function implementation is the same, but the function
// can be called with different types of arguments.

function sum(a: number, b: number): number;

function sum(arr: number[]): number;

function sum(a: number | number[], b?: number): number {
  if (Array.isArray(a)) {
    return a.reduce((acc, val) => acc + val, 0);
  } else {
    return a + (b as number);
  }
}

const s1 = sum([1, 2]); // 3
const s2 = sum(1, 2); // 3

// Example 1: Overloading with Different Return Types

// Function to handle different types of inputs and return different types of outputs
function process(input: string): string;
function process(input: number): number;
function process(input: boolean): boolean;
function process(input: string | number | boolean): string | number | boolean {
  if (typeof input === "string") {
    return `Processed string: ${input}`;
  } else if (typeof input === "number") {
    return input * 2;
  } else {
    return !input;
  }
}

const result1 = process("Hello"); // "Processed string: Hello"
const result2 = process(10); // 20
const result3 = process(true); // false

// The process function is overloaded to handle string, number,
// and boolean inputs, returning different types based on the input type.

// Example 2: Overloading with Optional Parameters

// Function to handle different types of inputs with optional parameters
function format(value: string, uppercase?: boolean): string;
function format(value: number, precision?: number): string;
function format(value: string | number, option?: boolean | number): string {
  if (typeof value === "string") {
    return option ? value.toUpperCase() : value.toLowerCase();
  } else {
    return value.toFixed(option as number);
  }
}

const formattedString1 = format("hello"); // "hello"
const formattedString2 = format("hello", true); // "HELLO"
const formattedNumber1 = format(3.14159); // "3"
const formattedNumber2 = format(3.14159, 2); // "3.14"

// The format function is overloaded to handle string and number inputs
// with optional parameters to modify the output format.

// Example 3: Overloading with Complex Types

type User = {
  id: number;
  name: string;
};

type Admin = {
  id: number;
  name: string;
  role: string;
};

// Function to handle different types of user objects
function getUserInfo(user: User): string;
function getUserInfo(user: Admin): string;
function getUserInfo(user: User | Admin): string {
  if ("role" in user) {
    return `Admin: ${user.name}, Role: ${user.role}`;
  } else {
    return `User: ${user.name}`;
  }
}

const user: User = { id: 1, name: "John" };
const admin: Admin = { id: 2, name: "Jane", role: "Manager" };

const userInfo1 = getUserInfo(user); // "User: John"
const userInfo2 = getUserInfo(admin); // "Admin: Jane, Role: Manager"

// The getUserInfo function is overloaded to handle User and Admin objects,
// returning different strings based on the presence of the role property.
