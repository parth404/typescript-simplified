// Basic Type Guards in TypeScript - Type Narrowing
// These are the basic type guards in TypeScript that help you narrow down the type of a variable.

// 1. typeof Type Guard

// typeof type guard is used to narrow down the type of a variable based on the type of the variable.

// Syntax
// typeof variable === 'type'

// Example
let x: number | string;
x = 10;
if (typeof x === "number") {
  console.log(x + 10); // 20
}

x = "Hello";

if (typeof x === "string") {
  console.log(x.toUpperCase()); // HELLO
}

// 2. instanceof Type Guard
// instanceof type guard is used to narrow down the type of a variable based on the instance of the variable.

// Syntax
// variable instanceof ClassName

// Example
class Foo {
  foo = 10;
}

class Bar {
  bar = "Hello";
}

let y: Foo | Bar;

y = new Foo();

if (y instanceof Foo) {
  console.log(y.foo); // 10
}

y = new Bar();

if (y instanceof Bar) {
  console.log(y.bar); // Hello
}

// 3. in Type Guard
// in type guard is used to narrow down the type of a variable based on the property of the variable.

// Syntax
// 'propertyName' in variable

// Example
let z: { foo: number; bar: string };

z = { foo: 10, bar: "Hello" };

if ("foo" in z) {
  console.log(z.foo); // 10
}

if ("bar" in z) {
  console.log(z.bar); // Hello
}

// 4. Custom Type Guard

// Custom type guard is a user-defined function that returns a type predicate.

// Syntax

// function isType(variable: any): variable is Type {}

// Example
function isNumber(x: any): x is number {
  return typeof x === "number";
}

let a: number | string = 10;

if (isNumber(a)) {
  console.log(a + 10); // 20
}

a = "Hello";

if (isNumber(a)) {
  console.log(a + 10);
}

// 5. Discriminated Unions
// Discriminated unions are used to narrow down the type of a variable based on the common property of the variable.

// Example
interface Circle {
  kind: "circle";
  radius: number;
}

interface Square {
  kind: "square";
  side: number;
}

type Shape = Circle | Square;

function getArea(shape: Shape) {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "square":
      return shape.side ** 2;
  }
}

let circle: Circle = { kind: "circle", radius: 10 };
console.log(getArea(circle)); // 314.1592653589793

let square: Square = { kind: "square", side: 10 };
console.log(getArea(square)); // 100

// 6. using ! instead of ?
// The ! operator is used to assert that the value is not null or undefined.

// Example
const form = document.querySelector<HTMLFormElement>("form");
form!.addEventListener("submit", (event) => {});

// In the above example, the form variable is asserted to be not null using the ! operator.

// We can also use it as below

// Example
const form2 = document.querySelector<HTMLFormElement>("form")!;
form2.addEventListener("submit", (event) => {});

// 7. when using switch statements in typescript

// Example
type Todo = {
  title: string;
  priority: "high" | "medium" | "low";
  isCompleted: boolean;
  description?: string;
  dueDate: Date | string;
};

function extendTodo(todo: Todo) {
  switch (todo.priority) {
    case "high":
      console.log("High priority task");
      break;
    case "medium":
      console.log("Medium priority task");
      break;
    case "low":
      console.log("Low priority task");
      break;
  }
}

// This helps to check if we are using the defined cases in the switch statement.
