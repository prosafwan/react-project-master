import { Link } from 'react-router-dom';
import ThemeToggle from '../components/theme/ThemeToggle';

const Home = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white">
       <ThemeToggle />
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center h-screen bg-gray-100 dark:bg-gray-800">
        <h1 className="text-5xl font-bold mb-4">Welcome to Tailwind Dark Mode</h1>
        <p className="text-lg mb-6 text-gray-700 dark:text-gray-300">
          Experience seamless dark mode integration with Tailwind CSS.
        </p>
        <Link
          to="/about"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-500 dark:bg-blue-400 dark:hover:bg-blue-500 transition-colors"
        >
          Learn More
        </Link>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-200 dark:bg-gray-700">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">Fully Responsive</h3>
              <p className="text-gray-700 dark:text-gray-300">
                The layout adjusts perfectly across all screen sizes with responsive Tailwind utilities.
              </p>
            </div>
            <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">Dark Mode Ready</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Easily switch between light and dark themes with a seamless UI experience.
              </p>
            </div>
            <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">Fast Performance</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Optimized for speed with Vite and minimal Tailwind CSS for blazing-fast performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="py-10 bg-gray-100 dark:bg-gray-800 text-center">
        <p className="text-gray-700 dark:text-gray-300">
          &copy; 2024 Tailwind Dark Mode. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Home;
