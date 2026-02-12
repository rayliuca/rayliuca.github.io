import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Ray Liu</h2>
        <p><a href="mailto:ray@rayliu.ca">ray@rayliu.ca</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>
        Hi, I&apos;m Ray. I like to make fun projects.
        I am a Machine Learning Engineer at <a href="https://www.drugbank.com/">DrugBank</a> and a <a href="https://www.ualberta.ca/">UAlberta</a> <a href="https://www.ualberta.ca/engineering/co-op/our-program/disciplines-and-specializations/engineering-physics.html">Engineering Physics</a> graduate.
        Previously, I worked
        at <a href="https://www.altaml.com/">AltaML</a>
        , <a href="https://www.tricca.ca/">Tricca</a>
        , <a href="https://www.microchip.com/">Microchip</a>
        , <a href="http://binaryrg.ece.ualberta.ca/people">the Binary Lab</a>
        , and <a href="https://hegmannthz.wordpress.com/">the Ultrafast Spectroscopy and Nanotools Labs</a>.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
    </section>
  </section>
);

export default SideBar;
