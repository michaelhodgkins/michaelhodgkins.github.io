import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link } from 'react-router-dom';
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
    <Box>
        <Button color='info'><Link style={{textDecoration: 'none', color: 'black'}} to="/"> Home</Link></Button>
          <Button color='info'><Link style={{textDecoration: 'none', color: 'black'}} to="/extra-projects"> Extra Projects</Link></Button>
          <Button color='info'><Link style={{textDecoration: 'none', color: 'black'}} to="/about"> About Me</Link></Button>
          <Button color='info'><Link style={{textDecoration: 'none', color: 'black'}} to="/contact-me"> Contact Me</Link></Button>
    </Box>
    </ThemeProvider>
  );
}
