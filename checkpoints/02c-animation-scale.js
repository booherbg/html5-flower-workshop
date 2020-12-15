/*
   Step 4: Make the circle grow and leave an interference pattern behind
*/
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// ctx.globalCompositeOperation = 'destination-over';

// size will be how big the circle will be
let size = 20;
// posX is the starting position of the circle (centered on the canvas)
let posX = canvas.width/2;
// posY is the starting position of the circle (centered on the canvas)
let posY = canvas.height/2;

// angle starts at 0, and grows with each loop to determine where to 
// draw next in a 360 degree arc.
let angle = 0;

// number is a simple iterator that we increase by 1, which feeds
// the angle and radius of the drawing arc
let number = 0;

// this changes how big our arc path will be
let scale = 10;

// We call this function once for every animation frame
function drawFlower() {
   color = 'blue'; // color of the circle
   border = 'red'; // color of the circle border

   // when angle increment is smaller, there's more scaling
   // to add to posX before it comes back around, that's it

   // angle grows over time (which causes our drawing arc to move in a circle)
   angle = number * 1;

   // radius determines how wide our drawing arc becomes
   let radius = scale * Math.sqrt(number);

   // where to draw? pass the angle into sin/cos, then expand it with `radius`
   posX += radius * Math.sin(angle);
   posY += radius * Math.cos(angle);

   // add one to our iterator (which feeds the angle and radius)
   number++;

   // finish when we have done 300 cycles
   if (number > 300) return;

   // ctx.clearRect(0, 0, canvas.width, canvas.height);
   
   ctx.fillStyle = color; // color of the brush
   ctx.strokeStyle = border; // color of the brush border
   ctx.lineWidth = 2; // border width of the brush
   ctx.beginPath(); // start drawing an arc
   // arc at posX, posY, radius `size`, go from 0 deg to Math.PI*2 deg
   ctx.arc(posX, posY, size, 0, Math.PI*2); // draw the circle
   ctx.closePath(); // stop drawing the circle
   ctx.fill(); // fill the circle with color
   ctx.stroke(); // draw the circle border
   
   // setTimeout(drawFlower, 200);
   // call this function AGAIN for the next animation frame
   requestAnimationFrame(drawFlower);
}

drawFlower();