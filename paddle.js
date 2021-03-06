 // JavaScript code goes here
 var canvas = document.getElementById("myCanvas");
 var ctx = canvas.getContext("2d");
 var x = canvas.width / 2;
 var y = canvas.height - 30;
 var paddleWidth = 80;
 var paddleX = (canvas.width - paddleWidth) / 2;
 var dx = 2;
 var dy = -2;
 var rightPressed = false;
 var leftPressed = false;

 function drawBall() {
     ctx.beginPath();

     ctx.arc(x, y, 10, 0, Math.PI * 2);
     ctx.rect(paddleX, 470, paddleWidth, 20);
     ctx.fillStyle = "#0095DD";
     ctx.fill();

     ctx.closePath();
 }

 function drawPaddle() {
     ctx.beginPath();


     ctx.rect(paddleX, 470, paddleWidth, 20);
     ctx.fillStyle = "#0095DD";
     ctx.fill();

     ctx.closePath();
 }

 function draw() {
     ctx.clearRect(0, 0, canvas.width, canvas.height);
     drawBall();
     drawPaddle();
     if (x > canvas.width) {
         dx = -dx;

         x += dx;
         y += dy;
     } else if (y < 10) {
         dy = -dy;

         x += dx;
         y += dy;
     } else if (x < 10) {
         dx = -dx;

         x += dx;
         y += dy;

     } else if (y > canvas.height) {

         var b = prompt("you lost do you want to play again(Y)");
         if (b == "Y" || b == "y") {
             x = 100;
             y = 100;
         }

     } else if ((x > paddleX && x < (paddleX + paddleWidth)) && y == 470) {
         dy = -dy;
         x += dx;
         y += dy;
     } else {



         x += dx;
         y += dy;

     }
     if (rightPressed) {
         paddleX += 7;
         if (paddleX + paddleWidth > canvas.width) {
             paddleX = canvas.width - paddleWidth;
         }
     } else if (leftPressed) {
         paddleX -= 7;
         if (paddleX < 0) {
             paddleX = 0;
         }
     }


 }
 document.addEventListener("keydown", keyDownHandler, false);
 document.addEventListener("keyup", keyUpHandler, false);

 function keyDownHandler(e) {
     if (e.key == "Right" || e.key == "ArrowRight") {
         rightPressed = true;
     } else if (e.key == "Left" || e.key == "ArrowLeft") {
         leftPressed = true;
     }
 }

 function keyUpHandler(e) {
     if (e.key == "Right" || e.key == "ArrowRight") {
         rightPressed = false;
     } else if (e.key == "Left" || e.key == "ArrowLeft") {
         leftPressed = false;
     }
 }

 setInterval(draw, 10);