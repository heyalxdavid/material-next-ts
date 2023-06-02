import * as React from "react";
import { useState } from "react";

import Typography from "@mui/material/Typography";
import Paper from "@mui/material";
import { Box, Container } from "@mui/material";

import PxlButton from "../src/components/PxlButton";
import PxlTextField from "../src/components/PxlTextField";

export default function Logo() {
  return (
    <Container sx={{ padding: "20px" }}>
      <Box>
        <PxlTextField></PxlTextField>
        <PxlTextField></PxlTextField>
      </Box>

      <Box>
        <PxlButton
          sx={{ width: "100%" }}
          size="large"
          text="Continue"
          disableElevation={true}
          variant="contained"
          color="primary"
        />
      </Box>
    </Container>
  );
}
