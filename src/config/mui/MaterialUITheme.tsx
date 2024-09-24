"use client";
import React, { ReactNode } from "react";
import {
  StyledEngineProvider,
  ThemeProvider,
  createTheme,
} from "@mui/material/styles";

const theme = createTheme({
  // palette:{
  //     primary: {
  //         main:'rgb(0,0,0)'
  //     }
  // }
});

const MaterialUITheme = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeProvider theme={theme}>
      {/* Adding Below line so that tailwind works flawlessly */}
      <StyledEngineProvider injectFirst>{children}</StyledEngineProvider>
    </ThemeProvider>
  );
};

export default MaterialUITheme;
