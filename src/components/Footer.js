// Fn com with Anonymous Fn 
import React, { Fragment } from 'react';
import Menu from './Menu';

const Footer = function () {
  // ideal place to keep data within comp 
  const year = 2021;

  return (
    <Fragment>
      <footer className="text-center">
        <hr />
        <Menu />

        <p className="redText">Copyright {year} - Arun</p>
      </footer>
      <p className="text-center">Happily made during a training in Nov 2021</p>
    </Fragment>
  )
}

export default Footer;