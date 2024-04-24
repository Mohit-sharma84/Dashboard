import React from 'react';
import Dashboard from './components/dashboard';
import { ThemeProvider, createTheme } from '@mui/material/styles';

// Define your theme
const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2', // Blue color for primary elements
    },
    secondary: {
      main: '#dc004e', // Pink color for secondary elements
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif', // Default font family
    h1: {
      fontSize: '2.5rem', // Custom font size for h1
      fontWeight: 600, // Custom font weight for h1
    },
    // Add more typography configurations as needed
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Dashboard />
      </div>
    </ThemeProvider>
  );
};

export default App;


