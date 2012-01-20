<!DOCTYPE>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<html>
<!-- Everything else goes in here -->
	<head>
		<link rel="stylesheet" href="css/style.css">
		
		<title>HTML5 101</title>
		<style>
			#main{ width:950px;}
			header span{display:block;margin-left:700px;}
			#musicControls{list-style: none; font-weight:bold;}
			#musicControls li{float:left;padding: 0 10px;}
			#musicControls li a{color:#aaa;text-decoration:none;}
			#musicControls li a.current{color:#fff;}
			</style>
	</head>
	<body>
	<div id="page">
			<!-- Header of the whole page -->

			<header>
				<h1>TUTORIAL 8 - MIX &amp; MATCH</h1>
				<audio id="music" autoplay="autoplay" loop="loop">
					<source src="assets/sound/01.mp3" type="audio/mpeg">
				</audio>
				<span>
					<ul id="musicControls">
						<li>MUSIC :</li>
						<li><a id="music-play" href="#" class="current">ON</a></li>
						<li><a id="music-stop" href="#">OFF</a></li>
					</ul>
				</span>
			</header>

				<nav class="main-menu">
					<?php include('nav.php'); ?>
				</nav> 

			<!-- using div instead of section for the moment as the definition is not clear yet -->
				<div id="main">
						<section id="section-introduction">
							<header class="section-title"><h2>HTML5 Showcase</h2></header>
							<article id="showcase-intro"></article>
							<article id="showcase-dtails"></article>
						</section>
							
						<section id="section-images">
							<header class="section-title"><h2>Features to look at</h2></header>
							<figure>
				                <img src="img/themeb/phone1.jpg" width="300" height="150" alt="html5 the markup" />
				                <figcaption>
				                    <h3></h3>
				                    <p></p>
				                </figcaption>
				            </figure>
				            <figure>
				                <img src="img/themeb/phone1.jpg" width="300" height="150" alt="html5 multimedia" />
				                <figcaption>
				                    <h3></h3>
				                    <p></p>
				                </figcaption>
				            </figure>
				           <figure>
				                <img src="img/themeb/phone1.jpg" width="300" height="150" alt="html5 graphics" />
				                <figcaption>
				                    <h3></h3>
				                    <p></p>
				                </figcaption>
				            </figure>
				            <figure>
				                <img src="img/themeb/phone1.jpg" width="300" height="150" alt="html5 semantics" />
				                <figcaption>
				                    <h3></h3>
				                    <p></p>
				                </figcaption>
				            </figure>
						</section>
						<section id="section-canvas">
							<article>
								<header class="section-title"><h2></h2></header>
								<!-- the canvas will be generated here -->
							</article>
						</section>
						<section id="section-multimedia-api">
							<article>
								<header class="section-title"><h2>Video</h2></header>
								<!-- maybe trigger an event with the video -->
								<video></video>
							</article>
							<article>
								<header class="section-title"><h2>Geolocation</h2></header>
								<div id="map"></div>
							</article>
						</section>
				</div> 
			<footer> Footer of the web page.</footer>
		</div>
		<script src="js/jquery-1.7.1.min.js"></script>
		<script src="js/showcase.js"></script>
	</body>
<!-- Ending with the closing tag: -->
</html>