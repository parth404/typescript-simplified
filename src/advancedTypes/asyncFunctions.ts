// How to work with async functions in TypeScript

// Async functions are a way to work with asynchronous code in JavaScript.
// They allow you to write code that looks synchronous but actually runs asynchronously.
// In TypeScript, async functions are a little different from regular functions.
// They return a Promise that resolves to the value returned by the function.

// Here's an example of an async function in TypeScript:

async function wait(duration: number): Promise<string> {
  return new Promise<string>((resolve) => {
    setTimeout(() => resolve("Hi"), duration);
  });
}

wait(1000).then((value) => {
  console.log(value.length);
});

// example with a simple fetch request

async function fetchData(url: string): Promise<any> {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

// some more examples

async function fetchUser(id: number): Promise<{ name: string; age: number }> {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  return response.json();
}
