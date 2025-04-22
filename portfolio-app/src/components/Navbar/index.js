import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navBar-section">
       <div className="navBar">
        <Link to="/" className="navButton">Home</Link>
        <Link to="/about" className="navButton">About</Link>
        <Link to="/projects" className="navButton">Projects</Link>
        <Link to="/contact" className="navButton">Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;