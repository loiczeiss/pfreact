import $ from 'jquery'

/* eslint-disable @typescript-eslint/no-unused-vars */
var before = document.getElementById("before");
var liner = document.getElementById("liner");
var command = document.getElementById("typer"); 
var textarea = document.getElementById("texter"); 
var terminal = document.getElementById("terminal");



const myHtml2 = <div>
{/* Global site tag (gtag.js) - Google Analytics */}
<meta charSet="utf-8" />
<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>Inside my head</title>
<link rel="stylesheet" type="text/css" media="screen" href="ter.css" />
<link rel="icon" type="image/x-icon" href="img/fav-icon.png" />
<div className="img">  
  <div className="grid">
    <div className="row">
      <div id="terminal">
        <p id="before" />
      </div>
      <div id="command"  onClick={() => "$('texter').focus();"} >
        <textarea />
        <div id="liner">
          <span id="typer" /><b className="cursor" id="cursor">█</b>
        </div>
      </div>
    </div>
  </div>
</div>
</div>



const  Terminal=()=> <div> {myHtml2
      
}</div>

 
export default Terminal