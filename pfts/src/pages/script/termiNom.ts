/* eslint-disable @typescript-eslint/no-redeclare */
/* eslint-disable no-useless-concat */

import React from "react";



var password = "Berserkyay";
var linkedin = "https://www.linkedin.com/in/loiczeiss/";
var instagram = "https://www.instagram.com/franktheriviere/";
var github = "https://github.com/loiczeiss";
var email = "mailto:loiczeiss@gmail.com";
var figma = "https://www.figma.com/file/1zpzpT9aw0BIqSwfwxPHVp/inside-my-head?node-id=28%3A2"
var got = "https://loiczeiss.github.io/"

const whoishe = [
  "<br>",
  "Hey, I'm Loïc!ðŸ‘‹",
  "I'm a future Front-End developer and content creator, </br>who builds emotions into interfaces.",
  "In this experience, I'll try to display my coding skills </br>as well as my creativity.",
  "For years, I've been keeping memories of my darkest thoughts, </br>my brightest ideas",
  "but mostly kept it to myself due to shyness and anxiety. </br>I'm mostly convinced I am",
  "a part of the next generation of creators and </br>it is time I claim my place.",
  "<br>"
];

const whoami = [
  "<br>",
  "Who am I, What am I... A question for the philosophers! ",
  "well, mewtwo asked himself too and didn't find out",
  "<br>"
];

const social = [
  "<br>",
  'linkedin       <a href="' + linkedin + '" target="_blank">linkedin/loiczeiss' + "</a>",
  'instagram      <a href="' + instagram + '" target="_blank">instagram/franktheriviere' + '</a>',
  'github         <a href="' + github + '" target="_blank">github/loiczeiss' + "</a>",
  "<br>"
];

const secret = [
  "<br>",
  '<span class="command">sudo</span>           Only use if you\'re admin',
  "<br>"
];

const projects = [
  "<br>",
  'got hangman     <a href="' + got + '" target="_blank">GoT Hangman' + '</a>',
  "<br>"
];

const drawings = [
  "<br>",
  'figma      <a href="' + figma + '" target="_blank">figma/mock-ups' + '</a>',
  "<br>"
];


const help = [
  "<br>",

  '<span class="command">whoishe</span>       </br> Who is Frank',
  '<span class="command">whoami</span>         </br>Big question for a little fellow like you mate',
  '<span class="command">social</span>         </br>Display social networks (and die)',

  '<span class="command">projects</span>       </br>View coding projects',
  '<span class="command">drawings</span>      </br> View Drawing projects',
  '<span class="command">history</span>       </br> View command history, your memory is in an even worst state </br>than your face... gosh',
  '<span class="command">help</span>           </br>It does feel kind of redondant innit...',
  '<span class="command">email</span>         </br> Do not email me, it is not a drill, DO NOT',
  '<span class="command">clear</span>         </br> Clear terminal and feel that splendid cathartic feeling... </br>oh god',
  '<span class="command">banner</span>        </br> Reenter my mind, circle my brain, enter my spirit, </br>penetrate my soul you mulish boy',
  '<span class="command">secret</span>        </br> Find the password (or die)',
  "<br>",
];

const banner = [
  "<span class='index'>- Frank's consciousness entering............. </span>",
  '<span style="color:red">  error, psychosis found! AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA<br/>  Escape while you can!!!!',
  '<span>  overwriting... All clear<br>  Mind rested, pathovirus exterminated',
  
  '<span class="color2">  Welcome to my interactive brain terminal.</span>',
  "<span class=\"color2\">  For a list of available commands, type</span> <span class=\"command\">  'help'</span><span class=\"color2\">  </span>",
]; 

var before = document.getElementById("before") as  HTMLElement | null
var liner = document.getElementById("liner") as  HTMLInputElement
var command = document.getElementById("typer") as  HTMLInputElement 
var textarea = document.getElementById("texter") as  HTMLInputElement
var terminal = document.getElementById("terminal") as  HTMLInputElement

var git = 0;
var pw = false;
let pwd = false;
var commands: any[] = [];

setTimeout(function() {
  loopLines(banner, "", 80);
  textarea?.focus();
}, 100);

window.addEventListener("keyup", enterKey);

console.log(
  "%cYou hacked my password!ðŸ˜ ",
  "color: #04ff00; font-weight: bold; font-size: 24px;"
);
console.log("%cPassword: '" + password + "' - I wonder what it does?ðŸ¤”", "color: grey");

//init
var initi = [
textarea.value = "",
command.innerHTML = textarea.value]

function enterKey(e: { keyCode: number }) {
  if (e.keyCode == 181) {
    document.location.reload();
  }
  if (pw) {
    let et = "*";
    let w = textarea.value.length;
    command.innerHTML = et.repeat(w);
    if (textarea.value === password) {
      pwd = true;
    }
    if (pwd && e.keyCode == 13) {
      loopLines(secret, "color2 margin", 120);
      command.innerHTML = "";
      textarea.value = "";
      pwd = false;
      pw = false;
      liner.classList.remove("password");
    } else if (e.keyCode == 13) {
      addLine("Wrong password", "error", 0);
      command.innerHTML = "";
      textarea.value = "";
      pw = false;
      liner.classList.remove("password");
    }
  } else {
    if (e.keyCode == 13) {
      commands.push(command.innerHTML);
      git = commands.length;
      addLine("consciousness@user:-$" + command.innerHTML, "no-animation", 0);
      commander(command.innerHTML.toLowerCase());
      command.innerHTML = "";
      textarea.value = "";
    }
    if (e.keyCode == 38 && git != 0) {
      git -= 1;
      textarea.value = commands[git];
      command.innerHTML = textarea.value;
    }
    if (e.keyCode == 40 && git != commands.length) {
      git += 1;
      if (commands[git] === undefined) {
        textarea.value = "";
      } else {
        textarea.value = commands[git];
      }
      command.innerHTML = textarea.value;
    }
  }
}

