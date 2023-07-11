import React from 'react';
import './bootstrap.css';
import './custom.css';

function Footer(){
    return (
    <>
        <footer id="footer_">
            <h2>Contact Me</h2>
        <div class="footer-icons">
          <a href="mailto:rjlaches@my.waketech.edu" target="_blank" class="fa fa-envelope fa-4x"></a>
          <a href="tel:9199489203" target="_blank" class="fa fa-phone fa-4x"></a>
          <a href="https://www.facebook.com/rjlaches/" target="_blank" class="fa fa-facebook-square fa-4x"></a>  
          <a href="https://www.linkedin.com/in/ryan-laches-80185b118/" target="_blank" class="fa fa fa-linkedin fa-4x"></a>   
          <a href="https://github.com/RyanLaches" target="_blank" class="fa fa-github fa-4x"></a>
        </div>
        </footer>
    </>
    );
};


export default Footer;