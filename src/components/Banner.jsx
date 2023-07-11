import React from 'react';
import './bootstrap.css';
import './custom.css';
import image from './images/banner_image.jpg';

function Banner(){
    return(
        <>
         <div class="banner">
            <div class="text-center mt-5" >
                <h1 id="bannerText">Ryan Laches</h1>
                <h2>Aspiring Full-Stack Developer</h2>
                <img src={image} id="bannerImage" alt="A banner image that says Web Development"></img>
            </div>
        </div>
        </>
    );
};

export default Banner;