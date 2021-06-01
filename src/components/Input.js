// Import useState from "react"
import { useState } from "react";

// Input function
const Input = (props) => {
  const [userInput, setUserInput] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    if (userInput.length) {
      console.log(userInput);
      userInput.trim();
      setUserInput("");
    }
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={userInput} />
      </form>
    </div>
  );
};

// Export default Input
export default Input;
