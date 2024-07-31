// Generics allow you to create reusable components that can work with a variety of types rather than a single one.
// This makes your code more flexible and type-safe.

const input = document.querySelector(".input");

// console.log(input?.value) // ERROR: Property 'value' does not exist on type 'Element'.

// We can resolve this by
const input1 = document.querySelector<HTMLInputElement>(".input");
console.log(input1?.value); // (property) HTMLInputElement.value: string | undefined

// Here we are using the HTMLInputElement generic type to specify the type of the element we are selecting.

// We can also create our own generic types

function getSecond(array: number[]) {
  return array[1];
}

const a = [1, 2, 3, 4, 5];
const b = ["hello", "world"];

const retA = getSecond(a);
// const retB = getSecond(b); // ERROR: Argument of type 'string[]' is not assignable to parameter of type 'number[]'.

// we can resolve this by using generics
function getSecond1<ArrayType>(array: ArrayType[]) {
  return array[1];
}

const retA1 = getSecond1(a); // number
const retB1 = getSecond1(b); // string

// Here we are creating a generic type called Box
type Box<T> = {
  value: T;
};

// Now we can use this Box type to create a Box of any type
const box = { value: "hello" } as Box<string>;
console.log(box.value); // hello

// We can also use it with other types
const box1 = { value: 10 } as Box<number>;
console.log(box1.value); // 10

// We can also use it with objects
const box2 = { value: { name: "Kyle" } } as Box<{ name: string }>;

// We can also use it with arrays
const box3 = { value: [1, 2, 3] } as Box<number[]>;

// We can also use it with functions
const box4 = { value: () => console.log("Hello") } as Box<() => void>;

// We can also use it with classes

class Person<T> {
  constructor(public name: T) {}
}

const person = new Person("Kyle");

console.log(person.name); // Kyle

// Another generic type is the Map type or Set type

const setA = new Set<string>();
setA.add("hello");
// setA.add(22); // ERROR: Argument of type '22' is not assignable to parameter of type 'string'.

// In the case of Map
const mapA = new Map<string, number>(); // Map<string, number>
// it takes two generic types, the first one is the key type and the second one is the value type

mapA.set("hello", 10);

// we can also set default values
const mapB = new Map([["hello", 10]]);

mapB.set("world", 20);

// Let's see how we can set this inside of types

// Here we are creating a generic
type APIResponse<TData> = {
  data: TData;
  isError: boolean;
};

// Here we are creating a generic type called APIResponse that takes a type TData
type UserResponse = APIResponse<{ name: string; age: number }>;
type BlogResponse = APIResponse<{ title: string }>;

// Now we can use this UserResponse type to create a response object
const response: UserResponse = {
  data: {
    name: "Kyle",
    age: 28,
  },
  isError: false,
};

// We can also use it with BlogResponse
const response1: BlogResponse = {
  data: {
    title: "My Blog",
  },
  isError: false,
};

// What if we have to set a default value for our response
// We can do this by setting a default value for our generic type
type APIResponse1<TData = { status: number }> = {
  data: TData;
  isError: boolean;
};

const response2: APIResponse1 = {
  data: {
    status: 200,
  },
  isError: false,
};

// we can also make use of extends keyword to set a default value
type APIResponse2<TData extends object = { status: number }> = {
  data: TData;
  isError: boolean;
};

const response3: APIResponse2 = {
  data: {
    status: 200,
  },
  isError: false,
};

// we can do this with an array as well
type APIResponse3<TData> = {
  data: TData;
  isError: boolean;
};

const response4: APIResponse3<Array<number>> = {
  data: [1, 2, 3],
  isError: false,
};

// We can also use generics with functions

const arr1: [string, number | boolean][] = [
  ["keyOne", 1],
  ["keyTwo", 2],
  ["keyThree", 3],
];

// we want to convert this array to an object
function aTo0<T>(array: [string, T][]) {
  const obj: { [index: string]: T } = {};
  array.forEach(([key, value]) => {
    obj[key] = value;
  });
  return obj;
}

const obj2 = aTo0(arr1); // { keyOne: 1, keyTwo: 2, keyThree: 3 }
