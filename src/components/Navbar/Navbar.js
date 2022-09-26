import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./Navbar.css";

const theme = createTheme({
    palette: {
        primary: {
            main: "#A59AE6"
        },
        secondary: {
            main: "#F4F4F5"
        },
        info: {
            main: "#000000"
        }
    }



})
export default function ResponsiveNav() {
  return (
    <ThemeProvider theme={theme}>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{borderBottom: 1}}>
        <Toolbar sx={{display: 'flex', justifyContent: 'flex-end', color: 'info'}}>
          <Button color='info'>Projects</Button>
          <Button color='info'> About Me</Button>
          <Button color='info'> Contact Me</Button>
        </Toolbar>
      </AppBar>
    </Box>
    </ThemeProvider>
  );
}
