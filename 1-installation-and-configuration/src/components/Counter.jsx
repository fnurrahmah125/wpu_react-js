/* eslint-disable react/prop-types */
function Counter({ counter }) {
  const myText = counter > 10 || counter < 0 ? "Done!" : counter;

  return <span>{myText}</span>;
}

export default Counter;
