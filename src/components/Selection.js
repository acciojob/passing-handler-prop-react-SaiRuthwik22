import React from 'react';

const Selection = ({ applyColor, nextBackground }) => {
  const handleClick = () => {
    applyColor(nextBackground);
  };

  return (
    <div
      className="selection"
      style={{ background: nextBackground.background }}
      onClick={handleClick}
    >
      Select me
    </div>
  );
};

export default Selection;
