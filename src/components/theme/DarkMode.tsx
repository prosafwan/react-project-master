import { useState, useEffect } from 'react';

const DarkMode =() =>{
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-800 text-black dark:text-white">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Dark Mode Toggle</h1>
        <button
          onClick={toggleDarkMode}
          className="px-4 py-2 bg-gray-800 text-white dark:bg-gray-300 dark:text-black rounded"
        >
          Toggle Dark Mode
        </button>
      </div>
    </div>
  );
}

export default DarkMode;
