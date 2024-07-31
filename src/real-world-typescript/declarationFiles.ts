import { times } from "lodash";

times(4); // [0, 1, 2, 3]

// The above code will not work because the types for the library lodash are not available.

// To fix this we can create a declaration file for the library lodash.
// The declaration file should have the same name as the library with the extension .d.ts
// The declaration file should be placed in the root of the project.

// The declaration file for lodash will look like this:
// declare module "lodash" {
//   export function times(n: number): number[];
// }

// Now the code will work as expected.

console.superLog();