function commander(cmd: string) {
  switch (cmd.toLowerCase()) {
    case "drawings":
      loopLines(drawings, "color2 margin", 80);
      break;
    case "help":
      loopLines(help, "color2 margin", 80);
      break;
    case "whoishe":
      loopLines(whoishe, "color2 margin", 80);
      break;
    case "whoami":
      loopLines(whoami, "color2 margin", 80);
      break;

    case "sudo":
      addLine("Oh no, you're not admin...", "color2", 80);
      setTimeout(function() {
        window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
      }, 1000); 
      break;
    case "social":
      loopLines(social, "color2 margin", 80);
      break;
    case "secret":
      liner.classList.add("password");
      pw = true;
      break;
    case "projects":
      loopLines(projects, "color2 margin", 80);
      break;
    case "password":
      addLine("<span class=\"inherit\"> Lol! You're joking, right? You\'re gonna have to try harder than that!ðŸ˜‚</span>", "error", 100);
      break;
    case "history":
      addLine("<br>", "", 0);
      loopLines(commands, "color2", 80);
      addLine("<br>", "command", 80 * commands.length + 50);
      break;
    case "email":
      addLine('Opening mailto:<a href="mailto:loiczeiss@gmail.com">loiczeiss@gmail.com</a>...', "color2", 80);
      newTab(email);
      break;
    case "clear":
      setTimeout(function() {
        terminal.innerHTML = '<a id="before"></a>';
        before = document.getElementById("before");
      }, 1);
      break;
    case "banner":
      loopLines(banner, "", 80);
      break;
    // socials

    case "linkedin":
      addLine("Opening LinkedIn...", "color2", 0);
      newTab(linkedin);
      break;
    case "instagram":
      addLine("Opening Instagram...", "color2", 0);
      newTab(instagram);
      break;
    case "github":
      addLine("Opening GitHub...", "color2", 0);
      newTab(github);
      break;
    default:
      addLine("<span class=\"inherit\">Command not found. For a list of commands, type <span class=\"command\">'help'</span>.</span>", "error", 100);
      break;
  }
}

function newTab(link: string | URL | undefined) {
  setTimeout(function() {
    window.open(link, "_blank");
  }, 500);
}

function addLine(text: string, style: string, time: number | undefined) {
  var t = "";
  for (let i = 0; i < text.length; i++) {
    if (text.charAt(i) == " " && text.charAt(i + 1) == " ") {
      t += "&nbsp;&nbsp;";
      i++;
    } else {
      t += text.charAt(i);
    }
  }
  setTimeout(function() {
    var next = document.createElement("p");
    next.innerHTML = t;
    next.className = style;

    before?.parentNode?.insertBefore(next, before);

    window.scrollTo(0, document.body.offsetHeight);
  }, time);
}

function loopLines(name: any[], style: string, time: number) {
  name.forEach(function(item: any, index: number) {
    addLine(item, style, index * time);
  });
}
function $(elid: string) {
  return document.getElementById(elid);
}

var cursor: HTMLElement ;
window.onload = init;

function init() {
cursor = $("cursor") as HTMLInputElement;
cursor.style.left = "0px";
}

function nl2br(txt: string) {
return txt.replace(/\n/g, '');
}


function typeIt(from: { value: any; }, e: React.KeyboardEvent ) {
e = e || window.event;
var w = $("typer") as HTMLInputElement;
var tw = from.value;
if (!pw){
  w.innerHTML = nl2br(tw);
}
}

function moveIt(count: number, e: React.KeyboardEvent,) {
e = e || window.event;
var keycode = e.keyCode || e.which;
if (keycode == 37 && parseInt(cursor.style.left) >= (0 - ((count - 1) * 10))) {
  cursor.style.left = parseInt(cursor.style.left) - 10 + "px";
} else if (keycode == 39 && (parseInt(cursor.style.left) + 10) <= 0) {
  cursor.style.left = parseInt(cursor.style.left) + 10 + "px";
}
}

function alert(txt: any) {
console.log(txt);
}
const comCli  = () => document.getElementById("texter")?.focus
document.getElementById("command")?.addEventListener("click", comCli)
export {comCli}
export{ password }
export { linkedin }
export { instagram }
export {github}
export { email}
export {figma}
export {got}
export {whoishe}
export {whoami}
export {social}
export { secret}
export {projects}
export {drawings}
export {help}
export {banner}
export {before}
export{liner}
export{command}
export{textarea}
export{terminal}
export{git}
export{pw}
export{pwd}
export{commands}
export{loopLines}
export{enterKey}
export {initi}
export{commander}
export{newTab}
export{addLine}
export {$}
export{cursor}
export{init}
export{nl2br}
export{typeIt}
export {alert}