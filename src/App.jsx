import React, { useState } from "react";
import Header from "./Header";
import Meme from "./Meme";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="max-w-xl bg-white max-h-550px">
      <Header />
      <Meme />
    </div>
  );
}

export default App;
