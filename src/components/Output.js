// Import useState from react
import { useState } from "react";
import code from "../data";

// Output function

const Output = ({ codedText }) => {
  return (
    <form>
      <textarea type="text" value={codedText} />
      {/* <p>{codedText}</p>
      <button type="button" onClick={translateText}>
        OK
      </button> */}
    </form>
  );
};

// Export default Output
export default Output;
