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

function drawFlower(startX, startY, number, color) {
   
}
drawFlower()