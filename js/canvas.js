var canvas = document.getElementById('myCanvas');
//getting tje context in which we are going to write
ctx = canvas.getContext('2d')
//x,y,w,h
// ctx.fillRect(50,50,100,100) 
// ctx.strokeRect(50,50,100,100)
// ctx.beginPath()
// //from the left and to the top
// ctx.moveTo(50,50)
// ctx.lineTo(50,250)
// ctx.lineTo(450,150)
// ctx.closePath()
// ctx.fill()
// ctx.fillStyle = 'rgb(0,0,255)'
// ctx.fillRect(50,50,100,100)

// ctx.strokeStyle = 'rgb(0,0,255)'
// ctx.lineWidth = 10
// ctx.strokeRect(150,150,100,100)
// ctx.clearRect(150,150,250,250)

// ctx.beginPath()
// ctx.arc(300, 220, 70, 0, Math.PI*2, false)
// ctx.closePath()
// ctx.fill()

// ctx.lineWidth = 8
// ctx.beginPath()
// ctx.moveTo(100,200)
// ctx.quadraticCurveTo(300,100,500,200)
// ctx.stroke();

// ctx.lineWidth = 18
// ctx.beginPath()
// ctx.moveTo(100,100)
// ctx.bezierCurveTo(100, 50, 350, 200, 500, 70);  
// ctx.stroke();

// ctx.fillStyle = "rgb(0, 0, 255)";  
// ctx.save();  
// ctx.fillRect(50, 50, 100, 100); 

// ctx.fillStyle = "rgb(255, 0, 0)";  
// ctx.fillRect(200, 50, 100, 100);  

// ctx.restore()  
// ctx.fillRect(350, 50, 100, 100);  

//Translate

//ctx.fillRect(0, 0, 100, 100); 
//ctx.save();  
//ctx.translate(100, 100);  
//ctx.fillStyle = "rgb(0, 0, 255)";  
//ctx.fillRect(0, 0, 100, 100);  
//ctx.restore(); 

//Scale

// ctx.fillRect(0, 0, 100, 100);  
// ctx.save();  
//help move to correct location
// ctx.translate(100,100)
// ctx.scale(2, 2);  
// ctx.fillRect(0, 0, 100, 100);  
//ctx.restore();

//Rotation
// ctx.save(); 
// ctx.translate(150,150) 
// ctx.rotate(Math.PI/4); // Rotate 45 degrees (in radians)  
// ctx.fillRect(-50, -50, 100, 100);  
// ctx.restore();

//Shadows
// ctx.save();  
// ctx.shadowBlur = 18;  
// ctx.shadowColor = "rgb(1, 1, 155)";  
// ctx.fillRect(100, 100, 100, 100);  
// ctx.restore();  

//Save and Restore
// ctx.fillStyle = "rgb(255, 0, 0)";  
// ctx.fillRect(0, 0, 100, 100);
// ctx.save();
// ctx.fillStyle = "rgb(0, 255, 0)";  
// ctx.fillRect(100, 0, 100, 100);
// ctx.save();
// ctx.fillStyle = "rgb(0, 0, 255)";
// ctx.shadowOffsetX = 2;
// ctx.shadowOffsetY = 2;
// ctx.shadowBlur = 2;
// ctx.shadowColor = "rgba(0, 0, 0, 0.5)"; 
// ctx.fillRect(200, 0, 100, 100);
// ctx.save();
// ctx.translate(0,100);
// ctx.fillRect(0, 0, 100, 100);
// ctx.restore();


var img = new Image();
img.onload = function(){  
    ctx.drawImage(img,5,5,240,240);   
};  
img.src = 'img/themea/overly_rosie.gif'; 
ctx.fillStyle = 'rgb(0,0,0)'
// ctx.shadowOffsetX = 0;
// ctx.shadowOffsetY = 2;
//ctx.shadowColor = "rgba(0, 0, 0, 0.8)";
ctx.lineWidth = 5; 
ctx.strokeRect(0,0,250,250);

  var ctx2 = document.getElementById('canvas').getContext('2d');  
  
  // create new image object to use as pattern  
  var img = new Image();  

  img.src = 'img/themea/overly_rosie.gif';//img/themea/pattern.png';  
  img.onload = function(){  
    // create pattern  
    var ptrn = ctx2.createPattern(img,'repeat');  
    ctx2.fillStyle = ptrn;  
    ctx2.fillRect(0,0,500,500);  
  }
  
  ctx2.globalCompositeOperation = 'source-over'

  ctx2.shadowOffsetX = 2;
  ctx2.shadowOffsetY = 2;
  ctx2.shadowBlur = 2;
  ctx2.shadowColor = "rgba(0, 0, 0, 0.5)";
  
  ctx2.font = "20px Times New Roman";
  ctx2.fillStyle = "Black";
  ctx2.fillText("Sample String", 5, 30, 100);
  //ctx2.clip();
  
 