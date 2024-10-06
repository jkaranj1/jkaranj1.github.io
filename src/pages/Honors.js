import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';
import ContactIcons from '../components/Contact/ContactIcons';

const Honors = () => (
  <Main title="Honors">
    <article className="post" id="honors">
      <header>
        <div className="title">
          <h2>
            <Link to="/honors">Honors, Awards, Grants</Link>
          </h2>
        </div>
      </header>
      <p>
        <div className="courses-title">
          <h3>Honors & Awards</h3>
        </div>
        <table>
          <tr>
            <td className="table-service">2024</td>
            <td><b>American Association of Geographers</b>, Urban Specialty Group Access Award,{' '}awarded in Honululu, HI, USA</td>
          </tr>
          <tr>
            <td className="table-service">2024</td>
            <td><b>ASU&apos;s Urban Climate Research Center</b>, Poster Competition, 3rd Place</td>
          </tr>
          <tr>
            <td className="table-service">2023</td>
            <td><b>International Association of Urban Climate</b>, Best Student Presentation,{' '}awarded in Sydney, Australia</td>
          </tr>
          <tr>
            <td className="table-service">2023</td>
            <td><b>ASU&apos;s Urban Climate Research Center</b>, Poster Competition, 3rd Place</td>
          </tr>
          <tr>
            <td className="table-service">2021</td>
            <td><b>Georgia State University</b>, Geography Student of the Year 2020 - 2021</td>
          </tr>
          <tr>
            <td className="table-service">2021</td>
            <td><b>Georgia State University</b>, Teaching Assistant of the Year 2020 - 2021</td>
          </tr>
          <tr>
            <td className="table-service">2021</td>
            <td><b>Georgia State University</b>, Nominee for International Student of the Year</td>
          </tr>
        </table>
      </p>
      <p>
        <div className="courses-title">
          <h3>Grants & Fellowships</h3>
        </div>
        <table>
          <tr>
            <td className="table-service">2024 - 2025</td>
            <td><b>National Science Foundation</b>, Doctoral Dissertation Research Improvement{' '}(NSF-DDRI), <b>USD 30,150</b></td>
          </tr>
          <tr>
            <td className="table-service">2024 - 2025</td>
            <td><b>University of Washington</b>, Increasing Diversity in and Equitable Access to Applied Learning in Disaster{' '}Research Response (IDEAAL DR2) Fellowship, <b>USD 6,200</b></td>
          </tr>
          <tr>
            <td className="table-service">2023 - 2024</td>
            <td><b>Headwaters Economics</b>, research grant for comparing different federal vulnerability{' '}maps and community capacity, <b>USD 18,480</b></td>
          </tr>
          <tr>
            <td className="table-service">2023 - 2024</td>
            <td><b>NATURA Global Roadmap fellowship</b>, Declined <b>USD 10,000</b>{' '}</td>
          </tr>
          <tr>
            <td className="table-service">2023 - 2024</td>
            <td><b>ASU&apos;s Graduate and Professional Student Association</b>,{' '}travel grant, <b>USD 950</b></td>
          </tr>
          <tr>
            <td className="table-service">2023 - 2024</td>
            <td><b>ASU&apos;s School of Geographical Sciences</b>, travel grant,{' '}<b>USD 5,000</b></td>
          </tr>
          <tr>
            <td className="table-service">2022 - 2023</td>
            <td><b>Research America</b>, Civic Engagement Microgrant <b>USD 2,300</b></td>
          </tr>
          <tr>
            <td className="table-service">2022 - 2023</td>
            <td><b>ASU Flagship program</b>, Future Leaders and Geoscience High{' '}Road Internship, declined <b>USD 1,300</b></td>
          </tr>
          <tr>
            <td className="table-service">2022</td>
            <td><b>William Averett Anderson Fund</b>, Fellowship</td>
          </tr>
          <tr>
            <td className="table-service">2021 - 2022</td>
            <td><b>ASU&apos;s School of Graduate and Professional Students Association</b>,{' '}travel grant, <b>USD 950</b></td>
          </tr>
          <tr>
            <td className="table-service">2021 - 2022</td>
            <td><b>ASU&apos;s Interdisciplinary Enrichment Fellowship</b>, <b>USD 47,925</b></td>
          </tr>
          <tr>
            <td className="table-service">2021 - 2022</td>
            <td><b>ASU Graduate College</b>, conference award, <b>USD 245</b></td>
          </tr>
        </table>
      </p>
      <ContactIcons />
    </article>
  </Main>
);

export default Honors;
