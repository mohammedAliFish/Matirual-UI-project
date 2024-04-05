import React from "react";
import { TextField, InputAdornment , Box , styled , Button } from "@mui/material";
import { purple } from "@mui/material/colors";
import { ChevronRight } from "@mui/icons-material";


const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  backgroundColor: theme.palette.ali.main,
  '&:hover': {
    backgroundColor: theme.palette.ali.main,
    scale:'0.99'
  },
}));


const Create = () => {
  return (
    <Box component="form" sx={{width:"380px"}}>
      <TextField
      fullWidth
        label="Transaction Title"
        sx={{ mt: "22px", display: "block" }}
        InputProps={{
          startAdornment: <InputAdornment position="start">&#128073;</InputAdornment>,
        }}
        variant="filled"
      />

      <TextField
      fullWidth
        label="Transaction Title"
        id="filled-start-adornment"
        sx={{ mt: "22px", display: "block" }}
        InputProps={{
          startAdornment: <InputAdornment position="start">$</InputAdornment>,
        }}
        variant="filled"
      />
      <ColorButton sx={{mt:"22px"}} variant="contained">Submit <ChevronRight/></ColorButton>
    </Box>
  );
};

export default Create;
