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

			<header><h1>TUTORIAL 6 - CANVAS 101</h1></header>

				<nav class="main-menu">
				    <?php include('nav.php'); ?>
				</nav> 

			<!-- using div instead of section for the moment as the definition is not clear yet -->
				<section id="main">
					<canvas id="myCanvas" width="500" height="500">
						Canvas is not supported by your browser
					</canvas>
					    <div id ="test">
        abcd
    </div>

					<canvas id="canvas" width="500" height="500">
						<div><p>TAKE IT IN THE FACE!!</p></div>
					</canvas>
				</section> 
			<footer> Footer of the web page.</footer>
		</div>
		<script src="js/canvas.js"></script>
	</body>
<!-- Ending with the closing tag: -->
</html>