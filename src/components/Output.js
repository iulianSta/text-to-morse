// Output function

const Output = ({ userInput, Data }) => {
  //   const translateText = (userInput) => {
  //     console.log(userInput.value);
  //     const code = {
  //       a: ".-",
  //       b: "-...",
  //       c: "-.-.",
  //       d: "-..",
  //     };
  //     let morseCode = "";
  //     for (let i = 0; i < userInput.length; i++) {
  //       morseCode += code[userInput[i].toLowerCase()];
  //     }
  //   };

  const translateText = (text) =>
    text
      .split("")
      .map((char) => {
        const entry = Data.find(
          (morse) => morse.char.toLowerCase() === char.toLowerCase()
        );
        return entry ? entry.code : "";
      })
      .join(" ");

  return (
    <form>
      <textarea type="text" onKeyUp={translateText} />
    </form>
  );
};

// Export default Output
export default Output;
