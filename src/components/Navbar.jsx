import { Link, NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav>
      <Link to="/" className="nav-logo">
        CAFFEINATED<span>&</span>LOST
      </Link>

      <ul className="nav-links">
        <li><a href="/#skills">Skills</a></li>
        <li><NavLink to="/projects">Work</NavLink></li>
        <li><a href="/#about">About</a></li>
        <li><a href="/#contact">Contact</a></li>
      </ul>
    </nav>
  );
}
