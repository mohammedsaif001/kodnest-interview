"use client";
import React, { ReactNode } from "react";
import {
  StyledEngineProvider,
  ThemeProvider,
  createTheme,
} from "@mui/material/styles";
import { COLORS_COMBINATION } from "@/components/colors/Colors";

const theme = createTheme({
  palette: {
    primary: {
      main: COLORS_COMBINATION["primary-color"],
    },
    error: {
      main: COLORS_COMBINATION["error-color"],
    },
  },
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
