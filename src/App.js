// Import useState from "react"
// import { useState } from "react";

// Import Header
import Header from "./components/Header";

// import Input
import Input from "./components/Input";

// App function
function App() {
  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <div className="App">
      <Header />
      <Input />
      <textarea onChange={handleSubmit} />
    </div>
  );
}

export default App;
