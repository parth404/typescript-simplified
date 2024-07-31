// Readonly is a mapped type that makes all properties of an object readonly.
// It is different from as const because it only makes the top-level properties readonly, not the nested properties.

type Todo = {
  title?: string;
  completed: boolean;
  address?: {
    street?: string;
  };
};

type ReadonlyTodo = Readonly<Todo>;

const todo: ReadonlyTodo = {
  title: "Pick up groceries",
  completed: false,
  address: {
    street: "123 Main St",
  },
};

// The Readonly utility type makes the properties of the Todo type readonly.

// Object.freeze() method
// The Object.freeze() method is similar to the Readonly utility type in TypeScript. It freezes an object, making it immutable.
// Here's an example of using the Object.freeze() method:

const todoObj = {
  title: "Pick up groceries",
  completed: false,
};

Object.freeze(todoObj);

// todoObj.title = "Buy milk"; // Cannot assign to 'title' because it is a read-only property.

// Example 1: Nested Objects with Readonly

type Address = {
  street: string;
  city: string;
  zipCode: string;
};

type User = {
  id: number;
  name: string;
  address: Address;
};

type ReadonlyUser = Readonly<User>;

const user: ReadonlyUser = {
  id: 1,
  name: "John Doe",
  address: {
    street: "123 Main St",
    city: "Anytown",
    zipCode: "12345",
  },
};

// user.id = 2; // Error: Cannot assign to 'id' because it is a read-only property.
// user.address.city = "Othertown"; // Error: Cannot assign to 'city' because it is a read-only property.

// Example 2: Readonly Arrays

type Task = {
  title: string;
  completed: boolean;
};

type ReadonlyTaskArray = ReadonlyArray<Task>;

const tasks: ReadonlyTaskArray = [
  { title: "Task 1", completed: false },
  { title: "Task 2", completed: true },
];

// tasks.push({ title: "Task 3", completed: false }); // Error: Property 'push' does not exist on type 'readonly Task[]'.
// tasks[0].completed = true; // Error: Cannot assign to 'completed' because it is a read-only property.

// Example 3: Readonly with Function Types

type Config = {
  apiKey: string;
  endpoint: string;
  timeout: number;
};

type ReadonlyConfig = Readonly<Config>;

function initialize(config: ReadonlyConfig) {
  console.log(`Initializing with API key: ${config.apiKey}`);
  console.log(`Endpoint: ${config.endpoint}`);
  console.log(`Timeout: ${config.timeout}`);
}

const config: ReadonlyConfig = {
  apiKey: "12345",
  endpoint: "https://api.example.com",
  timeout: 5000,
};

initialize(config);

// config.apiKey = "67890"; // Error: Cannot assign to 'apiKey' because it is a read-only property.
