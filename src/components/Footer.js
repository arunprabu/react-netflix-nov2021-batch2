// Fn com with Anonymous Fn 
import React from 'react';
import Menu from './Menu';


const Footer = function () {
  // ideal place to keep data within comp 
  const year = 2021; 

  return (
    <footer className="text-center">
      <hr />
      <Menu />

      <p>Copyright { year } - Arun</p>
    </footer>
  )
}

export default Footer;