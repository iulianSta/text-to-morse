// Output function

const Output = ({ userInput, Data }) => {
  const translateText = (userInput) => {
    console.log(userInput.value);
    const code = {
      a: ".-",
      b: "-...",
      c: "-.-.",
      d: "-..",
    };

    for (let i = 0; i < userInput.length; i++) {
      let morseCode = "";
      morseCode += code[userInput[i].toLowerCase()];
    }
  };

  return (
    <form>
      <textarea type="text" onKeyUp={translateText} />
    </form>
  );
};

// Export default Output
export default Output;
