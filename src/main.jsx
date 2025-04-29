import { StrictMode, useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Loader from "./components/Loader.jsx";

// Create a temporary component to handle loading
const RootComponent = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay (e.g., for fetching or splash screen)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // 2 seconds
    return () => clearTimeout(timer);
  }, []);

  return (
    <StrictMode>
      {loading ? <Loader /> : <App />}
    </StrictMode>
  );
};

createRoot(document.getElementById("root")).render(<RootComponent />);
