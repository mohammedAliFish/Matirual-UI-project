import { cyan, grey } from "@mui/material/colors";

const getDesignTokens = (mode)=>{
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
}