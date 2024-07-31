// Record is a built-in generic type in TypeScript that is used to represent
// a JavaScript object with keys of type string and values of type any.

// It takes in two type parameters, K and T, where K represents the type of the keys
// and T represents the type of the values in the object.

// The Record utility type is useful when you want to create an object with specific keys and values.

// Here's an example of using the Record utility type:

type Person = {
  name: string;
  age: number;
};

type PersonRecord = Record<string, Person[]>;

const people: PersonRecord = {
  group1: [
    { name: "Alice", age: 30 },
    { name: "Bob", age: 25 },
  ],
  group2: [{ name: "Charlie", age: 35 }],
};

// In the above example, we defined a Person type with name and age properties.
// We then created a PersonRecord type using the Record utility type, where the keys are of type string
// and the values are arrays of Person objects. We then created an object people of type PersonRecord
// with two groups of people.

// Example 1: Nested Record Types
type Address = {
  street: string;
  city: string;
  zipCode: string;
};

type Company = {
  name: string;
  address: Address;
};

type CompanyDirectory = Record<string, Record<string, Company>>;

const directory: CompanyDirectory = {
  Tech: {
    CompanyA: {
      name: "TechCorp",
      address: { street: "123 Tech Lane", city: "Techville", zipCode: "12345" },
    },
    CompanyB: {
      name: "Innovatech",
      address: {
        street: "456 Innovation Drive",
        city: "Innovacity",
        zipCode: "67890",
      },
    },
  },
  Finance: {
    CompanyC: {
      name: "FinCorp",
      address: {
        street: "789 Finance Blvd",
        city: "FinCity",
        zipCode: "11223",
      },
    },
  },
};

// CompanyDirectory is a nested Record type where the outer keys are strings representing industry sectors,
// and the inner keys are strings representing company names. The values are Company objects.

// Example 2: Record with Union Types
type Status = "active" | "inactive" | "pending";

type User = {
  id: number;
  name: string;
  status: Status;
};

type UserStatusRecord = Record<Status, User[]>;

const userStatus: UserStatusRecord = {
  active: [{ id: 1, name: "Alice", status: "active" }],
  inactive: [{ id: 2, name: "Bob", status: "inactive" }],
  pending: [{ id: 3, name: "Charlie", status: "pending" }],
};
// UserStatusRecord is a Record type where the keys are Status union types ("active", "inactive", "pending"),
//  and the values are arrays of User objects.

// Example 3: Record with Function Types
type EventHandler = (event: Event) => void;

type EventHandlers = Record<string, EventHandler>;

const handlers: EventHandlers = {
  click: (event) => {
    console.log("Clicked!", event);
  },
  mouseover: (event) => {
    console.log("Mouse over!", event);
  },
  keydown: (event) => {
    console.log("Key down!", event);
  },
};

// EventHandlers is a Record type where the keys are strings representing event types,
// and the values are EventHandler functions that handle those events.
