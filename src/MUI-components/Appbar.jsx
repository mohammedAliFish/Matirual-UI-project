import React from "react";
import Link from "@mui/material/Link";
import { IconButton, AppBar, Toolbar, Avatar, Button } from "@mui/material";
import { Menu } from "@mui/icons-material";
const Appbar = ({ wid,showDrawer }) => {
  return (
    <AppBar
      position="static"
      sx={{
        ml: { xs: 0, sm: `${wid}px` },
        width: { sm: `calc(100% - ${wid}px)` },
      }}
    >
      <Toolbar>
        <IconButton
          onClick={() => {
            showDrawer()
          }}
          sx={{mr:"9px", display: { sm: "none" } }}
        >
          <Menu />
        </IconButton>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        ></IconButton>

        <Link
          color="inherit"
          href="/"
          sx={{ flexGrow: 1, fontSize: 20, "&:hover": { color: "black" } }}
          underline="none"
        >
          Mohammed
        </Link>
        <Button color="inherit">Login</Button>
        <Avatar src="./images/11.jpg" />
      </Toolbar>
    </AppBar>
  );
};

export default Appbar;
