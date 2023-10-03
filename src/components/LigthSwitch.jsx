import React from "react";

export default function LightSwitch() {
    function handleClick() {
      let bodyStyle = document.body.style;
        
        console.log(bodyStyle);
      if (bodyStyle.backgroundColor === 'black') {
        bodyStyle.backgroundColor = 'white';
        console.log(bodyStyle);
      } else {
        bodyStyle.backgroundColor = 'black';
        console.log(bodyStyle);
      }
    }

    return (
      <button onClick={handleClick}>
        Toggle the lights
      </button>
    );
  }
  