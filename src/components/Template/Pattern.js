import React from 'react';

// const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const Pattern = () => {
  const elements = [];

  for (let i = 0; i < 4; i += 1) {
    elements.push(<img className="african" src={`${process.env.PUBLIC_URL}${'/images/african_pattern_2.jpg'}`} alt="research statement" />);
  }
  return elements;
};

export default Pattern;
