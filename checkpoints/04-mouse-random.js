/*

   Step 8: Introduce Math.random()

   Math.random() returns a number between 0 and 1. Use this to replace
   various numeric values to create novel patterns and colors.

   If you want to vary one of the global parameters every mouse click, we
   need to move them into an argument and initialize them at the function
   call.
*/
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let scale = 12;
let size = 15;
const maxIterations = 500;

// uncomment to reverse the layering operation
ctx.globalCompositeOperation = 'destination-over';

function drawFlower(startX, startY, number, color) {
   // color = 'blue';
   border = 'white';

   let angle = number * 1.0;
   let radius = scale * Math.sqrt(number);

   if (number > maxIterations) return;
   number++;

   let posX = startX + radius * Math.sin(angle);
   let posY = startY + radius * Math.cos(angle);

   ctx.fillStyle = `hsl(${color}, 100%, 50%)`;
   // ctx.fillStyle = `hsl(${(number/maxIterations)*50+300}, 100%, 50%)`;
   // ctx.fillStyle = `hsl(300, ${(number/maxIterations)*100}%), 50%`;
   // ctx.fillStyle = `hsl(300, 100%, ${(number/maxIterations)*100}%)`;

   ctx.strokeStyle = border;
   ctx.lineWidth = 2;
   ctx.beginPath();
   ctx.arc(posX, posY, size, 0, Math.PI*2);
   ctx.closePath();
   ctx.fill();
   ctx.stroke();

   // Pass in the existing startX, startY, number so that we don't
   // have to keep them as global variables
   requestAnimationFrame(() => drawFlower(startX, startY, number, color+.1));
}

// drawFlower();
function getRelativeCoords(event) {
   const x = event.offsetX || event.layerX;
   const y = event.offsetY || event.layerY;
   drawFlower(x, y, 0, Math.random()*360);
   // drawFlower(x, y, 0, Math.random()*10, Math.random()*100);
}

document.getElementById('canvas').addEventListener('click', getRelativeCoords);
