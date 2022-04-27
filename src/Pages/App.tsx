import React, { ReactElement } from "react";
import Routes from "@Routes/Routes";
import { ThemeProvider } from "@mui/material/styles";
import CustomTheme from "@Utils/Constants/ThemesConfig";

function App(): ReactElement {
  return (
    <ThemeProvider theme={CustomTheme}>
      <Routes />
    </ThemeProvider>
  );
}

export default App;
