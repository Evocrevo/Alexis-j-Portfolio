import { useEffect, useState } from "react";

const useThemeSwitcher = () => {
  const preferDarkQuery = "(prefers-color-scheme: dark)";
  const [mode, setMode] = useState("");

  useEffect(() => {
    const mediaQuery = window.matchMedia(preferDarkQuery);
    const userPref = window.localStorage.getItem("theme");

    const initialMode = userPref ? userPref : (mediaQuery.matches ? "dark" : "light");
    setMode(initialMode);
    document.documentElement.classList.toggle("dark", initialMode === "dark");

    const handleChange = (event) => {
      const newMode = event.matches ? "dark" : "light";
      setMode(newMode);
      window.localStorage.setItem("theme", newMode);
      document.documentElement.classList.toggle("dark", newMode === "dark");
    };

    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const toggleMode = () => {
    const newMode = mode === "dark" ? "light" : "dark";
    setMode(newMode);
    window.localStorage.setItem("theme", newMode);
    document.documentElement.classList.toggle("dark", newMode === "dark");
  };

  return [mode, toggleMode];
};

export default useThemeSwitcher;