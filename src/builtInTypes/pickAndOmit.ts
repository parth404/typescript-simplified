// Pick and Omit are two utility types that are used to create new types by picking
// some properties from an existing type and omitting some properties from an existing type.

type Todo = {
  id: string;
  name: string;
  completed: boolean;
};

type NewTodo = {
  name: string;
  completed: boolean;
};

// function saveTodo(todo:NewTodo): Todo{
//     todo.id = crypto.randomUUID();
//     return todo;  // Property 'id' is missing in type 'NewTodo' but required in type 'Todo'.
// }

// The above code will throw an error because the id property is missing in the NewTodo type.

// We can use the Pick utility type to create a new type by picking some properties from an existing type.

function saveTodo(todo: Pick<Todo, "name" | "completed">): Todo {
  const id = crypto.randomUUID();
  return {
    id,
    ...todo,
  };
}

// we can also change the type NewTodo using Pick
type NewTodo1 = Pick<Todo, "name" | "completed">;

// We can use the Omit utility type to create a new type by omitting some properties from an existing type.

type TodoPreview = Omit<Todo, "completed">;

function renderTodo(todo: Todo) {
  const div = document.createElement("div");
  div.id;
}

// Let's assume we had a Person type

type Person = {
  id: string;
  address: {};
  name: string;
  age: number;
};

// We can create a new type SimplePerson by picking the name and age properties from the Person type.
type SimplePerson = Pick<Person, "name" | "age">;
