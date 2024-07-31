// The Unknown type in TypeScript represents values that we do not know the type of.
// It is similar to the any type, but it is safer because it is not assignable to other types.

// Example
function func(data: unknown) {
  if (typeof data === "string") {
    console.log(data.toUpperCase());
  } else {
    console.log("Data is not a string");
  }
}

func("Hello"); // HELLO

func(10); // Data is not a string

// In the above example, the func function takes a parameter of type unknown.
// Inside the function, we use a type guard to check if the data is of type string.
// If the data is a string, we call the toUpperCase method on it.
// If the data is not a string, we log "Data is not a string".

// The unknown type is useful when working with values of unknown types, such as data from external sources or dynamic content.

// You can also use the unknown type in type assertions to safely convert a value to a specific type.

// Example
let value: unknown = "Hello";
let length: number = (value as string).length;

console.log(length); // 5

// In the above example, we use a type assertion to convert the value variable to a string type.
