// Import useState from "react"
import { useState } from "react";

// Import Switch
// import Switch from "./components/Switch";

// Import Header
import Header from "./components/Header";

// Import Input
import Input from "./components/Input";

//Import Output
import Output from "./components/Output";

// Import data.js
import code from "./data";

// App function
function App() {
  const [userInput, setUserInput] = useState("");
  const [codedText, setCodedText] = useState("");

  function handleInput(e) {
    const { value } = e.target;
    setUserInput(value);
  }

  let morseCode = "";

  const translateText = () => {
    for (let letter of userInput) {
      morseCode += code[letter.toLowerCase()];
    }
    setCodedText(morseCode);
  };

  return (
    <div className="App">
      <Header />
      <Input
        userInput={userInput}
        handleInput={handleInput}
        translateText={translateText}
      />
      <Output codedText={codedText} translateText={translateText} />
    </div>
  );
}

export default App;
