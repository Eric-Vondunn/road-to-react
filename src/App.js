import React from "react";
import "./App.css";

function App() {
  //add JS

  //object example
  // const welcome = {
  //   greeting: "Hey",
  //   title: "React",
  // };

  //function example
  function getTitle(title) {
    return title;
  }

  return (
    <div className="App">
      <h1>
        {/* {welcome.greeting} {welcome.title}{" "} */}
        Hello {getTitle("React")}
      </h1>

      <label htmlFor="search">Search:</label>
      <input id="search" type="text" />
    </div>
  );
}

export default App;
