/*

   Step 1: Draw a circle
   Step 2: Animate it (make it grow)
*/
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let size = 0;
let posX = canvas.width/2;
let posY = canvas.height/2;

function drawFlower() {
   color = 'blue';
   border = 'white';

   size += .1;
   // posX += .1;
   // posY += .1;

   
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