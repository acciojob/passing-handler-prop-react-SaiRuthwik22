import React from 'react';
 
const ColourSelector = (props) => {
  const { config, selectNextBackground } = props;
  const { label, background, classname } = config;
 
  const buttonStyle = {
    backgroundColor: background,
    border: 'none',
    color: '#fff',
    padding: '10px 20px',
    textAlign: 'center',
    textDecoration: 'none',
    display: 'inline-block',
    fontSize: '16px',
    margin: '4px 2px',
    cursor: 'pointer'
  };
 
  return (
    <button 
      style={buttonStyle}
      onClick={() => selectNextBackground(background)}
    >
      {label}
    </button>
  );
}
 
export default ColourSelector;
