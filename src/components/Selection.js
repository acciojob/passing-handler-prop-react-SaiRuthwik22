import React, { useState } from 'react';
 
const Selection = (props) => {
  const [background, setBackground] = useState('');
 
  const { applyColor, colorId } = props;
 
  const handleClick = () => {
    applyColor(setBackground);
  };
 
  const boxStyle = {
    width: '100px',
    height: '100px',
    border: '1px solid #ccc',
    margin: '10px',
    display: 'inline-block',
    backgroundColor: background,
    cursor: 'pointer'
  };
 
  return (
    <div 
      style={boxStyle}
      className="fix-box"  // Add the class name "fix-box"
      onClick={handleClick}
      data-testid={colorId}  // Add data-testid attribute
    >
      Selection
    </div>
  );
}
 
export default Selection;
