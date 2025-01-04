import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';

export default function App() {
  return (
    <ThemeProvider>
      <Navbar />
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <h1>Welcome to Themed App</h1>
        <p>This is an example of applying global themes using Context API.</p>
      </div>
    </ThemeProvider>
  );
}
