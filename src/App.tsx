import { useEffect, useState } from "react";
import LinkShortener from "./Pages/Index";
import NavBar from "./Pages/Nav/Index";
import Footer from "./Pages/Footer/Index";
function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <>
      <section
        className={`${
          darkMode ? "bg-gray-900 text-white" : "bg-[#FOF8FF] text-gray-800"
        }min-h-screen overflow-y-hidden transition-colors duration-700`}
      >
        <NavBar darkMode={darkMode} setDarkMode={setDarkMode} />
        <LinkShortener />
        <Footer />
      </section>
    </>
  );
}

export default App;
