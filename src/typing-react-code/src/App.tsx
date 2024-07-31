import { useState, useRef, useReducer, createContext, useContext } from "react";
import "./App.css";
import { Child } from "./Child";
import List from "./List";

type State = {
  count: number;
};

type User = {
  id: number;
  name: string;
};

type Action = { type: "increment" } | { type: "decrement" };

const initialState: State = { count: 0 };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

const CounterContext = createContext<{
  state: State;
  dispatch: React.Dispatch<Action>;
}>({ state: initialState, dispatch: () => null });

function App() {
  const [value, setValue] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const [state, dispatch] = useReducer(reducer, initialState);

  const users: User[] = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" },
  ];

  const handleButtonClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <CounterContext.Provider value={{ state, dispatch }}>
      <Child age={10} name="Kyle">
        Hello World!
      </Child>
      <div>
        <input
          ref={inputRef}
          type="text"
          value={value || ""}
          onChange={(e) => setValue(e.target.value)}
        />
        <button onClick={handleButtonClick}>Focus Input</button>
      </div>
      <List items={users} renderItem={(user) => <>{user.name}</>} />
      <Counter />
    </CounterContext.Provider>
  );
}

function Counter() {
  const { state, dispatch } = useContext(CounterContext);

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
      <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
    </div>
  );
}

export default App;
