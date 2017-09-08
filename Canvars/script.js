var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
ctx.fillStyle = "ff0000";
ctx.fillRect (0, 0, 150, 75);

ctx.moveTo (0, 0);
ctx.lineTo (150, 200);
ctx.stroke();

ctx.beginPath();
ctx.arc(95, 50, 40, 0, 2*Math.PI);
ctx.stroke();