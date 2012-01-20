


$(document).ready(function(){
  init();
  var audio;
  var sectionMain = document.getElementById('main')
  var t1 = setTimeout("playSound('sfx')",3000);
  var t2 = setTimeout("playSound('sfx')",6000);
  var t3 = setTimeout("playSound('sfx')",12000);
  var t4 = setTimeout("playSound('sfx')",18000);
  $("input.huh").live('click', function(event){

    audio = document.createElement('audio');
    audio.src = "assets/sound/surprise.wav"
    sectionMain.appendChild(audio);
    audio.play();
  });
});

function playSound(id){
  //the  following line is suppose to remove the latence in playing sounds
    document.getElementById(id).cloneNode(true).play()
    //console.log("played " + id);
}

//the functions clock() and init() are courtesy of dev.mozilla.com
function init() {
  clock();
  setInterval(clock, 1000);
  //setInterval(playSound('tick'), 2000)
}

function clock() {
  var now = new Date();
  var ctx = document.getElementById('clock').getContext('2d');
  ctx.save();
  ctx.clearRect(0, 0, 150, 150);
  ctx.translate(75, 75);
  ctx.scale(0.4, 0.4);
  ctx.rotate(-Math.PI/2);
  ctx.strokeStyle = "black";
  ctx.fillStyle = "white";
  ctx.lineWidth = 8;
  ctx.lineCap = "round";

  // Marques des heures
  ctx.save();
  ctx.beginPath();
  for (i = 0; i < 12; i++) {
    ctx.rotate(Math.PI/6);
    ctx.moveTo(100, 0);
    ctx.lineTo(120, 0);
  }
  ctx.stroke();
  ctx.restore();

  // Marques des minutes
  ctx.save();
  ctx.lineWidth = 5;
  ctx.beginPath();
  for (i = 0; i < 60; i++) {
    if (i%5 != 0) {
      ctx.moveTo(117, 0);
      ctx.lineTo(120, 0);
    }
    ctx.rotate(Math.PI/30);
  }
  ctx.stroke();
  ctx.restore();
  
  var sec = now.getSeconds();
  var min = now.getMinutes();
  var hr  = now.getHours();
  hr = (hr >= 12) ? hr-12 : hr;

  ctx.fillStyle = "black";

  // Dessin des heures
  ctx.save();
  ctx.rotate( hr*(Math.PI/6) + (Math.PI/360)*min + (Math.PI/21600)*sec )
  ctx.lineWidth = 14;
  ctx.beginPath();
  ctx.moveTo(-20, 0);
  ctx.lineTo(80, 0);
  ctx.stroke();
  ctx.restore();

  // Dessin des minutes
  ctx.save();
  ctx.rotate( (Math.PI/30)*min + (Math.PI/1800)*sec )
  ctx.lineWidth = 10;
  ctx.beginPath();
  ctx.moveTo(-28, 0);
  ctx.lineTo(112, 0);
  ctx.stroke();
  ctx.restore();
  
  playSound('tick')

  // Dessin des secondes
  ctx.save();
  ctx.rotate(sec * Math.PI/30);
  ctx.strokeStyle = "#D40000";
  ctx.fillStyle = "#D40000";
  ctx.lineWidth = 6;
  ctx.beginPath();
  ctx.moveTo(-30, 0);
  ctx.lineTo(83, 0);
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(0, 0, 10, 0, Math.PI*2, true);
  ctx.fill();
  ctx.beginPath();
  ctx.arc(95, 0, 10, 0, Math.PI*2, true);
  ctx.stroke();
  ctx.fillStyle = "#555";
  ctx.arc(0, 0, 3, 0, Math.PI*2, true);
  ctx.fill();
  ctx.restore();



  ctx.beginPath();
  ctx.lineWidth = 14;
  ctx.strokeStyle = '#325FA2';
  ctx.arc(0, 0, 142, 0, Math.PI*2, true);
  ctx.stroke();

  ctx.restore();
}