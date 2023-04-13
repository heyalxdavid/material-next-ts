import * as React from "react";

import Typography from "@mui/material/Typography";

import Link from "../src/components/Link";
import ProTip from "../src/components/ProTip";
import Copyright from "../src/components/Copyright";

import { Container, Button, Box } from "@mui/material";

import PxlButton from "../src/components/PxlButton";

export default function Playground() {
  return (
    <Container>
      <Box>
        <PxlButton text="I am a themed button" disableElevation={true} />
      </Box>
    </Container>
  );
}
