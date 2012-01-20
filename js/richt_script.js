var videoInput = document.getElementById('input_video');
var overlayCanvas = document.getElementById('output_canvas');

var controls = document.querySelectorAll("input.control");
var overlayImages = {};

var compareScale = 2; // make smaller for smoother performance
var overlayCtx, compareCanvas, compareCtx;
var canvasCleaner;

var detector;
var detectionInterval = 0; // make larger for smoother performance

function detectFace() {
					
		function complete(comp) {
			// clear the screen
			overlayCtx.putImageData(canvasCleaner, 0, 0);
			// mark detected face(s)
			for (var i = 0; i < comp.length; i++)  {
				// Overlay the selected options
				for (var j = 0; j < controls.length; j++) {
					if(!controls[j].checked) continue;
					switch(controls[j].id) {
					case "outline":
						overlayCtx.strokeRect(comp[i].x*compareScale, comp[i].y*compareScale, comp[i].width*compareScale, comp[i].height*compareScale);	
						break;
					case "moustache":
						var x = (comp[i].x*compareScale)+((comp[i].width*compareScale) / 8);
						var y = (comp[i].y*compareScale)+(((comp[i].height*compareScale) / 3) * 2);
						var width = ((comp[i].width*compareScale) / 8) * 6;
						var height = (comp[i].height*compareScale) / 4;
						overlayCtx.drawImage(overlayImages["moustache"], x, y, width, height);
						break;
					}
				}
			}
			// Re-schedule detectFace process
			detector = window.setTimeout(detectFace, detectionInterval);	
		}
		
		// Copy videoInput to compareCanvas
		compareCtx.drawImage(videoInput, 0, 0, compareCanvas.width, compareCanvas.height);
			
		function doDetection() {
			
			// Synchronous processing method				
			var comp = ccv.detect_objects({ "canvas" : ccv.grayscale(ccv.pre(compareCanvas)),
								 "cascade" : cascade,
								 "interval" : 5,
								 "min_neighbors" : 1 /*,
								 "async" : true,
								 "worker" : 1*/ });
			complete(comp);
								
			/*// Alternative: Use Web Workers to detect objects (experimental and currently buggy but would be preferred if it worked consistently :( )
			ccv.detect_objects({ "canvas" : ccv.grayscale(ccv.pre(compareCanvas)),
								 "cascade" : cascade,
								 "interval" : 5,
								 "min_neighbors" : 1,
								 "async" : true,
								 "worker" : 1 })(complete);*/
		}
		
		try {
			doDetection();
		} catch(e) {
			videoInput.pause(); 
			alert('Face detection failed indefinitely :( Please reload the page.');
		}
		
}

window.addEventListener('load', function() {
						
	videoInput.addEventListener('playing', function() {
		if(videoInput.width > videoInput.height) {
			videoInput.width = 320;
		} else {
			videoInput.height = 240;
		}
		
		overlayCanvas.width = videoInput.offsetWidth;
		overlayCanvas.height = videoInput.offsetHeight;
		
		overlayCtx = overlayCanvas.getContext('2d');
		overlayCtx.lineWidth = 3;
		overlayCtx.strokeStyle = "#00CC00";

		compareCanvas = document.createElement('canvas');
		compareCanvas.width = overlayCanvas.width/compareScale;
		compareCanvas.height = overlayCanvas.height/compareScale;
		compareCanvas.style.display = "none";
		compareCtx = compareCanvas.getContext("2d");
		document.body.appendChild(compareCanvas);

		canvasCleaner = overlayCtx.createImageData(overlayCanvas.width, overlayCanvas.height);
		for (var i = canvasCleaner.data.length; --i >= 0; )
			canvasCleaner.data[i] = 0;
			
		// Preload all overlay images
		var preload_counter = 0;
		
		function preloadOverlayImage( name, url ) {
			var myImage = new Image();
			myImage.onload = function() {
				overlayImages[name] = myImage;
				preload_counter--;
			}
			preload_counter++;
			myImage.src = url;
		}
		
		preloadOverlayImage("moustache", "img/themea/moustache.png");
		// more overlay images can be loaded here
			
		// Start face detection only when preloading has completed
		(function load() {
			detector = window.setTimeout(function() {
				if(preload_counter <= 0) {
					detectFace();
				} else {
					load();
				}
			}, detectionInterval);
		})();
	}, false);
	
	if(window.navigator.getUserMedia) {
		// add a warning box to the page
	    var instructionsDiv = document.createElement('div');
	    instructionsDiv.innerHTML = '** Please ensure that "Allow Canvas to Camera Copy is enabled" as detailed in the <a href="http://my.opera.com/core/blog/2011/03/23/webcam-orientation-preview">original blog post</a> **';
	    document.getElementById('instructions').appendChild(instructionsDiv);
	
		window.navigator.getUserMedia('video', function( stream ) {
				videoInput.src = stream;
		});
	} else {
		// add a warning box to the page
	    var errorDiv = document.createElement('div');
	    errorDiv.setAttribute('class', 'error');
	    errorDiv.innerHTML = 'Your browser does not support native web cam streaming. Here\'s a demo instead. <a href="http://my.opera.com/core/blog/2011/03/23/webcam-orientation-preview">More info</a>';
	    document.getElementById('messages').appendChild(errorDiv);
	
	    // just use a demo video from elsewhere if we don't have native webcam support:
	    videoInput.src = "/richt/release/tests/device/support/video.ogg";
	}

}, false); 