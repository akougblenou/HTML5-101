<!DOCTYPE>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<html>
<!-- Everything else goes in here -->
	<head>
		<link rel="stylesheet" href="css/themea/style.css">
		<title>HTML5 101</title>
	</head>
<body>
		<div id="page">
			<!-- Header of the whole page -->
			<header><h1>HTML5 101 - TUTORIAL 1 & 2</h1></header>
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
				<article>
				    <hgroup>
				        <h2>Article 1 - Title</h2>
				        <h3>Article 1 - Subtitle</h3>
				    </hgroup>
				 
				 	<span>Published the  <time datetime="<?php echo date("c"); ?>"><?php echo date("l, F j, Y");?></time></span>
				    <p>
				        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum commodo ullamcorper adipiscing. Integer a eros odio, vel pretium lorem. Suspendisse in magna vitae nibh mattis aliquet. Quisque posuere erat vitae sem lobortis dictum. Vivamus ultricies, arcu eu ultricies mollis, justo metus aliquet sapien, non condimentum sem justo at turpis. Cras vestibulum luctus tempor. Mauris sodales purus tellus, id placerat leo. Integer neque ipsum, venenatis id auctor nec, lacinia id urna. Phasellus sed leo libero, id tincidunt mauris. Maecenas et erat ac erat sodales mollis in non odio. Duis aliquam pellentesque lorem vulputate sagittis. Maecenas porta vestibulum mauris in adipiscing. Nunc quis lectus et purus dapibus porttitor sed mattis massa. Phasellus vestibulum quam auctor felis eleifend auctor. 

				        <figure>
				        	<img alt="" src="img/themea/logo.jpg" width="400" height="156"/>
				        	<figcaption><span>a famous logo</span></figcaption>
				        </figure>
				    </p>
				</article>
				<article>
				    <hgroup>
				        <h2>Article 2 - Title</h2>
				        <h3>Article 2 - Subtitle</h3>
				    </hgroup>
				 
				    <p>
				        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum commodo ullamcorper adipiscing. Integer a eros odio, vel pretium lorem. Suspendisse in magna vitae nibh mattis aliquet. Quisque posuere erat vitae sem lobortis dictum. Vivamus ultricies, arcu eu ultricies mollis, justo metus aliquet sapien, non condimentum sem justo at turpis. Cras vestibulum luctus tempor. Mauris sodales purus tellus, id placerat leo. Integer neque ipsum, venenatis id auctor nec, lacinia id urna. Phasellus sed leo libero, id tincidunt mauris. Maecenas et erat ac erat sodales mollis in non odio. Duis aliquam pellentesque lorem vulputate sagittis. Maecenas porta vestibulum mauris in adipiscing. Nunc quis lectus et purus dapibus porttitor sed mattis massa. Phasellus vestibulum quam auctor felis eleifend auctor. 

				        <mark> No this text is relevant as it means something to you</mark>
				    </p>
				    <aside>
				    	<dialog>
				    		<dt>Jack</dt>
				    		<dd>Une p'tite lampee mon p'tit Bill ?</dd>
				    		<dt>Bill</dt>
				    		<dd>Avec plaisir mon p'tit Jack</dd>
				    		<dt>Both</dt>
				    		<dd>Gulp!</dd>
				    	</dialog>
				    </aside>
				</article>
				<article>
				    <hgroup>
				        <h2>Article 3 - Title</h2>
				        <h3>Article 3 - Subtitle</h3>
				    </hgroup>
				 
				    <p contenteditable="true">
				    	<mark> This Lipsum is editable so go ahead and try it!</mark>
				        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum commodo ullamcorper adipiscing. Integer a eros odio, vel pretium lorem. Suspendisse in magna vitae nibh mattis aliquet. Quisque posuere erat vitae sem lobortis dictum. Vivamus ultricies, arcu eu ultricies mollis, justo metus aliquet sapien, non condimentum sem justo at turpis. Cras vestibulum luctus tempor. Mauris sodales purus tellus, id placerat leo. Integer neque ipsum, venenatis id auctor nec, lacinia id urna. Phasellus sed leo libero, id tincidunt mauris. Maecenas et erat ac erat sodales mollis in non odio. Duis aliquam pellentesque lorem vulputate sagittis. Maecenas porta vestibulum mauris in adipiscing. Nunc quis lectus et purus dapibus porttitor sed mattis massa. Phasellus vestibulum quam auctor felis eleifend auctor. 
				    </p>
				</article>
			</section>
			<!--</div>-->
			<footer> Footer of the web page.</footer>
		</div>
	</body>
<!-- Ending with the closing tag: -->
</html>