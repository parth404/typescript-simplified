// Example showing index types

// We can use index types to create new types based on the keys of an existing type:

// define a type Person
type Person = {
  name: string;
  age?: number;
  skillLevel: "Beginer" | "Intermediate" | "Expert";
};

const person: Person = { name: "Kyle", skillLevel: "Expert" };

printSkillLevel(person.skillLevel);

function printSkillLevel(skillLevel: Person["skillLevel"]) {
  console.log(skillLevel);
}

// Example: when writing a grouping function to group people by skillLevel

type PeopleGroupedBySkillLevel = {
  [index: string]: Person[];
};

const a: PeopleGroupedBySkillLevel = {
  groupA: [{ name: "Kyle", skillLevel: "Beginer" }],
};

// The above would not work if there was a mismatch in the index type for eg: if it was a number

// type PeopleGroupedBySkillLevel1 = {
//     [index: Person["skillLevel"]]: Person[];
// }
// Error: An index signature parameter type cannot be a literal type or generic type.
// Consider using a mapped object type instead.

type PeopleGroupedBySkillLevel2 = {
  [index in Person["skillLevel"]]: Person[]; // This works as it is a mapped object type
};

// Incase we wanted to map by name
type PeopleGroupedByName = {
  [index: Person["name"]]: Person[]; // This simply declares the type of index to match the type of field Name in Person Type i.e string
};

const arr: (string | boolean)[] = ["sdf", "d", true]; // hard coded approach to define types

type Arr = (typeof arr)[number]; // here the index type is number to access the array and array type is string | boolean

const obj = {
  name: "Kyle",
  age: 28,
  isProgrammer: true,
};
// In the above Object number index doesn't exist unlike in an array

// Here we can declare the index type for the object using keyof

type Obj = (typeof obj)[keyof typeof obj]; // type Obj = string | number | boolean
