import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import Cell from '../components/Projects/Cell';
import data from '../data/projects_copy';

import ContactIcons from '../components/Contact/ContactIcons';
import JK_CV from '../assets/Joseph Karanja_CV.docx';

const Research = () => (
  <Main title="Research">
    <article className="post" id="research">
      <header>
        <div className="title">
          <h2>
            <Link to="/research">Research</Link>
          </h2>
        </div>
      </header>
      <div className="courses-title">
        <h3>Research Statement</h3>
      </div>
      <p style={{ 'text-align': 'justify' }}>Joseph&apos;s current research intersects heat vulnerability, Geographic Information{' '}Science, and health outcomes. Specifically, my research entails the integration of socioeconomic and environmental characteristics and examines how they interact across multiple spatial and temporal scales to define a variety of heat health outcomes such as heat-related 911 emergency calls and hospitalizations. Additionally, Joseph investigates how different spatial analysis methods and methodological decision criteria influence the determination of vulnerable populations and locations, and their implications for policymaking. Most recently, his collaborative work applies varied statistical techniques to understand relationships between Oceanic circulations such as the El Nino and Southern Oscillations and southwest US winter precipitation. Joseph also collaborates with researchers applying human physiological modeling of heat.</p>
      <div className="mini-post">
        <div className="image">
          <img src={`${process.env.PUBLIC_URL}${'/images/projects/Research_diagram.png'}`} alt="research statement" />
        </div>
      </div>
      <div className="mini-post">
        <a href={JK_CV} className="cv-download" target="_blank" rel="noreferrer" download>DOWNLOAD JOSEPH&apos;S FULL CV HERE.</a>
      </div>
      <div className="courses-title">
        <h3>Publications</h3>
      </div>
      {data.map((project) => (
        <Cell data={project} key={project.title} />
      ))}
      <ContactIcons />
    </article>
  </Main>
);

export default Research;
