import React from 'react';
import logoFooter from '../../assets/images/logo-footer.png';
// import logoFooter2x from '../../assets/images/logoFooter@2x.png';
// import logoFooterWebp from '../../assets/images/logoFooter.webp';
// import logoFooterWebp2x from '../../assets/images/logoFooter@2x.webp';

export const Footer = () => {
    return (
        <footer className="block-footer">
            <img className="footer__image" src={logoFooter} alt="logo Healthy Control" />
            <p>Copyright© 2021 Healthy Contro</p>
        </footer>
    )
}
