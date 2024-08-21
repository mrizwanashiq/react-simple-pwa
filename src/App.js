import React from "react";

import "./App.css";
const App = () => {
  const [count, setCount] = React.useState(0);

  return (
    <div className="main-container">
      {/* a simle screen showing data */}
      <h1 style={{ color: count > 0 ? "green" : count < 0 ? "red" : "white" }}>
        Counter App
      </h1>
      <h2 style={{ color: count > 0 ? "green" : count < 0 ? "red" : "white" }}>
        {count}
      </h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
};

export default App;
