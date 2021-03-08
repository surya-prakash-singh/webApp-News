import React from 'react';

import "./Footer.scss";

/**
 * Footer component.
 */
const Footer: React.FC = () => (
  <footer data-testid="footer" className="wrapper-footer wrapper--footer-absolute">
    <p className="footer--text" aria-label="Copyright British Telecom Group" tabIndex={0}> &#169; British Telecom Group</p>
    </footer>

);

export default Footer;
