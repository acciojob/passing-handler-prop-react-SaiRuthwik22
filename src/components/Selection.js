import React from 'react';
import "../styles/App.css"

const Selection = ({ nextBackground }) => {
  const [backgroundColor, setBackgroundColor] = React.useState();


  const handle= () => {
    setBackgroundColor(nextBackground)
  };

  return (
    <div
      className="fix-box"
      onClick={()=>{handle()}}
  id={backgroundColor}
      style={{backgroundColor:backgroundColor}}
    >
      Select me
    </div>
  );
};

export default Selection;
