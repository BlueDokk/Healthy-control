import React from 'react';
import logoFooter from '../../assets/images/logo-footer.png';
import logoFooter2x from '../../assets/images/logo-footer@2x.png';
import logoFooterWebp from '../../assets/images/logo-footer.webp';
import logoFooterWebp2x from '../../assets/images/logo-footer@2x.webp';

export const Footer = ({ classes = "" }) => {
    return (
        <footer className={`block-footer ${classes}`}>

            <picture>
                <source type="image/webp"
                    srcSet={`${logoFooterWebp} 1x, ${logoFooterWebp2x} 2x`} />
                <source type="image/png"
                    srcSet={`${logoFooter} 1x, ${logoFooter2x} 2x`} />
                <img className="footer__image" src={logoFooter} alt="logo Healthy Control" />
            </picture>


            <p>Copyright© 2021 Healthy Control</p>
        </footer>
    )
}
