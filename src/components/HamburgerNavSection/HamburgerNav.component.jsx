import React from 'react';
import PropTypes from 'prop-types';

const HamburgerLink = props => {
  const{text, scrollTo} = props;
  
  const styles = {
    bmBurgerBars: {
      background: '#ffffff'
    }
  }
  return(
    <a href={`#${scrollTo}`} style={styles} className="p-8 text-white">{text}</a>
  );
};

export default HamburgerLink;