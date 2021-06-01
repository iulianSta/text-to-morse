// Import useState from "react"
import { useState } from "react";

// Input function
const Input = (props) => {
  const [userInput, setUserInput] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    if (userInput.length) {
      props.setInput((prevState) => [...prevState, { text: userInput.trim() }]);
      setUserInput("");
    }
  }
  return (
    <label>
      <input type="textarea" value={userInput} onChange={handleSubmit} />
    </label>
  );
};

// Export default Input
export default Input;
