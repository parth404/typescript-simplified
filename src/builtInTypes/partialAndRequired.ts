// Partial and Required are two utility types provided by TypeScript.
// They are used to create new types by making all properties of an existing type optional or required.
// These utility types are useful when you want to create a new type by making some properties optional or required.

type Todo = {
  title?: string;
  completed: boolean;
  address?: {
    street?: string;
  };
};

// The Partial utility type makes all properties of a type optional.

type FormTodo = Partial<Todo>; // { title?: string; completed?: boolean; }

// The Required utility type makes all properties of a type required.

type RequiredTodo = Required<Todo>;

//type RequiredTodo = {
//     title: string;
//     completed: boolean;
//     address: {
//         street?: string;
//     };
// }

// street property is still optional because it is optional in the original type Todo.

// What if we want to modify the type such that only the title is required
// We can use the Pick utility type to create a new type by picking some properties from an existing type.

type RequiredAddress = Required<Pick<Todo, "title">>; // { title: string; }

type FormTodo1 = Required<Pick<Todo, "title">> & Omit<Todo, "title">; // { title: string; completed?: boolean; address?: { street?: string; }; }

// The FormTodo1 type makes the title property required and keeps the completed and address properties optional.

// required properties always override optional properties

type RequiredPick<T, Key extends keyof T> = Required<Pick<T, Key>> & T;
type PartialPick<T, Key extends keyof T> = Partial<Pick<T, Key>> & Omit<T, Key>;

type FormTodo2 = RequiredPick<Todo, "title">; // { title: string; completed?: boolean; address?: { street?: string; }; }
type FormTodo3 = PartialPick<Todo, "title">; // { title?: string; completed: boolean; address?: { street?: string; }; }

const todo: FormTodo3 = {
  completed: false,
};

// Example 1 - Complex User Profile

interface UserProfile {
  id: number;
  name: string;
  email: string;
  address?: {
    street?: string;
    city?: string;
    country?: string;
  };
  phone?: string;
}

// Make only the 'name' and 'email' properties required
type RequiredNameEmail = Required<Pick<UserProfile, "name" | "email">> &
  Omit<UserProfile, "name" | "email">;

const user1: RequiredNameEmail = {
  id: 1,
  name: "John Doe",
  email: "john.doe@example.com",
  address: {
    city: "New York",
  },
};

// Make the 'address' property partially optional
type PartialAddress = Partial<Pick<UserProfile, "address">> &
  Omit<UserProfile, "address">;

const user2: PartialAddress = {
  id: 2,
  name: "Jane Doe",
  email: "jane.doe@example.com",
  address: {
    street: "123 Main St",
  },
};

// Example 2: Product Inventory
interface Product {
  id: number;
  name: string;
  description?: string;
  price: number;
  stock?: number;
}

// Make 'description' and 'stock' properties required
type RequiredDescriptionStock = Required<
  Pick<Product, "description" | "stock">
> &
  Omit<Product, "description" | "stock">;

const product1: RequiredDescriptionStock = {
  id: 101,
  name: "Laptop",
  description: "High-end gaming laptop",
  price: 1500,
  stock: 20,
};

// Make 'price' property optional
type PartialPrice = Partial<Pick<Product, "price">> & Omit<Product, "price">;

const product2: PartialPrice = {
  id: 102,
  name: "Mouse",
  description: "Wireless mouse",
  stock: 50,
};

// Example 3: Order management
interface Order {
  orderId: number;
  customerName: string;
  items: {
    productId: number;
    quantity: number;
  }[];
  totalAmount?: number;
  status?: "pending" | "shipped" | "delivered";
}

// Make 'totalAmount' and 'status' properties required
type RequiredAmountStatus = Required<Pick<Order, "totalAmount" | "status">> &
  Omit<Order, "totalAmount" | "status">;

const order1: RequiredAmountStatus = {
  orderId: 1001,
  customerName: "Alice",
  items: [
    { productId: 1, quantity: 2 },
    { productId: 2, quantity: 1 },
  ],
  totalAmount: 300,
  status: "pending",
};

// Make 'items' property optional
type PartialItems = Partial<Pick<Order, "items">> & Omit<Order, "items">;

const order2: PartialItems = {
  orderId: 1002,
  customerName: "Bob",
  totalAmount: 150,
  status: "shipped",
};
