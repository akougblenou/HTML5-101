var video = document.getElementsByTagName('video')[0]
paragraph = document.getElementsByTagName('p')[0]
if(navigator.getUserMedia){
	navigator.getUserMedia('audio, video user', successCallback, errorCallback)
}
else{
	  paragraph.textContent = 
      "Native web camera streaming is not supported in this browser!";
}

function successCallback(stream){
	video.src = stream;
}
function errorCallback(){
	    paragraph.textContent = 
        "An error occurred: [CODE " + error.code + "]";
	
}
