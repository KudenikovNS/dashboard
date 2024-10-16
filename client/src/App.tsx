import { createTheme } from "@mui/material/styles";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { useMemo } from "react";
import { themeSettings } from "./theme";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "@/scenes/navbar"
import Dashboard from "./scenes/dashboard";

function App() {
  const theme = useMemo(() => createTheme(themeSettings), [])
  return <div className="App">
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box width="100%" height="100%" padding="0 5px">
          <Navbar />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/predictions" element={<div>predictions page</div>} />
          </Routes>
        </Box>
      </ThemeProvider>
    </BrowserRouter>
  </div>;
}

export default App;
