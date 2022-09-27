import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link } from 'react-router-dom';
import "./Navbar.css";

const theme = createTheme({
    palette: {
        primary: {
            main: "#F8EDE3"
        },
        secondary: {
            main: "#F4F4F5"
        },
        info: {
            main: "#FFFFFF"
        },
        hover: {
          main: "#A084CA",
        }
    }



})
export default function ResponsiveNav() {
  return (
    <ThemeProvider theme={theme}>
    <Box className='flexButtons'>
      <br></br>
        <Button sx={{backgroundColor: 'primary.main', boxShadow: 5, '&:hover': {backgroundColor: 'hover.main'}}}><Link style={{ color: 'black', textDecoration: 'none'}} to="/"> Home</Link></Button>
          <Button sx={{backgroundColor: 'primary.main', boxShadow: 5, '&:hover': {backgroundColor: 'hover.main'}}}><Link style={{color: 'black', textDecoration: 'none'}} to="/extra-projects"> Extra Projects</Link></Button>
          <Button sx={{backgroundColor: 'primary.main', boxShadow: 5, '&:hover': {backgroundColor: 'hover.main'}}}><Link style={{textDecoration: 'none', color: 'black'}} to="/about"> About Me</Link></Button>
          <Button sx={{backgroundColor: 'primary.main', boxShadow: 5, '&:hover': {backgroundColor: 'hover.main'}}}><Link style={{textDecoration: 'none', color: 'black'}} to="/contact-me"> Contact Me</Link></Button>
    </Box>
    </ThemeProvider>
  );
}
