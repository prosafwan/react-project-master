import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex gap-2 bg-gray-100 p-2 rounded-md">
      <Link to="/">Home</Link> 
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/theme">Theme</Link>
      <Link to="/all-hook">All Hook</Link>
    </nav>
  );
}

export default Navbar;
