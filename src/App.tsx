import React, { ReactElement } from "react";
import Routes from "@Routes/Routes";
import "./App.css";
import { ThemeProvider } from '@mui/material/styles';
import CustomTheme from '@Utils/Constants/ThemesConfig'

function App(): ReactElement {
  return (
    <ThemeProvider theme={CustomTheme}>
      <div className="App">
        <Routes />
      </div>
    </ThemeProvider>
  );
}

export default App;
