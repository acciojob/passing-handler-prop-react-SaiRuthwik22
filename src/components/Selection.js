import React from 'react';
import '../styles/Selection.css';

const Selection = (props) => {   
    function handle(e){
        e.target.style.backgroundColor = applyColor.background;
    }
   
    const { applyColor } = props;
    return (
        <div className='fix-box' onClick={(e) => {handle(e)}}> 
            <h2>Selection</h2>       
        </div>
    )
}

export default Selection;
