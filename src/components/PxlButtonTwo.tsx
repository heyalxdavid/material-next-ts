import * as React from "react";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import { Box, Button, ButtonProps } from "@mui/material";
import { text } from "stream/consumers";

// Declare a constant for height with different values for small, medium, and large sizes
const height = {
  small: "32px",
  medium: "40px",
  large: "48px",
};

interface Props {
  text: string;
  disableElevation: boolean; // Define the disableElevation prop with type boolean
  size: keyof typeof height;
}

const PxlButton: React.FC<Props> = ({
  text,
  disableElevation,
  size,
  ...rest
}) => {
  return (
    <Button
      size={size}
      {...rest}
      variant="contained"
      disableElevation={disableElevation}
    >
      {text}
    </Button>
  );
};

export default PxlButton;
