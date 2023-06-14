import React, { useState } from "react";
import "../Navbar/Navbar.css";
import { Button, TextField, Typography } from "@mui/material";
function Navbar({ changeSearch }) {
  const [search, setSearch] = useState("");
  return (
    <div className="Navbar">
      <Typography className="searchHeader">חיפוש</Typography>
      <TextField
        autoComplete="off"
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
      <Button className="searchButton" onClick={() => changeSearch(search)}>
        חפש
      </Button>
    </div>
  );
}

export default Navbar;
