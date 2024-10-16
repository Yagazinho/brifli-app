import { FaMoon, FaSun } from "react-icons/fa";

interface Props {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
}

const NavBar = ({ darkMode, setDarkMode }: Props) => {
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <nav className="flex justify-between items-center p-4 bg-[#FOF8FF] dark:bg-gray-900 transition-colors duration-700">
      <div className="flex items-center">
        <span className="ml-2 text-2xl font-bold text-black/75 dark:text-white/75">
          Brifli
        </span>
      </div>

      <button
        onClick={toggleDarkMode}
        className="text-xl p-2 rounded-full  transition-colors"
      >
        {darkMode ? (
          <FaSun className="text-yellow-400" />
        ) : (
          <FaMoon className="text-black/75" />
        )}
      </button>
    </nav>
  );
};

export default NavBar;
