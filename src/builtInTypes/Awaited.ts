// Awaited type is a utility type that returns the type being awaited by a Promise.
// The Awaited type is useful when you want to get the type of the value that a Promise resolves to.

type Awaited<T> = T extends Promise<infer U> ? U : T;

// Example 1: Using Awaited with a Promise

const promise1 = Promise.resolve(10);

type Result1 = Awaited<typeof promise1>; // number

// In the above example, the Awaited utility type is used to get the type of the value that the promise1 resolves to.

// Example 2: Using Awaited with a Non-Promise Type

type Result2 = Awaited<number>; // number

// In this example, the Awaited utility type returns the same type since the input type is not a Promise.

// Example 3: Using Awaited with a Function

function fetchData(): Promise<string> {
  return Promise.resolve("Data");
}

type Result3 = Awaited<ReturnType<typeof fetchData>>; // string

// In this example, the Awaited utility type is used to get the type of the value that the fetchData function returns.

// Example 4: Using Awaited with a Union Type

type Data = Promise<string> | number;

type Result4 = Awaited<Data>; // string | number

// In this example, the Awaited utility type returns the union of the types that the input type resolves to.

// Example 5: Using Awaited with a Nested Promise

const promise2 = Promise.resolve(Promise.resolve("Nested Data"));

type Result5 = Awaited<typeof promise2>; // string

// In this example, the Awaited utility type is used to get the type of the value that the nested promise resolves to.

// Example 6: Using Awaited with a Union of Promises

type DataUnion = Promise<string> | Promise<number>;

type Result6 = Awaited<DataUnion>; // string | number

// In this example, the Awaited utility type returns the union of the types that the input type resolves to.

// Example 7: Using Awaited with a Mixed Type

type MixedData = Promise<string> | number | Promise<boolean>;

type Result7 = Awaited<MixedData>; // string | number | boolean

// In this example, the Awaited utility type returns the union of the types that the input type resolves to.

// Example 8: Using Awaited with a Nested Union of Promises

type NestedData = Promise<Promise<string>> | Promise<number>;

type Result8 = Awaited<NestedData>; // string | number

// In this example, the Awaited utility type is used to get the type of the value that the nested promise resolves to.
