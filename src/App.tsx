import React from "react";
import { GlobalStyles } from "./styles/global";
import { Header } from "./components/Header";
import { Dashboard } from "./components/Dashboard";

function App() {
  return (
    <>
      <Header />
      <Dashboard />
      <GlobalStyles />
    </>
  );
}

export default App;
