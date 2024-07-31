// Discriminated Union in Typescript is a pattern that allows you to narrow down
// the type of a variable based on the value of a property.

// Syntax
interface Interface1 {
  kind: "Interface1";
  prop1: string;
}

interface Interface2 {
  kind: "Interface2";
  prop2: number;
}

type MyType = Interface1 | Interface2;

function func(obj: MyType) {
  if (obj.kind === "Interface1") {
    console.log(obj.prop1);
  } else {
    console.log(obj.prop2);
  }
}

// Example

type SuccessResponse = {
  status: "success";
  data: { id: string; name: string };
};

type ErrorResponse = {
  status: "Error";
  errorMessage: string;
};

type UserApiResponse = SuccessResponse | ErrorResponse;

function handleResponse(response: UserApiResponse) {
  if (response.status === "Error") {
    console.log(response.errorMessage.length);
  } else {
    console.log(response.data.name);
  }
}
