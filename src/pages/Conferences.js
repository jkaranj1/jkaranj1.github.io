import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';
import ContactIcons from '../components/Contact/ContactIcons';

const Conferences = () => (
  <Main title="Conferences">
    <article className="post" id="contact">
      <header>
        <div className="title">
          <h2>
            <Link to="/conferences">Conference Presentations & Media</Link>
          </h2>
        </div>
      </header>
      <div className="courses-title">
        <h3>Conference Presentations</h3>
      </div>
      <ul>
        <li className="conferences">
          <p className="course-dot">Karanja, J.</p>
          <p className="conference-name">, Vanos, J., Joshi, A., Penner, S., Guzman, G.E., Connor, D.S., & K. Rykaczweski, (April 2024). <span className="years">Impacts of Different Tent Cover Materials on the Mean Radiant Temperature</span>. American Association of Geographers Annual Meeting, Honolulu, HI, US.</p>
        </li>
        <li className="conferences">
          <p className="course-dot">Karanja, J.</p>
          <p className="conference-name">, Vanos, J., Georgescu, M., Frazier, A., & D. Hondula, (August 2023). <span className="years">Relationships between Heat Health Outcomes and the Choice of Input Variables in Heat Studies</span>. International Conference on Urban Climate, Sydney, Australia.</p>
        </li>
        <li className="conferences">
          <p className="course-dot">Karanja, J.</p>
          <p className="conference-name">, Vanos, J. & J. Vieira, (July 2023). <span className="years">Thermal Discomfort for Unhoused Communities using Different Tent Cover Materials</span>. Natural Hazards Workshop, Broomfield, Colorado, US.</p>
        </li>
        <li className="conferences">
          <p className="course-dot">Karanja, J.</p>
          <p className="conference-name">, & J. Vanos, (June 2023). <span className="years">Heat, Air Pollution, and Health Outcomes Nexus. Overview of Current, Future, and Synthetic Data that can Inform Air Quality Coordination and Decision-Making Activities</span>. ASU-NOAA Air Quality Tabletop Exercise at ASU Skysong Campus, Tempe, AZ, US.</p>
        </li>
        <li className="conferences">
          <p className="course-dot">Karanja, J.</p>
          <p className="conference-name">, Vanos, J. & J. Vieira, (April 2023). <span className="years">Thermal Discomfort for Unhoused Communities using Different Tent Cover Materials</span>. International Conference of Biometeorology, Tempe, AZ, US.</p>
        </li>
        <li className="conferences">
          <p className="course-dot">Karanja, J.</p>
          <p className="conference-name">, Georgescu, M., Svoma, B., & J., Walter. (January 2023). <span className="years">Southwest US Winter Precipitation Variability: Reviewing the Role of Oceanic Teleconnections</span> [Poster Presentation]. American Meteorological Society Annual Meeting, Denver, CO, United States.</p>
        </li>
        <li className="conferences">
          <p className="course-dot">Karanja, J.</p>
          <p className="conference-name">, Wanyama, D. & L. Kiage. (August 2022). <span className="years">Weighting Mechanics and the Spatial Pattern of Composite Metrics of Heat Vulnerability</span>. International Conference on Urban Climate, Atlanta, GA, United States.</p>
        </li>
        <li className="conferences">
          <p className="course-dot">Karanja, J.</p>
          <p className="conference-name">, Vanos, J., Georgescu, M., & D. Hondula, (February 2022). <span className="years">Methodological Rationale for Heat Vulnerability Indices as Predictor Variables of Heat-Health Outcomes</span> [Virtual Presentation]. American Association of Geographers Annual Meeting.</p>
        </li>
      </ul>
      <div className="courses-title">
        <h3>Other Presentations</h3>
      </div>
      <ul>
        <li className="conferences">
          <p className="course-dot">Karanja, J.</p>
          <p className="conference-name">, Panelist for Book Launch, (August 2024). <span className="years"><a href="https://president.asu.edu/read/book-launch-democracy-in-a-hotter-time" target="_blank" rel="noreferrer">Designing Democracy in a Hotter Time</a></span>. Arizona State University, Tempe, AZ, US.</p>
        </li>
        <li className="conferences">
          <p className="course-dot">Karanja, J.</p>
          <p className="conference-name">, Panelist for Webinar, (June 2024). <span className="years"><a href="https://hazards.colorado.edu/training/webinars/a-missing-ingredient-adding-capacity-to-federal-vulnerability-mapping-mix" target="_blank" rel="noreferrer">A Missing Ingredient: Adding Capacity to the Federal Vulnerability Mix</a></span>. Natural Hazards Center, Virtual.</p>
        </li>
        <li className="conferences">
          <p className="course-dot">Karanja, J.</p>
          <p className="conference-name">, Panelist for Webinar, (June 2024). <span className="years">Thermal Discomfort for Unhoused Communities using Different Tent Cover Materials</span>. Natural Hazards Workshop, Broomfield, Colorado, US.</p>
        </li>
        <li className="conferences">
          <p className="course-dot">Karanja, J.</p>
          <p className="conference-name">, Panelist for ASU&apos;s Knowledge Exchange Webinar, (June 2023). <span className="years"><a href="https://youtu.be/sYeO19IZWa4?si=7P_yCtJmcUlvzELK" target="_blank" rel="noreferrer">Implications of Model Types and Input Variables for Understanding Heat-Health Outcomes</a></span>. Hosted by ASU Knowledge Exchange, Tempe, AZ, US.</p>
        </li>
      </ul>
      <div className="courses-title">
        <h3>Media</h3>
      </div>
      <ul>
        <li className="conferences">
          <p className="conference-name"><span className="years"><a href="https://news.asu.edu/20240619-environment-and-sustainability-computer-modeling-shows-where-arizonas-winter-precipitation" target="_blank" rel="noreferrer">Computer Modeling shows where Arizona’s winter precipitation originates</a></span>. June 19, 2024</p>
        </li>
        <li className="conferences">
          <p className="conference-name"><span className="years"><a href="https://headwaterseconomics.org/economic-development/federal-climate-vulnerability-maps-overlook-low-capacity-communities/" target="_blank" rel="noreferrer">Federal climate vulnerability maps overlook low-capacity communities</a></span>. June 3, 2024</p>
        </li>
        <li className="conferences">
          <p className="conference-name"><span className="year"><a href="https://www.google.com/" target="_blank" rel="noreferrer">Urban Climate Quarterly Newsletter</a></span>. 2023</p>
        </li>
        <li className="conferences">
          <p className="conference-name"><span className="years"><a href="https://news.asu.edu/20220318-solutions-shedding-light-phoenixs-most-heatvulnerable" target="_blank" rel="noreferrer">Shedding light on Phoenix&apos;s most heat-vulnerable</a></span>. March 18, 2022</p>
        </li>
        <li className="conferences">
          <p className="conference-name"><span className="years"><a href="https://aaronstigile.weebly.com/articles.html" target="_blank" rel="noreferrer">Environmental Justice and Inequalities in Downtown Phoenix</a></span>. 2022</p>
        </li>
        <li className="conferences">
          <p className="conference-name"><span className="years"><a href="https://www.aag.org/wayfinding-finding-heat-vulnerability-before-its-too-late/?fbclid=IwAR2BAa_yFwEMkDuaRyparDAJvdih1qM5rWBB9EChR8-eigH-8BK7REhSlas" target="_blank" rel="noreferrer">Wayfinding: Finding Heat Vulnerability Before It&apos;s Too Late</a></span>. April 12, 2022</p>
        </li>
      </ul>
      <ContactIcons />
    </article>
  </Main>
);

export default Conferences;
