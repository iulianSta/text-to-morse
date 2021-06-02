// Import useState from "react"
import { useState } from "react";

// Import Header
import Header from "./components/Header";

// Import Input
import Input from "./components/Input";

//Import Output
import Output from "./components/Output";

// Import data.json
import Data from "./data.json";

// App function
function App() {
  const [userInput, setUserInput] = useState("");
  const [info, setInfo] = useState(Data);
  return (
    <div className="App">
      <Header />
      <Input userInput={userInput} />
      {/* <Output /> */}
    </div>
  );
}

export default App;
