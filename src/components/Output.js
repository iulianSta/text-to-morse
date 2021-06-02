// Output function

const Output = ({ userInput, Data }) => {
  const translateText = (inputText) => {
    const code = Data.map((obj) => {
      const { char, code } = obj;
      console.log(obj);
      let morseCode = "";
      for (let i = 0; i < inputText.length; i++) {
        if (inputText === char) morseCode += code[inputText[i].toLowerCase()];
      }
    });
  };
  return (
    <form>
      <textarea type="text" onKeyUp={translateText} />
    </form>
  );
};

// Export default Output
export default Output;
