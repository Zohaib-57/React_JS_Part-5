import React, { createContext, useState, useContext, useEffect } from 'react';

// Create Context
const ThemeContext = createContext();

// Provider Component
const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  // Apply theme to body on theme change
  useEffect(() => {
    document.body.style.backgroundColor = theme === 'light' ? '#fff' : '#333';
    document.body.style.color = theme === 'light' ? '#000' : '#fff';
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom Hook to Use Context (optional)
const useTheme = () => useContext(ThemeContext);

export { ThemeProvider, useTheme, ThemeContext };
