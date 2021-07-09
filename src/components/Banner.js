import React from 'react';
import banner from '../assets/images/banner.png';
import banner2x from '../assets/images/banner@2x.png';
import bannerWebp from '../assets/images/banner@2x.webp';
import bannerWebp2x from '../assets/images/banner@2x.webp';



export const Banner = () => {
    return (
        <div className="block-banner col-lg-7 d-none d-md-none d-lg-block">

            <h2 className="banner__title animate__animated animate__fadeInDown">CALCULATE <br />YOUR BMI</h2>

            <picture>
                <source type="image/webp"
                    srcSet={`${bannerWebp} 1x, ${bannerWebp2x} 2x`} />
                <source type="image/png"
                    srcSet={`${banner} 1x, ${banner2x} 2x`} />
                <img className="banner__image animate__animated animate__fadeInRight" src={banner} alt="banner" />
            </picture>


            <p className="banner__text animate__animated animate__fadeInUp">Keep track of your body mass index and take care of your health!</p>

        </div>
    )
}
