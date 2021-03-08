import React from 'react';
import '../assets/styles/components/Footer.scss';

const footerTermsOfUse = 'Términos de uso';
const footerPrivacy = 'Declaración de privacidad';
const footerHelpCenter = 'Centro de ayuda';

const Footer = () => (
  <footer className="footer">
    <a href="/">{footerTermsOfUse}</a>
    <a href="/">{footerPrivacy}</a>
    <a href="/">{footerHelpCenter}</a>
  </footer>
);

export default Footer;
