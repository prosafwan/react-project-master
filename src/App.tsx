
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Navbar from './components/header/Navbar';
import './App.css'
import { ThemePage } from './pages/ThemePage';
import AllHook from './pages/AllHook';


function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/theme" element={<ThemePage />} />
        <Route path="/all-hook" element={<AllHook />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </Router>
    </>
  )
}

export default App
