"use client";
import React, { ReactNode } from "react";
import {
  StyledEngineProvider,
  ThemeProvider,
  createTheme,
} from "@mui/material/styles";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

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
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        {/* Adding Below line so that tailwind works flawlessly */}
        <StyledEngineProvider injectFirst>{children}</StyledEngineProvider>
      </LocalizationProvider>
    </ThemeProvider>
  );
};

export default MaterialUITheme;
