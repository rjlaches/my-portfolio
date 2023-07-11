import React from 'react';
import './bootstrap.css';
import './custom.css';
import kurakats from "./images/kurakats.png";
import family from "./images/familyBicycle.png";

function Work(){
    return (
    <>
        <div class="Work-Container" id="work_">
        <h1>Previous Work</h1><br/>
        <div>
   
            <h2 id="katsTitle">Kurakats Website</h2>
            <p id="katsInfo">
                This is a mock website I designed as a final project for WEB-210. I actually know this cat breeder,
                and have adopted two cats from them. I help him manage his actual website, and I'm working on creating 
                a new design to replace the current one. I also have helped optimize the actual Kurakats.com SEO, and they
                noticed an up-tick in adoptions after making this change (along with increasing social media prescence). 
            </p>
            <img src={kurakats} id="kurakats_img" class="workItem" alt="Kurakats Website"></img>
           
        </div>
        <div>
            <h2 id="famTitle">Family Bicycle Website</h2>
            <img src={family} id="family_img" class="workItem" alt="A website for Family Bicycle"></img>
            <p id="famInfo">
                This is a mock website I created as a final project for WEB-140. This is one of my older projects, and I 
                created it with only vanilla HTML and CSS. It isn't the prettiest, but it's something I hand-coded by myself 
                during the beginning of my education. 
            </p>
        </div>
        </div>
    </>
    );
};

export default Work;