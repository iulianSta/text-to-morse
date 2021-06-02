// Import useState from "react"
import React from "react";

// Input function
const Input = ({ handleInput, translateText }) => {
  return (
    <form>
      <textarea type="text" onChange={handleInput} onKeyUp={translateText} />
    </form>
  );
};

// Export default Input
export default Input;
