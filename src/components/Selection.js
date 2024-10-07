import React from 'react';
import "../styles/Child.css"

const Selection = ({ nextBackground }) => {
  const [backgroundColor, setBackgroundColor] = React.useState({background:""});


  const handle= () => {
    setBackgroundColor(nextBackground)
  };

  return (
    <div
      className="fix-box"
      onClick={()=>{handle()}}
      id={backgroundColor}
      style={{backgroundColor:backgroundColor.background}}
    >
      Select me
    </div>
  );
};

export default Selection;
