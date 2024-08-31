// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';

// eslint-disable-next-line react/prop-types
const Button = ({ width, height, color, text, borderRadius }) => {
  const [isHovered, setIsHovered] = useState(false);

  const buttonStyle = {
    width: width || '100px',
    height: height || '40px',
    backgroundColor: color || '#007BFF',
    borderRadius: borderRadius || '5px',
    color: '#fff',
    border: '0.1px solid red',
    boxShadow: '1px 1px 1px 1px red',
    cursor: 'pointer',
    ...(isHovered && {
      backgroundColor: '#ffffffa5', // Cambia el color de fondo al hacer hover
      boxShadow: '2px 2px 5px 2px red', // Cambia la sombra al hacer hover
    }),
  };

  return (
    <button
      style={buttonStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {text || 'Button'}
    </button>
  );
};

export default Button;
