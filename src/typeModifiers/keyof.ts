// keyof is a type modifier in TypeScript that produces a union type of string literals
// from the keys of a given type. It is often used in conjunction with mapped types
// to create new types based on the keys of existing types.

// Example: Basic Usage
// Suppose we have an object type Person with name and age properties:
type Person = {
  name: string;
  age: number;
  isProgrammer?: boolean;
};

// We can use keyof to create a type that represents the keys of Person:
type PersonKeys = keyof Person; // "name" | "age"

// The type PersonKeys is a union of string literals "name" and "age", which are the keys of the Person type.

// Example showing use in a function
// We can use keyof in a function to access the keys of an object and retrieve the corresponding values:
// define an object person
const person: Person = { name: "Alice", age: 30 };

// define a function to get the value of a key from the person object
function getValueByKey(obj: Person, key: keyof Person) {
  return obj[key];
}

// grouping function
function displayPersonDetails(person: Person) {
  const keys = Object.keys(person) as Array<keyof Person>;
  keys.forEach((key) => {
    console.log(`${key}: ${getValueByKey(person, key)}`);
  });
}

// Example mapping function
// We can also use keyof with mapped types to create new types based on the keys of existing types:
type PersonDetails = {
  [K in keyof Person]: string;
};

// The PersonDetails type is a mapped type that maps each key of Person to a string type.

// Example using mapped type
// We can use the PersonDetails type to create a new object with string values for each key of Person:

const personDetails: PersonDetails = {
  name: "Alice",
  age: "30",
  isProgrammer: "true",
};

// The personDetails object has string values for each key of the Person type.

// More Examples
// Example 1: Using keyof with nested objects
type Address = {
  street: string;
  city: string;
  country: string;
};

type Employee = {
  id: number;
  name: string;
  address: Address;
};

// We can use keyof with nested objects to access the keys of the nested objects:

type EmployeeKeys = keyof Employee; // "id" | "name" | "address"

// The EmployeeKeys type is a union of string literals "id", "name", and "address".

// Example 2: Using keyof with arrays

// We can also use keyof with arrays to access the keys of array elements:

type NumberArray = number[];

type NumberArrayKeys = keyof NumberArray; // number

// The NumberArrayKeys type is the "number" literal type, as arrays in TypeScript are indexed by numbers.

// Example 3: Using keyof with union types

// We can use keyof with union types to access the keys of the unioned types:

type Contractor = {
  id: number;
  name: string;
  contractDuration: string;
};

type EmployeeOrContractor = Employee | Contractor;

type EmployeeOrContractorKeys = keyof EmployeeOrContractor; // "id" | "name" | "address" | "contractDuration"

// The EmployeeOrContractorKeys type is a union of string literals "id", "name", "address", and "contractDuration".

// Example 4: Using keyof with readonly properties

// We can use keyof with readonly properties to access the keys of readonly properties:

type ReadonlyPerson = {
  readonly id: number;
  name: string;
  age: number;
};

type ReadonlyPersonKeys = keyof ReadonlyPerson; // "id" | "name" | "age"

// The ReadonlyPersonKeys type is a union of string literals "id", "name", and "age".

// Example showing usage in React state management

type User = {
  id: number;
  name: string;
  age: number;
};

type UserKeys = keyof User; // "id" | "name" | "age"

// const [user, setUser] = useState<User>({ id: 1, name: 'John Doe', age: 30 });

// const updateUserProperty = (key: UserKeys, value: User[UserKeys]) => {
//     setUser(prevUser => ({
//         ...prevUser,
//         [key]: value,
//     }));
// };
