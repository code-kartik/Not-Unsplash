import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import React from "react";

const LogInDialog = (props) => {
  return (
    <Dialog
      open={props.open}
      onClose={props.handleClose}
      PaperProps={{
        sx: {
          borderRadius: "8px",
          padding: "20px",
          minWidth: "400px",
        },
      }}
    >
      <DialogTitle sx={{ textAlign: "center", fontWeight: "bold" }}>
        Login Credentials
      </DialogTitle>
      <DialogContent>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <TextField
            id="username-email"
            label="Username or Email"
            variant="outlined"
            margin="normal"
            fullWidth
            sx={{}}
          />
          <TextField
            id="password"
            label="Password"
            variant="outlined"
            margin="normal"
            fullWidth
            sx={{}}
          />
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#007bff",
              color: "white",
              "&:hover": {
                backgroundColor: "#0056b3",
              },
              width: "100%",
              marginTop: 2,
              borderRadius: "4px",
            }}
            onClick={props.handleClose}
          >
            Sign In
          </Button>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default LogInDialog;
