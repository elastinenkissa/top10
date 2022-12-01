import React from 'react';
import { NavLink } from 'react-router-dom';

interface LinkProps {
  to: string;
  children: string;
}

const CustomLink: React.FC<LinkProps> = (props) => {
  return (
    <NavLink
      to={props.to}
      style={({ isActive }) => ({
        color: 'white',
        borderColor: '#F08080',
        borderWidth: '0.1rem',
        borderStyle: 'solid',
        padding: 5,
        backgroundColor: isActive ? '#F08080' : 'transparent',
      })}
    >
      {props.children}
    </NavLink>
  );
};

export default CustomLink;
