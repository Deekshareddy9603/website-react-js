import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const ThemeContent = () => {
  const { theme, setTheme, name, setName } = useContext(ThemeContext);

  const styles = {
    light: {
      background: "#f5f5f5",
      color: "#000",
      content: "Light Theme Activated ☀️"
    },
    dark: {
      background: "#222",
      color: "#fff",
      content: "Dark Theme Activated 🌙"
    },
    blue: {
      background: "#1e90ff",
      color: "#fff",
      content: "Blue Theme Activated 💙"
    }
  };

  return (
    <div style={{ 
      height: "100vh",
      background: styles[theme].background,
      color: styles[theme].color,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center"
    }}>

      <h2>Enter Your Name</h2>
      <input
        type="text"
        placeholder="Enter name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{ padding: "10px", marginBottom: "15px", width: "250px" }}
      />

      <h1>Hello {name || "User"} 👋</h1>
      <h3>{styles[theme].content}</h3>

      <div style={{ marginTop: "20px" }}>
        <button onClick={() => setTheme("light")}>Light</button>
        <button onClick={() => setTheme("dark")} style={{ margin: "0 10px" }}>Dark</button>
        <button onClick={() => setTheme("blue")}>Blue</button>
      </div>

    </div>
  );
};

export default ThemeContent;