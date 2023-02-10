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
        paddingRight: 20,
        color: isActive ? '#F08080' : 'white'
      })}
    >
      {props.children}
    </NavLink>
  );
};

export default CustomLink;
