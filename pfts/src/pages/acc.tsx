import React from "react";
import ReactDOM from "react-dom";

import Terminal from "./terminal";

 const Chpg=()=> 
{ReactDOM.render(
  <div>
  <Terminal />
  </div>,
    document.getElementById("root")
  );
}


const myHtml = 
<div>
  <meta charSet="UTF-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>PortFolio's experience</title>
  <link rel="stylesheet" href="style.css" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" />
  <link href="https://fonts.googleapis.com/css2?family=Rubik+Marker+Hatch&display=swap" rel="stylesheet" />
  <div className="container">
    <div className="milieu">
      <h1 className="title" >Lucid dreaming</h1>  
    <br />
      <h2 className="exp">A Loïc Zeiss' PortFolio experience</h2>
      <div className="container2">
<label >
  
  <input className="check" type="checkbox" />
  <div className="btn"  onClick={Chpg}>

    <span className="me">Start the experience</span>
    <span className="mo">Hang on a moment, processing brain's connection</span>
  </div>
</label>
</div>
  </div>
    <div className="ecran">
     <br /></div>
  </div>
 
</div>




const Accueil=()=> <div> {myHtml
      
}</div>

 
export default Accueil
