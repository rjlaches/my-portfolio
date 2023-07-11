import React from 'react';
import './bootstrap.css';
import './custom.css';
import JS_img from './images/JavaScript.png';
import MongoDB_img from './images/mongoDB.png';
import Express_img from './images/express-js.png';
import NodeJS_img from './images/expressJS.png';
import React_img from './images/react.png';
import Redux_img from './images/redux.jpg';
import Bootstrap_img from './images/bootstrap.png';
import Figma_img from './images/figma.png';
import Azure_img from './images/azure.png';
import ASP_img from './images/ASPnet.png';
import CSharp_img from './images/CSharp.png';
import OracleSQL_img from './images/oracleSQL.png';
import MySQL_img from './images/MySQL.jpg';

function Skills(){
    return (
        <>  
            <div id="skills_"class="Skill-Container">
            <h1>Technical Skills</h1>
                <div>
                    <img src={JS_img} id="JS_img" class="listItem" alt="A JavaScript logo"></img>
                </div>
                <div>
                    <img src={MongoDB_img} id="MongoDB_img" class="listItem" alt="A MongoDB logo"></img>
                </div>
                <div>
                    <img src={Express_img} id="Express_img" class="listItem" alt="An ExpressJS logo"></img>
                </div>
                <div>
                    <img src={NodeJS_img} id="NodeJS_img" class="listItem" alt="A NodeJS logo"></img>
                </div>
                <div>
                    <img src={React_img} id="React_img" class="listItem" alt="A ReactJS logo"></img>
                </div>
                <div>
                    <img src={Redux_img} id="Redux_img" class="listItem" alt="A Redux logo"></img>
                </div>
                <div>
                    <img src={Bootstrap_img} id="Bootstrap_img" class="listItem" alt="A Bootstrap logo"></img>
                </div>
                <div>
                    <img src={Figma_img} id="Figma_img"  class="listItem" alt="A Figma logo"></img>
                </div>
                <div>
                    <img src={Azure_img} id="Azure_img" class="listItem" alt="An Azure logo"></img>
                </div>
                <div>
                    <img src={ASP_img} id="ASP_img" class="listItem" alt="An ASP.NET logo"></img>
                </div>
                <div>
                    <img src={CSharp_img} id="CSharp_img" class="listItem" alt="A C# logo"></img>
                </div>
                <div>
                    <img src={OracleSQL_img} id="OracleSQL_img" class="listItem" alt="An OracleSQL logo"></img>
                </div>
                <div>
                    <img src={MySQL_img} id="MySQL_img" class="listItem" alt="A MySQL logo"></img>
                </div>
            </div>
        </>
    );
};

export default Skills;