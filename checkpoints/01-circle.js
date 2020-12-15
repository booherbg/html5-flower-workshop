/*

   Step 1: Draw a circle
   Step 2: Animate it (grow)
   Step 3: Make it move on y-axis
      First with trail
      Second with clearing canvas
   Step 4: Make it wiggle (trig)
   Step 5: Make it move in a circle
      First without trail
      Second with trail
   Step 6: 
*/
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const size = 100;

function drawFlower() {
   color = 'blue';
   border = 'white';

   posX = canvas.width/2;
   posY = canvas.height/2;

   ctx.fillStyle = color;
   ctx.strokeStyle = border;
   ctx.lineWidth = 2;
   ctx.beginPath();
   ctx.arc(posX, posY, size, 0, Math.PI*2);
   ctx.closePath();
   ctx.fill();
   ctx.stroke();
   // requestAnimationFrame(drawFlower);
}

drawFlower();