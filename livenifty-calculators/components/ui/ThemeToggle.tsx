"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [dark, setDark] = useState(false);

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true);

    const storedTheme = localStorage.getItem("theme");

    if (storedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setDark(true);
    } else if (storedTheme === "light") {
      document.documentElement.classList.remove("dark");
      setDark(false);
    } else {
      // First time → respect system preference
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;

      if (prefersDark) {
        document.documentElement.classList.add("dark");
        setDark(true);
      }
    }
  }, []);

  const toggleTheme = () => {
    if (dark) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
    setDark(!dark);
  };

  if (!mounted) return null;

  return (
    <button
      onClick={toggleTheme}
      className="text-lg hover:scale-110 transition"
      aria-label="Toggle theme"
    >
      {dark ? "🌙" : "☀️"}
    </button>
  );
}