// The Never type in typescript represents the type of values that never occur.
// For example, a function that throws an error or never returns a value.

// Example
function throwError(message: string): never {
  throw new Error(message);
}

function fail() {
  return throwError("Something went wrong");
}

// In the above example, the throwError function throws an error, so it never returns a value.

// The never type is used in switch statements to ensure that all possible cases are covered.

// Example
type Todo = {
  title: string;
  priority: "high" | "medium" | "low";
  isCompleted: boolean;
  description?: string;
  dueDate: Date | string;
};

function extendTodo(todo: Todo) {
  switch (todo.priority) {
    case "high":
      console.log("High priority task");
      break;
    case "medium":
      console.log("Medium priority task");
      break;
    case "low":
      console.log("Low priority task");
      break;
    default:
      const exhaustiveCheck: never = todo.priority;
  }
}

// In the above example, the default case in the switch statement ensures that all possible cases are covered.
// If a new priority value is added to the Todo type, the compiler will throw an error because the switch statement is not exhaustive.
// The never type is used to handle such cases.
