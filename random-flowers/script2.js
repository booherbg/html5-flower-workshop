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

let size=10;
let posX = 0;
let number = 1;

function drawFlower() {
   // size += 0.5;
   // posX += 1;
   // number += .02;
   color = 'yellow';
   border = 'green';

   if (number > 5) size -= .4

   // if (number >= 5) {
   //    color='pink';
   //    border='purple';
      // number += .03;
      // // size -= .1;
      // if (number >= 4) {
      //    size -= .05;
      // } else {
      //    size -= .02;
      // }
      // if (size < 0 || number > 15) return
   // } else {
      number += .03;
   // }
   if (number >= 10) {
      return;
   }
   let angle = number * Math.PI * 5;
   let radius = .01 * Math.sqrt(number);
   posX = canvas.width/2 + radius * Math.cos(angle) * canvas.width/2;
   // let posY = radius * Math.cos(angle) * canvas.height/2;
   posY= canvas.height/2 + radius * Math.sin(angle) * canvas.height/2;

   ctx.fillStyle = color;
   ctx.strokeStyle = border;
   ctx.lineWidth = 2;
   ctx.beginPath();
   ctx.arc(posX, posY, size, 0, Math.PI*2);
   ctx.closePath();
   ctx.fill();
   ctx.stroke();
   // setTimeout(drawFlower, 1);
   requestAnimationFrame(drawFlower);
}

drawFlower();