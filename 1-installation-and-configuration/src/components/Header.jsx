/* eslint-disable react/prop-types */
function Header({ author }) {
  return <h1>Learn React with {author ? author : "WPU"} 🚀</h1>;
}

export default Header;
