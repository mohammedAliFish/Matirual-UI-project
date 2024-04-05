import React from "react";
import { Outlet } from "react-router-dom";
import Appbar from "./MUI-components/Appbar";
import Drawerd from "./MUI-components/Drawer";
import { Box, ThemeProvider, CssBaseline, createTheme } from "@mui/material";
import { useState } from "react";
import { cyan, grey } from "@mui/material/colors";

const drawerWidth = 240;

const Root = () => {
  const [mode, setMyMode] = useState(
    localStorage.getItem("currentMode") === null
      ? "light"
      : localStorage.getItem("currentMode") === "light"
      ? "light"
      : "dark"
  );
  const darkTheme = createTheme({
    palette: {
      mode,
      ...(mode === "light"
        ? {
            // palette values for light mode
            ali: { main: "#64748B" },
            favColor: { main: grey[700] },
          }
        : {
            ali: { main: "teal" },
            favColor: { main: cyan[700] },
          }),
    },
  });

  const [noneORblock, setnonOrblock] = useState("none");
  const [drawerType, setdrawerType] = useState("permanent");

  const showDrawer = (second) => {
    setnonOrblock("block");
    setdrawerType("temporary");
  };

  const onClosed = () => { 
    setdrawerType("temporary");
    setnonOrblock("none");
   }

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />

      <div>
        <Appbar
          wid={drawerWidth}
          showDrawer={showDrawer}
        />

        <Drawerd
          onClosed={onClosed}
          wid={drawerWidth}
          setMyMode={setMyMode}
          noneORblock={noneORblock}
          drawerType={drawerType}
          setnonOrblock={setnonOrblock}
          setdrawerType={setdrawerType}
        />

        <Box
          component="main"
          sx={{
            ml: { sm: `${drawerWidth}px` },
            display: "flex",
            justifyContent: "center",
            mt: "66px",
          }}
        >
          <Outlet />
        </Box>
      </div>
    </ThemeProvider>
  );
};

export default Root;
