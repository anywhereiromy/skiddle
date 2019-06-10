import React from "react";
import "./App.css";
import Header from "./components/Header";
import Routes from "./Routes";

const App = props => {
  // const apiSlug = "https://www.skiddle.com/api/v1";
  return (
    <div className="App">
      <Header {...props} />
      <Routes {...props} />
    </div>
  );
};

export default App;
