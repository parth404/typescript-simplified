// Tuples is just taking an array of values but saying that this array of values
// is going to be specifically the first value is one type, second value is
// another type, third value is another type and so on.

// In JavaScript, Object.entries method can be used an example where a simillar thing is achieved

const employee = {
  name: "adam",
  age: 28,
};

// This actually returns to us a Tuple
Object.entries(employee).forEach(([key, value]) => {
  console.log(key, value);
});

type Tuple = [string, boolean];

const a: Tuple = ["Kyle", true];

// This is usefull in a lot of cases
// In react, the useState hook returns a Tuple where the first value
// is our state and second value is the updater for our state function.
