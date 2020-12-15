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

// ctx.globalCompositeOperation = 'destination-over';

let size = 20;
let posX = canvas.width/2;
let posY = canvas.height/2;
let angle = 0;
let number = 0;

function drawFlower() {
   color = 'blue';
   border = 'red';

   let scale = 10;

   // when angle increment is smaller, there's more scaling
   // to add to posX before it comes back around, that's it
   angle = number * 1;
   let radius = scale * Math.sqrt(number);
   posX += radius * Math.sin(angle);
   posY += radius * Math.cos(angle);

   number++;

   if (number > 300) return;

   // ctx.clearRect(0, 0, canvas.width, canvas.height);
   
   ctx.fillStyle = color;
   ctx.strokeStyle = border;
   ctx.lineWidth = 2;
   ctx.beginPath();
   // arc at posX, posY, radius `size`, go from 0 deg to Math.PI*2 deg
   ctx.arc(posX, posY, size, 0, Math.PI*2);
   ctx.closePath();
   ctx.fill();
   ctx.stroke();
   
   // setTimeout(drawFlower, 200);
   requestAnimationFrame(drawFlower);
}

drawFlower();