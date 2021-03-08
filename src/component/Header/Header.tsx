import React from "react";
import Logo from "./Logo";

import "./Header.scss";

/**
 * Header component.
 */
const Header: React.FC = () => (
  <header data-testid="header" className="wrapper--header">
    <div aria-label="BT News App" tabIndex={0}>
      <div className="header--logo">
        <Logo />
      </div>
    </div>
  </header>
);

export default Header;
