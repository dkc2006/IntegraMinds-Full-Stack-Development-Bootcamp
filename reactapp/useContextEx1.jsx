import React, { useState } from "react";

const themes = {
  light: {
    color: "#000",
    backgroundColor: "#fff",
  },
  dark: {
    color: "#fff",
    backgroundColor: "#000",
  },
};

export const ThemeContext = React.createContext(themes.light);

const UseContextEx1 = () => {
  const [theme, setTheme] = useState(themes.light);

  const toggleTheme = () => {
    setTheme((prevTheme) =>
      prevTheme === themes.light ? themes.dark : themes.light
    );
  };

  return (
    <ThemeContext.Provider value={theme}>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <Toolbar />
    </ThemeContext.Provider>
  );
};

const Toolbar = () => {
  return (
    <div>
      <ThemedButton />
    </div>
  );
};

const ThemedButton = () => {
  const theme = React.useContext(ThemeContext);
  return (
    <button
      style={{
        color: theme.color,
        backgroundColor: theme.backgroundColor,
        padding: "10px",
        borderRadius: "5px",
        margin: "10px",
        border: "1px solid #000",
      }}
    >
      I am styled by theme context!
    </button>
  );
};

export default UseContextEx1;
 