// Link is the basic version, does what a link does!
// Example codes are in code comments :)
// import { Link } from "react-router";

import { NavLink } from "react-router";

export function Navbar() {
  let activeNavStyle = {
    textDecorationColor: "green",
    textDecorationLine: "line-through",
  };

  let activeLinkStyling = ({ isActive }) =>
    isActive ? activeNavStyle : undefined;

  return (
    <nav>
      <ul>
        <li>
          {/* <Link to="/">Home</Link> */}
          <NavLink to="/" style={activeLinkStyling}>
            Home
          </NavLink>
        </li>
        <li>
          {/* <Link to="/about">About</Link> */}
          <NavLink to="/about" style={activeLinkStyling}>
            About
          </NavLink>
        </li>
        <li>
          {/* <Link to="/about/contact">Contact</Link> */}
          <NavLink to="/about/contact" style={activeLinkStyling}>
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink to="/articles" style={activeLinkStyling}>
            Articles
          </NavLink>
        </li>
        <li>
          <NavLink to="/pokemon-search" style={activeLinkStyling}>
            Pokemon Searcher
          </NavLink>
        </li>
        <li>
          <NavLink to="/watch" style={activeLinkStyling}>
            Watch
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
