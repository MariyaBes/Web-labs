import React from "react";

export default function Toolbar() {
    function playAlert () {
        alert('Playing!');
    }

    function uploadAlert () {
        alert('Uploading!');
    }

    function toolbar (e) {
        e.stopPropagation();
        alert('You clicked on the toolbar!');
    }

    return (
      <div className="Toolbar" onClick={toolbar}>
        <button onClick={playAlert}>
          Play Movie
        </button>
        <button onClick={uploadAlert}>
          Upload Image
        </button>
      </div>
    );
  }
  