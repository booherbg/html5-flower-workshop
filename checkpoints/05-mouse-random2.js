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

let scale = 12; // LEVER: Change this
let size = 15; // LEVER: Change this
const maxIterations = 500;

// uncomment to reverse the layering operation
// ctx.globalCompositeOperation = 'destination-over';


function drawFlower(startX, startY, number, color) {
   border = 'white';

   // LEVER: change 1.0 to something else
   let angle = number * 1;
   let radius = scale * Math.sqrt(number);

   if (number > maxIterations) return;
   number = number + 1; // LEVER: change + 1 to something else

   let posX = startX + radius * Math.sin(angle);
   let posY = startY + radius * Math.cos(angle);

   // pass in the color from the argument
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

   // Add the current color to the function call but update it a little bit
   // by adding some value to it. Larger values = more severe gradients
   // LEVER: Change this
   color = color + .1
   requestAnimationFrame(() => drawFlower(startX, startY, number, color));
}

// drawFlower();
function getRelativeCoords(event) {
   const x = event.offsetX || event.layerX;
   const y = event.offsetY || event.layerY;

   // Pass in a random color as the fourth parameter (between 0 and 360)
   drawFlower(x, y, 0, Math.random()*360);

   // Make each click spawn off the same flower but with slightly different
   // starting numbers (potential for crazy stuff when combined with 
   // `destination-over` compositing)
   // drawFlower(x, y, .1, Math.random()*360);
   // drawFlower(x, y, .2, Math.random()*360);
   // drawFlower(x, y, .3, Math.random()*360);
   // drawFlower(x, y, .4, Math.random()*360);
   // drawFlower(x, y, .5, Math.random()*360);
   // drawFlower(x, y, .6, Math.random()*360);
   // drawFlower(x, y, .7, Math.random()*360);
   // drawFlower(x, y, .8, Math.random()*360);
   // drawFlower(x, y, .9, Math.random()*360);

}

document.getElementById('canvas').addEventListener('click', getRelativeCoords);
