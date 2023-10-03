import React from "react";

export default function Signup() {
    function submit (event) {
        event.preventDefault();
        alert('Submitting!');
    }

    return (
      <form>
        <input />
        <button onClick={submit}>Send</button>
      </form>
    );
  }
  