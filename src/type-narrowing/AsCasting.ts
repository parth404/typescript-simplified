// As Casting is a way to tell the compiler that you know more about the type of an expression than it does.

// Syntax
// <Type>expression
// or
// expression as Type

// Example
let x: unknown = "Hello";
let length: number = (x as string).length;

console.log(length); // 5

// In the above example, we use the as keyword to cast the x variable to a string type.

// Example

type Todo = {
  title: string;
};

function func() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) => {
      return data as Todo;
    });
}

// This should be avoided as it can lead to runtime errors if the type assertion is incorrect.
