import * as React from "react";
import { useState } from "react";

import Typography from "@mui/material/Typography";

import Link from "../src/components/Link";
import ProTip from "../src/components/ProTip";
import Copyright from "../src/components/Copyright";
import RecipeReviewCard from "../src/components/ExpandCard";

import {
  Container,
  Button,
  Box,
  TextField,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Modal,
} from "@mui/material";

import PxlButton from "../src/components/PxlButton";
import PxlTextField from "../src/components/PxlTextField";

export default function Playground() {
  const [open, setOpen] = useState(false); // State to control the modal open/close state

  // Function to handle button click event and open the modal
  function handleButtonClick() {
    setOpen(true);
  }

  // Function to handle modal close event
  function handleClose() {
    setOpen(false);
  }

  return (
    <Container sx={{ padding: "20px" }}>
      <Box>
        <RecipeReviewCard />
      </Box>
      <Box>
        <PxlButton
          size="large"
          text="Sample text"
          disableElevation={true}
          variant="contained"
          color="primary"
          onClick={handleButtonClick}
        />

        {/* Example usage of Material-UI Modal */}
        <Modal
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          open={open}
          onClose={handleClose}
        >
          <Box
            sx={{
              backgroundColor: "white",
              width: "400px",
              height: "400px",
              p: "20px",
              borderRadius: "8px",
            }}
          >
            {/* Content of the modal */}
            <h1>Modal Title</h1>
            <p>Modal Content</p>
            <Button onClick={handleClose}>Close</Button>
          </Box>
        </Modal>

        <TextField
          id="outlined-basic"
          label="Placeholder"
          variant="outlined"
        ></TextField>
      </Box>
      <Box>
        <PxlTextField></PxlTextField>
      </Box>
      <Box>
        <Card sx={{ maxWidth: 345 }}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              I am a title
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions>
            <PxlButton
              size="medium"
              text="Left Action"
              disableElevation={true}
            ></PxlButton>
            <PxlButton
              size="medium"
              text="Right Action"
              disableElevation={true}
            ></PxlButton>
          </CardActions>
        </Card>
      </Box>
    </Container>
  );
}
