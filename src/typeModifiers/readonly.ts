// Readonly modifier is used to make the properties of an object immutable.

type Person = {
  readonly id: number;
  name: string;
  age: number;
};

const personreadonly: Person = { id: 1, name: "Alice", age: 30 };
// person.id = 2; // Error: Cannot assign to 'id' because it is a read-only property.

type NumberArray = readonly number[];
const nums: NumberArray = [1, 2, 3];
// nums.push(4); // Error: Property 'push' does not exist on type 'readonly number[]'.
// nums[0] = 10; // Error: Index signature in type 'readonly number[]' only permits reading.
// can't modify the array or its elements.

// More Examples

// Example 1: Readonly modifier with nested objects
type Address = {
  readonly street: string;
  readonly city: string;
  readonly country: string;
};

type Employee = {
  readonly id: number;
  name: string;
  readonly address: Address;
};

const employee: Employee = {
  id: 1,
  name: "John Doe",
  address: {
    street: "123 Main St",
    city: "Metropolis",
    country: "Wonderland",
  },
};

// employee.id = 2; // Error: Cannot assign to 'id' because it is a read-only property.
// employee.address.city = "Gotham"; // Error: Cannot assign to 'city' because it is a read-only property.
employee.name = "Jane Doe"; // Allowed

// Example 2: Readonly modifier with arrays of objects
type Product = {
  readonly id: number;
  name: string;
  price: number;
};

type ProductList = readonly Product[];

const products: ProductList = [
  { id: 1, name: "Laptop", price: 1000 },
  { id: 2, name: "Phone", price: 500 },
];

// products.push({ id: 3, name: "Tablet", price: 300 }); // Error: Property 'push' does not exist on type 'readonly Product[]'.
// products[0].id = 10; // Error: Cannot assign to 'id' because it is a read-only property.
products[0].name = "Gaming Laptop"; // Allowed

// Example 3: Readonly modifier with tuples
type ReadonlyTuple = readonly [number, string, boolean];

const tuple: ReadonlyTuple = [1, "hello", true];

// tuple[0] = 2; // Error: Index signature in type 'readonly [number, string, boolean]' only permits reading.
// tuple.push("new element"); // Error: Property 'push' does not exist on type 'readonly [number, string, boolean]'.
const firstElement = tuple[0]; // Allowed
