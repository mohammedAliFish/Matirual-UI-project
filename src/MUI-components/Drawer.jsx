import React from "react";
import { Divider, Drawer, List } from "@mui/material";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Home, Create, Settings, Logout } from "@mui/icons-material";
import { useLocation, useNavigate } from "react-router-dom";
import { useTheme } from "@emotion/react";
import IconButton from "@mui/material/IconButton";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import Brightness4Icon from "@mui/icons-material/Brightness4";

const Drawerd = ({
  wid,
  setMyMode,
  noneORblock,
  drawerType,
  onClosed
}) => {
  const currentLocation = useLocation();

  const navigate = useNavigate();
  const theme = useTheme();
  return (
    <Drawer
      sx={{
        display: { xs: noneORblock, sm: "block" },
        width: `${wid}px`,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: `${wid}px`,
          boxSizing: "border-box",
        },
      }}
      variant={drawerType}
      anchor="left"
      open={true}
      onClose={onClosed}
    >
      <List>
        <ListItem
          sx={{ display: "flex", justifyContent: "center", mb: "16px" }}
          disablePadding
        >
          <IconButton
            onClick={() => {
              localStorage.setItem(
                "currentMode",
                theme.palette.mode === "dark" ? "light" : "dark"
              );
              setMyMode(theme.palette.mode === "light" ? "dark" : "light");
            }}
            color="inherit"
          >
            {theme.palette.mode === "dark" ? (
              <Brightness7Icon sx={{ color: "orange" }} />
            ) : (
              <Brightness4Icon />
            )}
          </IconButton>
        </ListItem>

        <Divider />
        <ListItem
          sx={{
            bgcolor:
              currentLocation.pathname === "/"
                ? theme.palette.favColor.main
                : null,
          }}
          disablePadding
        >
          <ListItemButton
            onClick={() => {
              navigate("/");
            }}
          >
            <ListItemIcon>
              <Home />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItemButton>
        </ListItem>

        <ListItem
          sx={{
            bgcolor:
              currentLocation.pathname === "/create"
                ? theme.palette.favColor.main
                : null,
          }}
          disablePadding
        >
          <ListItemButton
            onClick={() => {
              navigate("/create");
            }}
          >
            <ListItemIcon>
              <Create />
            </ListItemIcon>
            <ListItemText primary="Create" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton
            onClick={() => {
              navigate("/setting");
            }}
          >
            <ListItemIcon>
              <Settings />
            </ListItemIcon>
            <ListItemText primary="Settings" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton
            onClick={() => {
              navigate("/logout");
            }}
          >
            <ListItemIcon>
              <Logout />
            </ListItemIcon>
            <ListItemText primary="LogOut" />
          </ListItemButton>
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Drawerd;
