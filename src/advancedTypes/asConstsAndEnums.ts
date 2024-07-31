// When we use Const to  define a value, TS adds as const keyword at the end of our value
// Which tells TS that it's a constant value that never changes

// We can apply the same to a let variable and it would behave as a const
let a = 1 as const;

// a = 2 // Type '2' is not assignable to type '1'.

// We can use this with Objects and Arrays

const nums = ["1", "2", "3"]; // const nums: string[]

// However when we add as const we get a immutable readonly array

const nums1 = ["1", "2", "3"] as const; // const nums1: readonly ["1", "2", "3"]

// nums1.push("4"); // Property 'push' does not exist on type 'readonly ["1", "2", "3"]'.

// The above method can be really usefull in creating ENUMS

type Person = {
  skillLevel: "Beginer" | "Intermediate" | "Expert";
};

// skillLevels.forEach(skillLevel => {
//     console.log(`skillLevel is ${skillLevel}`)
// })
// ERROR: Cannot find name 'skillLevels'.

// To handle this we can have a enum

const SKILL_LEVELS = ["Beginer", "Intermediate", "Expert"] as const; //readonly ["Beginer", "Intermediate", "Expert"]

// now we can use it in our function below

SKILL_LEVELS.forEach((skillLevel) => {
  console.log(`skillLevel is ${skillLevel}`);
});

// Also we can now use it in our Person type to define the skillLevel type

type Person1 = {
  skillLevel: (typeof SKILL_LEVELS)[number];
};

//--------------------------------------------------------------------------------------------------------------------------------------------

// Using as const with Objects

const personObj = {
  name: "Kyle",
  age: 28,
  address: {
    street: "Main St",
  },
} as const;

// now all the properties are readonly and the object is immutable

// const personObj: {
//     readonly name: "Kyle";
//     readonly age: 28;
//     readonly address: {
//         readonly street: "Main St";
//     };
// }
