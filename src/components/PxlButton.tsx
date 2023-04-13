import * as React from "react";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import { Box, Button } from "@mui/material";
import { text } from "stream/consumers";

interface Props {
  text: string;
  disableElevation: boolean; // Define the disableElevation prop with type boolean
}

// export default function PxlButton() {
//   return (
//     <Button variant="contained" disableElevation>
//       I am button
//     </Button>
//   );
// }

const PxlButton: React.FC<Props> = ({ text, disableElevation }) => {
  return (
    <Button variant="contained" disableElevation={disableElevation}>
      {text}
    </Button>
  );
};

export default PxlButton;
