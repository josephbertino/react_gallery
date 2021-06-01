import React from 'react';

const NavLink = props => {
  return (
    <li>
      <a href='#'>{props.query}</a>
    </li>
  )
}

export default NavLink;