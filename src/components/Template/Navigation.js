import React from 'react';
import { Link } from 'react-router-dom';

import Hamburger from './Hamburger';
import routes from '../../data/routes';

// Websites Navbar, displays routes defined in 'src/data/routes'
const Navigation = () => (
  <header id="header">
    <h1 className="index-link">
      {routes
        .filter(({ index }) => index)
        .map(({ label, path }) => (
          <Link key={label} to={path}>
            {label}
          </Link>
        ))}
    </h1>
    <nav className="links">
      <ul>
        {routes
          .filter(({ index }) => !index)
          .map(({ path, label }) => (
            <li key={label}>
              <Link to={path}>{label}</Link>
            </li>
          ))}
      </ul>
    </nav>
    <Hamburger />
  </header>
);

export default Navigation;
