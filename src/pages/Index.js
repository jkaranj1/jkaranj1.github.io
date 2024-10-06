import React from 'react';

import Main from '../layouts/Main';
import ContactIcons from '../components/Contact/ContactIcons';

const Index = () => (
  <Main>
    <article className="post" id="index">
      <div className="courses-title">
        <h3>Institutions Attended</h3>
      </div>
      <p>
        <div className="course-container courses">
          <h4 className="course-dot">Arizona State University (ASU),</h4>
          <p className="course-name" style={{ margin: '10px' }}>Ph.D., Geographic Information Science, <span className="years"><b>2021 - present</b></span></p>
        </div>
        <div className="course-container courses">
          <h4 className="course-dot">Georgia State University (GSU),</h4>
          <p className="course-name" style={{ margin: '10px' }}>Master of Science, Geosciences (Geography), <span className="years"><b>2019 - 2021</b></span></p>
        </div>
        <div className="course-container courses">
          <h4 className="course-dot">Kenyatta University,</h4>
          <p className="course-name" style={{ margin: '10px' }}>Master of Environmental Science (Climate Change and Sustainability), <span className="years"><b>2014 - 2017</b></span></p>
        </div>
        <div className="course-container courses">
          <h4 className="course-dot">Kenyatta University,</h4>
          <p className="course-name" style={{ margin: '10px' }}>Bachelor of Environmental Planning & Management, <span className="years"><b>2009 - 2013</b></span></p>
        </div>
      </p>
      <div className="courses-title">
        <h3>Professional Certifications</h3>
      </div>
      <p>
        <div className="courses">
          <h4 className="course-dot">Hazard & Emergency Management Certifications:</h4><span className="years course-name"><b> 2024</b></span>
          <p className="course-name"><ul><li>Reciprocity in Hazards and Disaster Research </li><br /><li>Positionality in Hazards and Disaster Research and Practice </li><br /><li>Introduction to the National Incident Management System, IS-700B</li><br /><li>Introduction to Incident Command System, ICS-100 </li><br /><li>Institutional Review Board Procedures and Extreme Events Research</li><br /><li>Collecting and Sharing Perishable Data</li><br /><li>Broader Ethical Considerations for Hazards and Disaster Researchers</li></ul></p>
        </div>
        <div className="courses">
          <h4 className="course-dot">Certificate on Policy and Science:</h4>
          <p className="course-name" style={{ margin: '10px' }}>Research America / Federation of American Societies for Experimental Biology, <span className="years"><b>March 2023</b></span></p>
        </div>
        <div className="courses">
          <h4 className="course-dot">Postgraduate Certificate in GIS:</h4>
          <p className="course-name" style={{ margin: '10px' }}>Georgia State University, <span className="years"><b>2021</b></span></p>
        </div>
        <div className="courses">
          <h4 className="course-dot">Associate Expert for Environmental Impact Assessment:</h4>
          <p className="course-name" style={{ margin: '10px' }}>Kenyan National Environmental Management Authority, <span className="years"><b>September 2016</b></span></p>
        </div>
        <div className="courses">
          <h4 className="course-dot">Certificate in Transformational Leadership Skills:</h4>
          <p className="course-name" style={{ margin: '10px' }}>Kenyatta University, <span className="years"><b>December 2013</b></span></p>
        </div>
        <div className="courses">
          <h4 className="course-dot">Certificate on Entrepreneurial Promotion:</h4>
          <p className="course-name" style={{ margin: '10px' }}>Kenyatta University, University of Luneberg (Germany), & UNESCO, <span className="years"><b>November 2012</b></span></p>
        </div>
        <div className="courses">
          <h4 className="course-dot">Introduction to GIS and remote sensing certificate:</h4>
          <p className="course-name" style={{ margin: '10px' }}>Regional Center for Mapping of Resources for Development - Nairobi, <span className="years"><b>April 2012</b></span></p>
        </div>
      </p>
      <div className="courses-title">
        <h3>Professional Associations</h3>
      </div>
      <p>
        <div className="course-container courses">
          <p className="course-name">Member, Board of Urban Environment:</p>
          <h4 className="course-dot" style={{ margin: '5px' }}>American Meteorological Society (AMS)</h4>
        </div>
        <div className="course-container courses">
          <p className="course-name">Student Member:</p>
          <h4 className="course-dot" style={{ margin: '5px' }}>American Association of Geographers (AAG)</h4>
        </div>
        <div className="course-container courses">
          <p className="course-name">Student Member:</p>
          <h4 className="course-dot" style={{ margin: '5px' }}>International Congress of Biometeorology (ICB)</h4>
        </div>
        <div className="course-container courses">
          <p className="course-name">Student Member:</p>
          <h4 className="course-dot" style={{ margin: '5px' }}>International Association on urban Climate (IAUC)</h4>
        </div>
        <div className="course-container courses">
          <p className="course-name">Member:</p>
          <h4 className="course-dot" style={{ margin: '5px' }}>NATURA Network</h4>
        </div>
      </p>
      <ContactIcons />
    </article>
  </Main>
);

export default Index;
