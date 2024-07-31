// functional component that takes props of type ChildProps
interface ChildProps {
  name: string;
  age: number;
  children: React.ReactNode; // children prop can be any React node
}

export function Child({ name, age, children }: ChildProps) {
  // function that takes age  and years and returns age after years
  const ageInYears = (years: number) => {
    return age + years;
  };

  return (
    <div>
      <h1>Name: {name}</h1>
      <h1>Age: {age}</h1>
      <h1>Age (in 10 years): {ageInYears(10)}</h1>
      <p>{children}</p>
    </div>
  );
}
