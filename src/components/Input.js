// Import useState from "react"
// import { useState } from "react";

// Input function
const Input = (props) => {
  function handleChange(e) {
    e.preventDefault();
  }
  return (
    <form>
      <textarea type="text" onChange={handleChange} />
    </form>
  );
};

// Export default Input
export default Input;
