/*

import $, { event } from 'jquery'
import { isBindingElement } from 'typescript'

import { password } from "./script/termiNom"
import  { linkedin } from "./script/termiNom"

import  { instagram }  from "./script/termiNom"
import  {github}  from "./script/termiNom"
import  { email}  from "./script/termiNom"
import  {figma}  from "./script/termiNom"
import  {got}  from "./script/termiNom"
import  {whoishe}   from "./script/termiNom"
import  {whoami}  from "./script/termiNom"
import  {social}  from "./script/termiNom"
import  { secret}  from "./script/termiNom"
import  {projects}  from "./script/termiNom"
import  {drawings}  from "./script/termiNom"
import  {help}   from "./script/termiNom"
import  {banner}  from "./script/termiNom"
import  {before}  from "./script/termiNom"
import {liner}  from "./script/termiNom"
import {command}  from "./script/termiNom"
import {textarea}  from "./script/termiNom"
import {terminal}  from "./script/termiNom"
import {git}  from "./script/termiNom"
import {pw} from "./script/termiNom"
import {pwd}  from "./script/termiNom"
import {commands} from "./script/termiNom"
import {loopLines} from "./script/termiNom"
import {enterKey} from "./script/termiNom"
import  {initi} from "./script/termiNom"
import {commander} from "./script/termiNom"
import {newTab} from "./script/termiNom"
import {addLine} from "./script/termiNom"
import  {$} from "./script/termiNom"
import {cursor} from "./script/termiNom"
import {init} from "./script/termiNom"
import {nl2br} from "./script/termiNom"
import {typeIt} from "./script/termiNom"
import  {alert} from "./script/termiNom"
*/

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
      <div id="command" /*onClick={document.getElementById("texter")?.focus()}*/>
      <textarea

      id="texter"
      /*onKeyUp={typeIt(this, event)}
      onkeydown="typeIt(this, event); 
                 moveIt(this.value.length, event)"
      onkeypress="typeIt(this, event);"
      autofocus*/
      ></textarea>
        <div id="liner">
          <span id="typer" /><b className="cursor" id="cursor">█</b>
        </div>
      </div>
    </div>
  </div>
</div>
</div>


const Terminal=()=> <div> {myHtml2
      
}</div>
 
export default Terminal