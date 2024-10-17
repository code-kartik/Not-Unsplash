import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";
import ImageCarousel from "./ImageCarousel";
import SignUpDialog from "./SignUpDialog";
import LogInDialog from "./LogInDialog";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [signUpopen, setSignUpOpen] = useState(false);
  const [logInopen, setLogInOpen] = useState(false);

  const handleSignUpOpen = () => {
    setSignUpOpen(true);
  };
  const handleLogInOpen = () => {
    setLogInOpen(true);
  };

  const handleSignUpClose = () => {
    setSignUpOpen(false);
  };
  const handleLogInClose = () => {
    setLogInOpen(false);
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          backgroundColor: "black",
          color: "white",
          p: 2,
          justifyContent: "space-between",
          alignItems: "center",
          overflowX: "hidden",
        }}
      >
        <Typography
          variant="h2"
          sx={{ fontFamily: "Londrina Sketch", fontSize: 48 }}
        >
          Not-Unsplash
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Typography variant="h5" fontFamily={"Roboto"} sx={{textDecoration:"underline"}} >
            <Link to='/'>Home</Link>
          </Typography>
          <Typography variant="h5" fontFamily={"Roboto"} sx={{textDecoration:"underline"}} >
            <Link to='/render'>3d renders</Link>
          </Typography>
          <Typography variant="h5" fontFamily={"Roboto"} sx={{textDecoration:"underline"}} >
            <Link to='/wallpapers'>Wallpapers</Link>
          </Typography>
          <Typography variant="h5" fontFamily={"Roboto"} sx={{textDecoration:"underline"}} >
            <Link to='/animals'>Animals</Link>
          </Typography>
          <Typography variant="h5" fontFamily={"Roboto"} sx={{textDecoration:"underline"}} >
            <Link to='/film'>Film</Link>
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            gap: 1,
          }}
        >
          <Button
            color="primary"
            variant="outlined"
            onClick={handleSignUpOpen}
            sx={{ borderColor: "white", fontFamily: "Poppins", color: "white" }}
          >
            Sign Up
          </Button>
          <SignUpDialog open={signUpopen} handleClose={handleSignUpClose} />
          <Button
            color="primary"
            variant="contained"
            onClick={handleLogInOpen}
            sx={{
              borderColor: "black",
              fontFamily: "Poppins",
              color: "black",
              backgroundColor: "white",
            }}
          >
            Log In
          </Button>
          <LogInDialog open={logInopen} handleClose={handleLogInClose} />
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          overflowX: "auto",
          padding: 2,
          mt: 2,
          width: "100%",
          "&::-webkit-scrollbar": { display: "none" },
          msOverflowStyle: "none",
          scrollbarWidth: "none",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <ImageCarousel translate={"translate(0px, 0px)"} />
          <ImageCarousel translate={"translate(200px, 10px)"} />
          <ImageCarousel translate={"translate(0px, 0px)"} />
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;
