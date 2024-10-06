import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';
import ContactIcons from '../components/Contact/ContactIcons';

const Courses = () => (
  <Main title="Courses">
    <article className="post" id="stats">
      <header>
        <div className="title">
          <h2>
            <Link to="/courses">Courses Taught</Link>
          </h2>
        </div>
      </header>
      <div className="courses-title">
        <h3>Teaching Instructor</h3>
      </div>
      <table>
        <tr>
          <td><b>ASU</b></td>
          <td><b>World Geography</b>: 100-level undergraduate course{' '}focusing on world regions, <b>Fall 2024</b></td>
        </tr>
        <tr>
          <td><b>ASU</b></td>
          <td><b>Introduction to Meteorolgy</b>: 200-level undergraduate lab course{' '}focusing on general concepts of meteorology, <b>Fall 2022</b></td>
        </tr>
      </table>
      <div className="courses-title">
        <h3>Teaching Assistant</h3>
      </div>
      <table>
        <tr>
          <td><b>ASU</b></td>
          <td><b>Global Change</b>: 300-level undergraduate interdisciplinary course{' '}focusing on the dynamics of atmospheric, lithospheric, and hydrospheric dynamics, <b>Fall 2023</b></td>
        </tr>
        <tr>
          <td><b>GSU</b></td>
          <td><b>Introduction to Weather & Climate</b>: 100-level undergraduate{' '}course, <b>Spring 2021</b></td>
        </tr>
        <tr>
          <td><b>GSU</b></td>
          <td><b>Introduction to GIS</b>: 400/500-level course, <b>Fall 2019 - Spring 2021</b></td>
        </tr>
        <tr>
          <td><b>GSU</b></td>
          <td><b>Advanced GIS</b>: 400/500-level course, <b>Fall 2019 - Spring 2021</b></td>
        </tr>
        <tr>
          <td><b>GSU</b></td>
          <td><b>Introduction to Remote Sensing</b>: 400/500-level course, <b>Fall{' '}2019 - Spring 2021</b></td>
        </tr>
      </table>
      <ContactIcons />
    </article>
  </Main>
);

export default Courses;
