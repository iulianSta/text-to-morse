// Import useState from "react"
import { useState } from "react";

// Import Header
import Header from "./components/Header";

// import Input
import Input from "./components/Input";

// App function
function App() {
  const [char, setChar] = useState("");

  return (
    <div className="App">
      <Header />
      <Input />
    </div>
  );
}

export default App;
