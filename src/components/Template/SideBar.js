import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';
import Pattern from './Pattern';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/Joseph-Karanja.png`} alt="" />
      </Link>
      <header>
        <h2>Joseph Karanja</h2>
        <p>
          <a href="mailto:sirjosephkaranja@gmail.com">sirjosephkaranja@gmail.com</a>
        </p>
      </header>
    </section>
    <Pattern />
    <section id="footer">
      <ContactIcons />
      <p className="copyright">
        &copy; Joseph Karanja <Link to="/">josephkaranja.com</Link>.
      </p>
    </section>
  </section>
);

export default SideBar;
