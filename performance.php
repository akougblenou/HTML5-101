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
					<span>This is a background play</span>
					<br />
					<audio id="music-background"  autoplay="autoplay" loop="loop">
						<source src="assets/sound/Los Sundayers - Que Paciencia.mp3" type="audio/mpeg" />
					</audio>
					<br />
					<audio id="sfx" preload>
						<source src="assets/sound/0x10.wav" type="audio/wav" />
					</audio>
					<br />
					<br />
					<audio id="tick" preload>
						<!-- <source src="assets/sound/0x1F.wav" type="audio/wav" /> -->
						<source src="assets/sound/tictac.mp3" type="audio/mp3" />
					</audio>
					<br />
					<form>
						<input type="button" name="surprise-1" value="WTD?" class="huh" />
						<input type="button" name="surprise-2" value="WTD?" class="huh" />
						<input type="button" name="surprise-3" value="WTD?" class="huh" />
					</form>
					<br />
					<p>clock animation from <a href="https://developer.mozilla.org/fr/Tutoriel_canvas/Animations_basiques">Canvas tutorial by Mozilla</a></p>
					<canvas id ="clock" height="300" width="300">
						Animated Clock
					</canvas>
				</section> 
			<footer> Footer of the web page.</footer>
		</div>
		<script src="js/jquery-1.7.1.min.js"></script>
		<script src="js/performance.js"></script>
	</body>
<!-- Ending with the closing tag: -->
</html>