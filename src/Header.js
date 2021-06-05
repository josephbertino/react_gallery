import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = props => {
  return (
    <h1 className="header">
      <NavLink to={'/'}>React Gallery App</NavLink>
    </h1>
  )
}

export default Header;