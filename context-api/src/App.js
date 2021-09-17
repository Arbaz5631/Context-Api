import React from "react";
import Component1 from "./Component1";
import Component2 from "./Component2";
import DataContext from "./DataContext"
function App() {
  return (
    <DataContext>
      <div className="App">
        <Component1 />
        <Component2 />
      </div>
    </DataContext>
  );
}

export default App;
