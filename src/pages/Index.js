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
          <p className="course-dot"><b>Arizona State University (ASU),</b></p>
          <p className="course-name" style={{ margin: '10px' }}>Ph.D., Geographic Information Science, <span className="years"><b> 2021 - present</b></span></p>
        </div>
        <div className="course-container courses">
          <p className="course-dot"><b>Georgia State University (GSU),</b></p>
          <p className="course-name" style={{ margin: '10px' }}>Master of Science, Geosciences (Geography), <span className="years"><b> 2019 - 2021</b></span></p>
        </div>
        <div className="course-container courses">
          <p className="course-dot"><b>Kenyatta University,</b></p>
          <p className="course-name" style={{ margin: '10px' }}>Master of Environmental Science (Climate Change and Sustainability), <span className="years"><b> 2014 - 2017</b></span></p>
        </div>
        <div className="course-container courses">
          <p className="course-dot"><b>Kenyatta University,</b></p>
          <p className="course-name" style={{ margin: '10px' }}>Bachelor of Environmental Planning & Management, <span className="years"><b> 2009 - 2013</b></span></p>
        </div>
      </p>
      <div className="courses-title">
        <h3>Professional Certifications</h3>
      </div>
      <p>
        <div className="courses">
          <p className="course-dot"><b>Hazard & Emergency Management Certifications:</b></p><span className="years course-name"> 2024</span>
          <p className="course-name"><ul><li>Reciprocity in Hazards and Disaster Research </li><br /><li>Positionality in Hazards and Disaster Research and Practice </li><br /><li>Introduction to the National Incident Management System, IS-700B</li><br /><li>Introduction to Incident Command System, ICS-100 </li><br /><li>Institutional Review Board Procedures and Extreme Events Research</li><br /><li>Collecting and Sharing Perishable Data</li><br /><li>Broader Ethical Considerations for Hazards and Disaster Researchers</li></ul></p>
        </div>
        <div className="courses">
          <p className="course-dot"><b>Certificate on Policy and Science:</b></p>
          <p className="course-name" style={{ margin: '10px' }}>Research America / Federation of American Societies for Experimental Biology, <span className="years">March 2023</span></p>
        </div>
        <div className="courses">
          <p className="course-dot"><b>Postgraduate Certificate in GIS:</b></p>
          <p className="course-name" style={{ margin: '10px' }}>Georgia State University, <span className="years">2021</span></p>
        </div>
        <div className="courses">
          <p className="course-dot"><b>Associate Expert for Environmental Impact Assessment:</b></p>
          <p className="course-name" style={{ margin: '10px' }}>Kenyan National Environmental Management Authority, <span className="years">September 2016</span></p>
        </div>
        <div className="courses">
          <p className="course-dot"><b>Certificate in Transformational Leadership Skills:</b></p>
          <p className="course-name" style={{ margin: '10px' }}>Kenyatta University, <span className="years">December 2013</span></p>
        </div>
        <div className="courses">
          <p className="course-dot"><b>Certificate on Entrepreneurial Promotion:</b></p>
          <p className="course-name" style={{ margin: '10px' }}>Kenyatta University, University of Luneberg (Germany), & UNESCO, <span className="years">November 2012</span></p>
        </div>
        <div className="courses">
          <p className="course-dot"><b>Introduction to GIS and remote sensing certificate:</b></p>
          <p className="course-name" style={{ margin: '10px' }}>Regional Center for Mapping of Resources for Development - Nairobi, <span className="years">April 2012</span></p>
        </div>
      </p>
      <div className="courses-title">
        <h3>Professional Associations</h3>
      </div>
      <p>
        <div className="course-container courses">
          <p className="course-name">Member, Board of Urban Environment:</p>
          <p className="course-dot" style={{ margin: '5px' }}><b>American Meteorological Society (AMS)</b></p>
        </div>
        <div className="course-container courses">
          <p className="course-name">Student Member:</p>
          <p className="course-dot" style={{ margin: '5px' }}><b>American Association of Geographers (AAG)</b></p>
        </div>
        <div className="course-container courses">
          <p className="course-name">Student Member:</p>
          <p className="course-dot" style={{ margin: '5px' }}><b>International Congress of Biometeorology (ICB)</b></p>
        </div>
        <div className="course-container courses">
          <p className="course-name">Student Member:</p>
          <p className="course-dot" style={{ margin: '5px' }}><b>International Association on urban Climate (IAUC)</b></p>
        </div>
        <div className="course-container courses">
          <p className="course-name">Member:</p>
          <p className="course-dot" style={{ margin: '5px' }}><b>NATURA Network</b></p>
        </div>
      </p>
      <ContactIcons />
    </article>
  </Main>
);

export default Index;
