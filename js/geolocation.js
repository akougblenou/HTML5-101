if (navigator.geolocation) 
{
	var timeoutVal = 10 * 1000 * 1000;
	//navigator.geolocation.getCurrentPosition(
	navigator.geolocation.getCurrentPosition(
		displayPosition,
		displayError,
		{ enableHighAccuracy: false, timeout: timeoutVal, maximumAge: 0 }
	);
}
else 
{
	alert("Geolocation is not supported by this browser");
}
var map;
var service;
function displayPosition(position) 
{
	var pos = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
	var options = {
		zoom: 15,
		center: pos,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	};
	 map = new google.maps.Map(document.getElementById("map"), options);
	var marker = new google.maps.Marker({
		position: pos,
		map: map,
		title: "User location"
	});
	//finding nearby bakery
	  var request = {
	    location: pos,
    	radius: '500',
    	types: ['bar']
  	};
  	  service = new google.maps.places.PlacesService(map);
  		service.search(request, findaBakeyPlace);


	var contentString = "<b>Timestamp:</b> " + parseTimestamp(position.timestamp) + "<br/><b>User location:</b> lat " + position.coords.latitude + ", long " + position.coords.longitude + ", accuracy " + position.coords.accuracy;
	var infowindow = new google.maps.InfoWindow({
		content: contentString
	});
	google.maps.event.addListener(marker, 'click', function() {
		infowindow.open(map,marker);
	});
}

function findaBakeyPlace(results, status) {
	//alert("bakey place status = " + status)
  if (status == google.maps.places.PlacesServiceStatus.OK) {
    for (var i = 0; i < results.length; i++) {
      var place = results[i];
      createMarker(results[i]); 
    }
  }
}

function createMarker(place)
{
	var placeLoc = place.geometry.location;
	var marker = new google.maps.Marker({
		position: placeLoc,
		map: map,
	});
	var infowindow = new google.maps.InfoWindow();
	google.maps.event.addListener(marker, 'click', function() {
        infowindow.setContent(place.name);
        infowindow.open(map, this);
    });
}
function displayError(error) 
{
	var errors = {
	1: 'Permission denied',
	2: 'Position unavailable',
	3: 'Request timeout'
	};
	alert("Error: " + errors[error.code]);
}

function parseTimestamp(timestamp) 
{
	var d = new Date(timestamp);
	var day = d.getDate();
	var month = d.getMonth() + 1;
	var year = d.getFullYear();
	var hour = d.getHours();
	var mins = d.getMinutes();
	var secs = d.getSeconds();
	var msec = d.getMilliseconds();
	return day + "." + month + "." + year + " " + hour + ":" + mins + ":" + secs + "," + msec;
} 