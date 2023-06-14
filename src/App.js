import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header.js";
import Map from "./components/Map/Map.js";
import Navbar from "./components/Navbar/Navbar.js";

function App() {
  const [search, setSearch] = useState()
  const changeSearch = (value) => {
    setSearch(value)
  }
  
  return (
    <div dir="rtl">
      <Header />
      <div style={{ display: "flex", flexDirection: "row" }}>
        <Navbar changeSearch={changeSearch}/>
        <Map search={search}/>
      </div>
    </div>
  );
}

export default App;
