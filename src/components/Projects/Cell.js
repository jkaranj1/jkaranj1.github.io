import React from 'react';
import PropTypes from 'prop-types';

const Cell = ({ data }) => (
  <div className="cell-container">
    <article className="mini-post">
      <header>
        <h3>
          <div>{data.title}</div>
        </h3>
        <div style={{ 'margin-bottom': '10px' }}>
          <b>Karanja, J.</b>{data.authors}({data.year}). {data.paper}. <span style={{ 'font-style': 'italic' }}>{data.journal}</span>, {data.number}.
        </div>
      </header>
      <div className="image">
        <img src={`${process.env.PUBLIC_URL}${data.image}`} alt={data.title} />
      </div>
      <div className="description">
        <p style={{ 'text-align': 'justify' }}>{data.desc}<a href={data.link}>Link to paper.</a></p>
      </div>
    </article>
  </div>
);

Cell.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    authors: PropTypes.string,
    image: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    journal: PropTypes.string.isRequired,
    paper: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
  }).isRequired,
};

export default Cell;
