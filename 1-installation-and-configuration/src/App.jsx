/* eslint-disable react/prop-types */
import { useState } from "react";
import Header from "./components/Header";
import Button from "./components/Button";
import Counter from "./components/Counter";

function App() {
  const [likes, setLikes] = useState(0);
  const [counter, setCounter] = useState(0);

  function handleClick() {
    setLikes(likes + 1);
  }

  function increment() {
    setCounter(counter + 1);
  }

  function decrement() {
    setCounter(counter - 1);
  }

  function reset() {
    setCounter(0);
  }

  return (
    <>
      <Header author="Web Programming Unpas" />

      <button onClick={handleClick}>Like ({likes})</button>

      <div className="counter">
        <Button text={"-"} onClick={decrement} counter={counter} />
        <Counter counter={counter} />
        <Button text={"+"} onClick={increment} counter={counter} />
        <Button text={"Reset"} onClick={reset} counter={counter} />
      </div>
    </>
  );
}

export default App;
