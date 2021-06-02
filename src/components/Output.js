import code from "../data";

// Output function

const Output = (value) => {
  const translateText = (value) => {
    let morseCode = "";

    for (let i = 0; i < value.length; i++) {
      morseCode += code[value[i].toLowerCase()];
    }
    return morseCode;
  };

  return (
    <form>
      <textarea type="text" onKeyUp={translateText} />
    </form>
  );
};

// Export default Output
export default Output;
