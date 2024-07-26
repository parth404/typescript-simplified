// Using Type Alias
export type Address = {
  street: string;
  city: string;
  country: string;
};

export type Person = {
  name: string;
  age: number;
  hobbies: string[];
  address: Address;
};

// Using Interface
export interface IAddress {
  street: string;
  city: string;
  country: string;
}

export interface IPerson {
  name: string;
  age: number;
  hobbies: string[];
  address: IAddress;
}

// Example usage
const person1: Person = {
  name: "Alice",
  age: 30,
  hobbies: ["reading", "hiking"],
  address: {
    street: "123 Main St",
    city: "Anytown",
    country: "USA",
  },
};

const person2: IPerson = {
  name: "Bob",
  age: 35,
  hobbies: ["gaming", "cooking"],
  address: {
    street: "789 Oak St",
    city: "Elsewhere",
    country: "UK",
  },
};
