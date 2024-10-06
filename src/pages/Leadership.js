import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';
import ContactIcons from '../components/Contact/ContactIcons';

const Leadership = () => (
  <Main title="Leadership">
    <article className="post" id="projects">
      <header>
        <div className="title">
          <h2>
            <Link to="/leadership">Leadership & Service</Link>
          </h2>
        </div>
      </header>
      <p>
        <div className="courses-title">
          <h3>Leadership Positions</h3>
        </div>
        <table>
          <tr>
            <td className="table-service">2023 - present</td>
            <td><b>Student Leader</b>, Urban Climate Research Center, ASU</td>
          </tr>
          <tr>
            <td className="table-service">2022 - present</td>
            <td><b>Student Board Member</b>, Urban Environment of the American{' '}Meteorological Society (AMS)</td>
          </tr>
          <tr>
            <td className="table-service">2022 - 2023</td>
            <td><b>Graduate Student Representative</b>, Faculty Committee on Graduate Affairs,{' '}School of Geographical Sciences & Urban Planning, ASU</td>
          </tr>
          <tr>
            <td className="table-service">2020 - 2021</td>
            <td><b>Student Representative</b>, Graduate Council,{' '}College of Arts & Sciences (ASU)</td>
          </tr>
          <tr>
            <td className="table-service">2020 - 2021</td>
            <td><b>President</b>, Geosciences Graduate Student Alliance, GSU</td>
          </tr>
          <tr>
            <td className="table-service">2020 - 2021</td>
            <td><b>Student Representative</b>, College of Arts & Sciences Curriculum Committee</td>
          </tr>
        </table>
      </p>
      <p>
        <div className="courses-title">
          <h3>Service</h3>
        </div>
        <table>
          <tr>
            <td className="table-service">2024</td>
            <td><b>AAG 2024 Session Organizer</b>: Symposium on Geospatial Data Science for{' '}for Sustainability Development and Application of Spatial Models for Human-Environmental Systems{' '}to Address Social and Environmental Challenges<br />Honolulu, HI, USA</td>
          </tr>
          <tr>
            <td className="table-service">2024</td>
            <td><b>Committee Lead</b>, Lightning Talks,{' '}Bill Anderson Fund Fellowship</td>
          </tr>
          <tr>
            <td className="table-service">2023</td>
            <td><b>Session Co-Chair</b>, Urban Environment and Health Impacts,{' '}AMS Annual Meeting<br />Denver, CO, USA</td>
          </tr>
        </table>
      </p>
      <ContactIcons />
    </article>
  </Main>
);

export default Leadership;
