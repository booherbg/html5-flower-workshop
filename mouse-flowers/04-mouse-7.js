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



let scale = 6;
// let size = 30;

function drawFlower(startX, startY, number, rando, color, size) {
   // color = 'blue';
   border = 'white';

   let angle = number * 3;
   let radius = scale * Math.sqrt(number);

   if (number > 800) return;

   if (number > 250) {
      size *= .99;
      // scale = 12;
   } else if (number > 200) {
      size *= 1.01;
   } else {
      // scale = 5;
      size *= 1.001;
   }

   let posX = startX + radius * Math.sin(angle);
   let posY = startY + radius * Math.cos(angle);

   ctx.fillStyle = 'hsl(' + color +', 100%, 50%)';
   ctx.strokeStyle = border;
   ctx.lineWidth = 2;
   ctx.beginPath();
   ctx.arc(posX, posY, size, 0, Math.PI*2);
   ctx.closePath();
   ctx.fill();
   ctx.stroke();
   // setTimeout(drawFlower, 1);
   requestAnimationFrame(() => drawFlower(startX, startY, number += 1, rando, color+.2, size));
}

// drawFlower();

function getRelativeCoords(event) {
   const x = event.offsetX || event.layerX;
   const y = event.offsetY || event.layerY;
   drawFlower(x, y, 0, Math.random()*3, Math.random()*300, 12);
   // drawFlower(x, y, 0, Math.random()*10, Math.random()*100);
   console.log( x, y );
   console.log(document.getElementById("canvas").toDataURL());
}

ctx.globalCompositeOperation = 'destination-over';


document.getElementById('canvas').addEventListener('click', getRelativeCoords);
