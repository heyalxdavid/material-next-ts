import React from "react";

import { TextField } from "@mui/material";

const PxlTextField = () => {
  const textFieldStyle = {
    height: "20px",
    padding: "20px",
  };

  return (
    <TextField
      sx={{ height: "400px" }}
      id="outlined-basic"
      label="Custom"
      variant="outlined"
    ></TextField>
  );
};

export default PxlTextField;
