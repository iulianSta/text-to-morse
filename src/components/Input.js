// Import useState from "react"
import { useState } from "react";

// Input function
const Input = (props) => {
  const [userInput, setUserInput] = useState("");
  //   console.log(userInput);
  function handleChange(e) {
    e.preventDefault();
  }
  return (
    <form>
      <textarea onChange={handleChange} />

      {/* <input type="text" value={userInput} onChange={handleChange} /> */}
    </form>
  );
};

// Export default Input
export default Input;
