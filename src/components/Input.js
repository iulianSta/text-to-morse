// Import useState from "react"
import { useState } from "react";

// Input function
const Input = (props) => {
  const [userInput, setUserInput] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    // if (userInput.length) {
    //   props.setChar((prevState) => [...prevState, { text: userInput.trim() }]);
    //   setUserInput("");
    //}
  }
  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input type="text" value={userInput} />
      </label>
    </form>
  );
};

// Export default Input
export default Input;
