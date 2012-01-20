<!DOCTYPE>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<html>
<!-- Everything else goes in here -->
	<head>
		<!--<link rel="stylesheet" href="css/themea/style.css">-->
		
		<title>HTML5 101 - THEME C</title>
			<style>
								
				html { font-family: Arial, Helvetica, sans-serif; }

				#instructions, #demo, #messages {
					display: block;
					position: relative;
				}
				#instructions, #messages {
				    padding: 10px 0;
					width: 405px;
				}
				.error {
				    background-color: #CC0000;
				    border: 1px solid #999;
				    font-size: 15px;
				    padding: 10px;
					color: #FFF;
				}
				.error a {
					color: #FFFF33;
				}
				#input_video {
					position: absolute; 
					top: 0; 
					left: 0; 
					z-index: -1;
				}
				#output_canvas {
					display: block; 
					background-color: transparent;
				}
				#home-link a{text-decoration:none; color:#000; font-weight:bold; font-size:18px; }

			</style>
			<!--<script src="http://maps.google.com/maps/api/js?libraries=places&sensor=false"></script>-->
	</head>
	<body>
	<!--	<div id="page">
			<!-- Header of the whole page -->
			<!--
			<header><h1>TUTORIAL 5 - SIMPLE WEB CAMERA DISPLAY DEMO</h1></header>
		
			<nav class="main-menu">
			    <ul>

	                <li><a href="index.php">Tutorial 1+2</a></li>
	 
	                <li><a href="themeb.php">Tutorial 3</a></li>
	 
	                <li><a href="themec.php">Tutorial 4</a></li>

	                <li><a href="tutorial5.php">Tutorial 5</a></li>
	 	 	 
	            </ul>
			</nav> -->
			<!-- using div instead of section for the moment as the definition is not clear yet -->
			<!--<div id="main">-->
			<div id="messages"></div>
			<div id="demo">
				<p>Trying out the video thing</p>
				<video id="input_video" autoplay="" src="about:streamurl" height="240">
					Your browser does not support the video tag.
				</video>
				<!-- width="640" height="480" -->
				<canvas id="output_canvas" width="320" height="240"></canvas>
			</div>
			<div id="instructions">
			  <h3>Options</h3>
			  <p>
			    <input type="checkbox" class="control" id="outline" checked="checked">
			     Show face recognition outline
			  </p>
			  <p>
			    <input type="checkbox" class="control" id="moustache">
			    Show moustache
			  </p>
			</div>
			<div id="home-link"><a href="index.php"> GO BACK TO THE HOME PAGE</a></div>
			<!-- </div> 
			<footer> Footer of the web page.</footer>-->
		<!--</div> -->
		<script src="js/ccv.js"></script>
		<script src="js/face.js"></script>
		<script src="js/richt_script.js"></script>
	</body>
<!-- Ending with the closing tag: -->
</html>