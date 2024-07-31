// Satisfies is a type guard that checks if a value satisfies a type predicate.
// This type guard is useful when you want to check if a value satisfies a specific condition.

// Syntax
// function isType(variable: any): variable is Type {}

// Example

type Todo = {
  title: string;
  isCompleted: boolean;
  dueDate: string | Date;
};

const todo: Todo = {
  title: "Buy groceries",
  isCompleted: false,
  dueDate: new Date(),
};

// todo.dueDate.setDate(4);
// Property 'setDate' does not exist on type 'string | Date'.
// Property 'setDate' does not exist on type 'string'.

// To resolve this error, we can create a type guard that checks if the value is a Date object.

const todo1 = {
  title: "Buy groceries",
  isCompleted: false,
  dueDate: new Date(),
} satisfies Todo;

todo1.dueDate.setDate(4);
