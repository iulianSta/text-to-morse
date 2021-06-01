// Import useState from "react"
import { useState } from "react";

// Import Header
import Header from "./components/Header";

// import Input
import Input from "./components/Input";

// App function
function App() {
  return (
    <div className="App">
      <Header />
      <Input userInput={userInput} />
    </div>
  );
}

export default App;
