/*

   Step 3: Make it wiggle, move in a circle
*/
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let size = 50;
let posX = canvas.width/2;
let posY = canvas.height/2;
let angle = 0;

function drawFlower() {
   color = 'blue';
   border = 'red';
   
   let radius = 5;
   angle += .1;
   posX += radius * Math.sin(angle);
   posY += radius * Math.cos(angle);
   angle += .1;

   
   ctx.fillStyle = color;
   ctx.strokeStyle = border;
   ctx.lineWidth = 2;
   ctx.beginPath();
   // arc at posX, posY, radius `size`, go from 0 deg to Math.PI*2 deg
   ctx.arc(posX, posY, size, 0, Math.PI*2);
   ctx.closePath();
   ctx.fill();
   ctx.stroke();
   
   requestAnimationFrame(drawFlower);
}

drawFlower();