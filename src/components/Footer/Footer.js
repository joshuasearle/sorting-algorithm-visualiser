import React from 'react';
import Logo from '../../assets/GitHub-Mark-Light-32px.png';

import classes from './Footer.module.css';

const Footer = () => {
  return (
    <div className={classes.Footer}>
      <p>See the source code on github</p>
      <a href='https://github.com/joshuasearle/sorting-algorithm-visualiser'>
        <img className={classes.Image} src={Logo} alt='GitHub Logo'></img>
      </a>
    </div>
  );
};

export default Footer;
