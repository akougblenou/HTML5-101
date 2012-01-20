
//var canvas = document.getElementById('canvas');
var imgWidth = 150;
var imgHeight = 150;
var sectionMain = document.getElementById('main')
var canvasHeight = canvasWidth = 200;
var sources = ['assets/team-img/ak.jpg', 'assets/team-img/bt.jpg', 'assets/team-img/bw.jpg', 'assets/team-img/dc.jpg', 'assets/team-img/gr.jpg'];
      for (var i=0;i<5;i++){  
        //for (var j=0;j<3;j++){

    	indentX = (i*imgWidth);
    	indentY = (i*imgHeight);
    	canvas = document.createElement('canvas');
    	canvas.height = canvasHeight;
    	canvas.width = canvasHeight; 
    	sectionMain.appendChild(canvas);
			img = new Image();
			img.src = sources[i];
		//getting tje context in which we are going to write
		ctx = canvas.getContext('2d')
		ctx.lineWidth = 4
		ctx.strokeStyle = 'rgb(50, 180, 250)';
		ctx.fillStyle = 'rgb(80, 200, 250)';
		roundRect(ctx, 5, 5, 150, 150, 5, true, true);
          //drawing the images with i and j as index of coordinates
          ctx.drawImage(img,10,10,140,140);  
        //}  
      }



/**
 * Draws a rounded rectangle using the current state of the canvas.
 * If you omit the last three params, it will draw a rectangle
 * outline with a 5 pixel border radius
 * @param {CanvasRenderingContext2D} ctx
 * @param {Number} x The top left x coordinate
 * @param {Number} y The top left y coordinate
 * @param {Number} width The width of the rectangle
 * @param {Number} height The height of the rectangle
 * @param {Number} radius The corner radius. Defaults to 5;
 * @param {Boolean} fill Whether to fill the rectangle. Defaults to false.
 * @param {Boolean} stroke Whether to stroke the rectangle. Defaults to true.
 */
function roundRect(ctx, x, y, width, height, radius, fill, stroke) {
  if (typeof stroke == "undefined" ) {
    stroke = true;
  }
  if (typeof radius === "undefined") {
    radius = 5;
  }
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.lineTo(x + width - radius, y);
  ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
  ctx.lineTo(x + width, y + height - radius);
  ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
  ctx.lineTo(x + radius, y + height);
  ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
  ctx.lineTo(x, y + radius);
  ctx.quadraticCurveTo(x, y, x + radius, y);
  ctx.closePath();
  if (stroke) {
    ctx.stroke();
  }
  if (fill) {
    ctx.fill();
  }       
}
$(document).ready(function(){

var music = document.getElementById('music');
	$("a").click(function(event){
	 	if($(this).attr('id') == 'music-play'){
	 		music.play();
	 		$(this).addClass('current')
			checkClassCurrentRemoved($('#music-stop'));
	 	}
	 	else if($(this).attr('id') == 'music-stop'){
	 		music.pause();
	 		$(this).addClass('current')
			checkClassCurrentRemoved($('#music-play'));
	 	}
});

	function checkClassCurrentRemoved(mediaElement){
		if(mediaElement.hasClass('current'))
		{
			mediaElement.removeClass();
		}
	}
});