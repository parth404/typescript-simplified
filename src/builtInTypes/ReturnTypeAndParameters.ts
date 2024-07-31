// Return type and parameters
// The ReturnType utility type is used to get the return type of a function.
// It takes a function type as a parameter and returns the return type of the function.

// Below is an example showing a function that check length of a string and returns a boolean

function CheckLength(a: string, n: number) {
  return a.length > n;
}

type ReturnCheckLength = ReturnType<typeof CheckLength>; // boolean

// In the above example, the ReturnType utility type is used to get the return type of the CheckLength function.

type Func = () => void;

// We can use this instead of using typeof to get the return type of a function
type ReturnFunc = ReturnType<Func>; // void

// The Parameters utility type is used to get the parameters of a function.

type Params = Parameters<typeof CheckLength>; // [string, number]

// Example 1: Complex Function with Nested Types

interface User {
  id: number;
  name: string;
  email: string;
}

function getUserInfo(userId: number): User {
  return {
    id: userId,
    name: "John Doe",
    email: "john.doe@example.com",
  };
}

type ReturnUserInfo = ReturnType<typeof getUserInfo>; // User
type ParamsUserInfo = Parameters<typeof getUserInfo>; // [number]

const userInfo: ReturnUserInfo = getUserInfo(1);
const userParams: ParamsUserInfo = [1];

// Example 2: Function with Multiple Parameters and Complex Return Type

interface Product {
  id: number;
  name: string;
  price: number;
}

function calculateTotal(
  products: Product[],
  discount: number
): { total: number; discountedTotal: number } {
  const total = products.reduce((sum, product) => sum + product.price, 0);
  const discountedTotal = total - discount;
  return { total, discountedTotal };
}

type ReturnCalculateTotal = ReturnType<typeof calculateTotal>; // { total: number; discountedTotal: number }
type ParamsCalculateTotal = Parameters<typeof calculateTotal>; // [Product[], number]

const products: Product[] = [
  { id: 1, name: "Laptop", price: 1000 },
  { id: 2, name: "Mouse", price: 50 },
];

const totalInfo: ReturnCalculateTotal = calculateTotal(products, 100);
const totalParams: ParamsCalculateTotal = [products, 100];

// Example 3: Function with Optional Parameters and Union Return Type

type Status = "success" | "error";

function fetchData(
  url: string,
  timeout?: number
): Promise<{ status: Status; data?: any; error?: string }> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        status: "success",
        data: { message: "Data fetched successfully" },
      });
    }, timeout || 1000);
  });
}

type ReturnFetchData = ReturnType<typeof fetchData>; // Promise<{ status: Status; data?: any; error?: string }>
type ParamsFetchData = Parameters<typeof fetchData>; // [string, (number | undefined)?]

const fetchDataPromise: ReturnFetchData = fetchData(
  "https://api.example.com",
  500
);
const fetchDataParams: ParamsFetchData = ["https://api.example.com", 500];
