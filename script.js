/* galaxy */

const galaxy=document.getElementById("galaxy");
const gctx=galaxy.getContext("2d");

galaxy.width=window.innerWidth;
galaxy.height=window.innerHeight;

let stars=[];

for(let i=0;i<200;i++){

stars.push({
x:Math.random()*galaxy.width,
y:Math.random()*galaxy.height,
speed:Math.random()*0.5+0.2
});

}

function animateStars(){

gctx.clearRect(0,0,galaxy.width,galaxy.height);

gctx.fillStyle="white";

stars.forEach(s=>{

gctx.fillRect(s.x,s.y,2,2);

s.y+=s.speed;

if(s.y>galaxy.height)s.y=0;

});

requestAnimationFrame(animateStars);

}

animateStars();



/* pages */

function show(id){

document.querySelector(".active").classList.remove("active");
document.getElementById(id).classList.add("active");

}



function startGame(){

show("slot");

}



/* gift generator */

const gifts=[
"Dry Fruit Mix 🌰",
"Big Cadbury Chocolate 🍫",
"Teddy Bear 🧸",
"Ice Cream Truck 🍦",
"Pizza Party 🍕"
];

function spin(){

let slot=document.getElementById("slotGift");

let count=0;

let spinInterval=setInterval(()=>{

slot.innerText=gifts[Math.floor(Math.random()*gifts.length)];

count++;

if(count>10){

clearInterval(spinInterval);

document.getElementById("giftName").innerText=slot.innerText;

show("decision");

}

},100);

}



/* approval */

let approval=0;

function approve(){

approval+=25;

document.getElementById("meter").style.width=approval+"%";

if(approval>=75){

show("final");

}else{

show("slot");

}

}



/* reject with AI voice */

function reject(){

let msg=new SpeechSynthesisUtterance("Rejected!");

speechSynthesis.speak(msg);

show("slot");

}



/* panda reveal */

function pandaReveal(){

show("panda");

startSparks();

}



/* panda sparks */

const sparksCanvas=document.getElementById("sparks");
const sctx=sparksCanvas.getContext("2d");

sparksCanvas.width=window.innerWidth;
sparksCanvas.height=window.innerHeight;

function startSparks(){

setInterval(()=>{

let x=Math.random()*sparksCanvas.width;
let y=Math.random()*sparksCanvas.height;

sctx.beginPath();
sctx.arc(x,y,3,0,Math.PI*2);

sctx.fillStyle=`hsl(${Math.random()*360},100%,60%)`;
sctx.fill();

},50);

}
