import React from "react";

function Box({ number, text }) {
  return (
    <div>
      <div className="box">
        <p>{number}</p>
      </div>
      <p className="box-text">{text}</p>
    </div>
  );
}

export default Box;
