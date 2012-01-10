<!DOCTYPE>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<html>
<!-- Everything else goes in here -->
	<head>
		<link rel="stylesheet" href="css/themec/style.css">
		<title>HTML5 101 - THEME C</title>
			<style>
				#map { width:100%; height:800px; }
			</style>
			<script src="http://maps.google.com/maps/api/js?libraries=places&sensor=false"></script>
	</head>
	<body>
		<div id="page">
			<!-- Header of the whole page -->
			<header><h1>TUTORIAL 4 - GEOLOCATION</h1></header>
			<!-- -->
			<nav class="main-menu">
			    <ul>

	                <li><a href="index.php">Tutorial 1+2</a></li>
	 
	                <li><a href="themeb.php">Tutorial 3</a></li>
	 
	                <li><a href="themec.php">Tutorial 4</a></li>
	 	 	 
	            </ul>
			</nav>
			<!-- using div instead of section for the moment as the definition is not clear yet -->
			<!--<div id="main">-->
			<section id="main">
				<div id="map"></div>
			</section>
			<!--</div>-->
			<footer> Footer of the web page.</footer>
		</div>
		<script src="js/themec/geolocation.js"></script>
	</body>
<!-- Ending with the closing tag: -->
</html>