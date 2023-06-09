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

interface Props extends ButtonProps {
  text: string;
  disableElevation: boolean; // Define the disableElevation prop with type boolean
  size: keyof typeof height; // Reference the keys of the height constant
}

function PxlButton(props: Props) {
  const { text, size, disableElevation, ...rest } = props;
  const heightValue = height[size];

  return (
    <Button
      style={{ height: heightValue }}
      {...rest}
      disableElevation={disableElevation}
    >
      {text}
    </Button>
  );
}

export default PxlButton;
