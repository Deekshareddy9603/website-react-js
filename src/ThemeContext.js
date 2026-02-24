import { createContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const [name, setName] = useState("");

  return (
    <ThemeContext.Provider value={{ theme, setTheme, name, setName }}>
      {children}
    </ThemeContext.Provider>
  );
};