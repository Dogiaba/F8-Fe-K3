import RangeNumber from "./components/CountNumber";
import DarkMode from "./components/DarkMode";
import TableHis from "./components/TableHis";
import "../src/App.css";
import useLocalStorage from "use-local-storage"
import { useState } from "react";

function App() {
  //system preferences
  const preference = window.matchMedia("(prefers-color-scheme: dark)").matches;
  // const [isDark, setIsdark] = useLocalStorage(useState(false));
  const [isDark, setIsDark] = useLocalStorage("isDark", preference);
  return (
    <div className="App" data-theme={isDark ? "dark" : "light"}>
      <RangeNumber />
      <DarkMode isChecked={isDark} handleChange={() => setIsDark(!isDark)} />
      <TableHis />
    </div>
  );
}

export default App;
