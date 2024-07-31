// Debugging in Typescript

type Options = {
  debug: boolean;
  format: {
    tabs: boolean;
    tabWidth: number;
  };
};

function printNumber(num: number, options?: Options) {
  console.log(num);
}

// @ts-expect-error // Ignore the error
printNumber(10, { debug: true, format: { tabs: true } }); // 10
