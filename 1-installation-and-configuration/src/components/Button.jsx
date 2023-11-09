/* eslint-disable react/prop-types */
function Button({ text, onClick, counter }) {
  const myStyle = text !== "Reset" ? {} : { margin: "auto", display: "block" };

  if (text == "Reset") {
    if (counter < 0 || counter > 10) {
      return (
        <button onClick={onClick} style={myStyle}>
          {text}
        </button>
      );
    } else {
      return (
        <button onClick={onClick} style={myStyle} disabled>
          {text}
        </button>
      );
    }
  }

  if (text == "-") {
    if (counter < 0) {
      return (
        <button onClick={onClick} style={myStyle} disabled>
          {text}
        </button>
      );
    } else {
      return (
        <button onClick={onClick} style={myStyle}>
          {text}
        </button>
      );
    }
  }

  if (text == "+") {
    if (counter > 10) {
      return (
        <button onClick={onClick} style={myStyle} disabled>
          {text}
        </button>
      );
    } else {
      return (
        <button onClick={onClick} style={myStyle}>
          {text}
        </button>
      );
    }
  }
}

export default Button;
