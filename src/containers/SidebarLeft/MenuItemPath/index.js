import React from 'react';

import { Link } from 'react-router-dom';

const MenuItemPath = (props) => {
  const { target, name, path, icon } = props.item;

  return (
    <Link to={path} target={target}>
      {icon}
      <span>{name}</span>
    </Link>
  );
};

export default MenuItemPath;
