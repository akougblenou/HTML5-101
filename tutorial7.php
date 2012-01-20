<!DOCTYPE>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<html>
<!-- Everything else goes in here -->
	<head>
		<link rel="stylesheet" href="css/style.css">
		
		<title>HTML5 101</title>
		<style>
			#main{ width:950px;}
		</style>
		<script src="http://code.jquery.com/jquery-1.7.1.min.js"></script>
	</head>
	<body>
	<div id="page">
			<!-- Header of the whole page -->

			<header><h1>TUTORIAL 7 - Audio</h1></header>

				<nav class="main-menu">
				    <?php include('nav.php'); ?>
				</nav> 

			<!-- using div instead of section for the moment as the definition is not clear yet -->
				<section id="main">
					<span>This is an autoplay</span>
					<audio id="autoPlay"controls="controls" autoplay="autoplay">
						<source src="assets/sound/01.mp3" type="audio/mpeg" />
					</audio>
					<br />
					<span>This is a regular play</span>
					<a id="start" href="#">Play this one below</a>
					<br/>
					<audio id="regularPlay" controls="controls">
						<source src="assets/sound/02.ogg" type="audio/ogg" />
					</audio>
					<br />
					<span>This is a background play</span>
					<audio id="backgroundPlay" autoplay="autoplay">
						<source src="assets/sound/03.mp3" type="audio/mpeg" />
					</audio>
				</section> 
			<footer> Footer of the web page.</footer>
		</div>
		<script>
		var sound = document.getElementById('regularPlay');
		 $(document).ready(function(){

		 	//var t = setTimeout("playSound()",3000);
		   $("a").click(function(event){
		     	sound.play();
		   });
		 });

		 
		 			 	function playSound(){
		 	
		  // $("a").click(function(event){
		     //	sound.play();
		   //});
			}
		</script>
	</body>
<!-- Ending with the closing tag: -->
</html>