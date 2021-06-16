import React from "react";
import Facebook from "../../images/icon-facebook.svg";
import Pinterest from "../../images/icon-pinterest.svg";
import Instagram from "../../images/icon-instagram.svg";

function Icons() {
  return (
    <div>
      <img src={Facebook} alt="facebook-icon" className="icon" />
      <img src={Pinterest} alt="pinterest-icon" className="icon" />
      <img src={Instagram} alt="instagram-icon" className="icon" />
    </div>
  );
}

export default Icons;
