import React from "react";
import { ReactComponent as Facebook } from "../../images/icon-facebook.svg";
import { ReactComponent as Pinterest } from "../../images/icon-pinterest.svg";
import { ReactComponent as Instagram } from "../../images/icon-instagram.svg";

function Icons() {
  return (
    <div>
      <Facebook className="icon" />
      <Pinterest className="icon" />
      <Instagram className="icon" />
    </div>
  );
}

export default Icons;
