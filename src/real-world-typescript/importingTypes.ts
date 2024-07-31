// Importing types from other files

import { Person } from "../basicTypes/types-vs-interface";
// The above line shows that we can import types from other files.

import { addDays } from "date-fns";

addDays(new Date(), 1); // returns tomorrow's date

// The Types also can be imported from the libraries.

// In case types are not available in the library we can install the types separately using the below command.
// npm install --save-dev @types/date-fns
// This will install the types for the library date-fns.
