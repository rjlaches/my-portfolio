import React from 'react';
import './bootstrap.css';
import './custom.css';
function Navigation() {
    return (
        <>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark navigation">
            <div class="container">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li class="nav-item"><a class="nav-link active" aria-current="page" href="index.html">Home</a></li>
                        <li class="nav-item"><a class="nav-link" href="#main_">About Me</a></li>
                        <li class="nav-item"><a class="nav-link" href="#skills_">My Skills  </a></li>
                        <li class="nav-item"><a class="nav-link" href="#work_">Previous Work</a></li>
                        <li class="nav-item"><a class="nav-link" href="#footer_">    Contact Me</a></li>
                    </ul>
                </div>
            </div>
        </nav>
        </>
    );
};

export default Navigation;


