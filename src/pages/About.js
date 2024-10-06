import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';
import ContactIcons from '../components/Contact/ContactIcons';

const About = () => (
  <Main title="About">
    <article className="post markdown" id="about">
      <header>
        <div className="title">
          <h2>
            <Link to="/about">About Me</Link>
          </h2>
        </div>
      </header>
      <p>Joseph specializes in social and environmental determinants of heat health outcomes.{' '}Joseph is passionate about spatial thinking and how it underpins the assessment of vulnerability. Joseph is currently researching spatially integrated social science that combines geographic information science (GIScience), vulnerability science, and health geography. Through his studies, Joseph aims to integrate spatial thinking principles in the identification of locations and populations that are most vulnerable. Geospatial methods are critical in vulnerability determination, thus it is important to intentionally assess how the implications of different GIScience principles influence the determination of vulnerability. When not immersed in research, Joseph enjoys playing computer games, hiking, or volunteering in mentorship programs and community service. Feel free to connect with me to discuss overlapping research interests, or reach out to collaborate on research,  projects and ideas.</p>
      <article className="mini-post">
        <div className="mini-post-image">
          <div className="image">
            <img src={`${process.env.PUBLIC_URL}${'/images/JKaranja_1.jpg'}`} alt="research statement" />
          </div>
        </div>
        <p>&apos;Cooling Singapore&apos;, Singapore Management University, 2024, Singapore</p>
      </article>
      <article className="mini-post">
        <div className="mini-post-image">
          <div className="image">
            <img src={`${process.env.PUBLIC_URL}${'/images/JKaranja_2.jpg'}`} alt="research statement" />
          </div>
        </div>
        <p>American Association of Geographers Annual{' '}Conference 2024, Honolulu, Hawai&apos;i</p>
      </article>
      <article className="mini-post">
        <div className="mini-post-image">
          <div className="image">
            <img src={`${process.env.PUBLIC_URL}${'/images/JKaranja_3.jpg'}`} alt="research statement" />
          </div>
        </div>
        <p>International Conference on Urban Climate 2023,{' '}Sydney, Australia</p>
      </article>
      <article className="mini-post">
        <div className="mini-post-image">
          <div className="image">
            <img src={`${process.env.PUBLIC_URL}${'/images/JKaranja_4.jpg'}`} alt="research statement" />
          </div>
        </div>
        <p>Field work, Phoenix, Arizona</p>
      </article>
      <article className="mini-post">
        <div className="mini-post-image">
          <div className="image">
            <img src={`${process.env.PUBLIC_URL}${'/images/JKaranja_5.jpg'}`} alt="research statement" />
          </div>
        </div>
        <p className="caption">An experimental setup replicating observed street conditions in the City of Phoenix.{' '}The people experiencing homelessness use a variety of tent shades to protect against sweltering summer conditions. However, the findings of this experiment does not support the use of tents as a protective strategy. If tents are to be used, they should be used during the day and removed at night.</p>
      </article>
      <ContactIcons />
    </article>
  </Main>
);

export default About;
