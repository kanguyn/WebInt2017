var map;
var marker;
var x = document.querySelector("#demo");

google.maps.event.addDomListener(window, 'load', initialize);

function initialize() {

	var mapOptions = {
		center: new google.maps.LatLng(48.8566, 2.3522),
		zoom: 11,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	};
	map = new google.maps.Map(document.querySelector("#map-canvas"), mapOptions);

}
/////////////////////////////////get current location/////////////////////////////////
var button_getlocation = document.querySelector('#getLocation');

button_getlocation.addEventListener('click', function getLocation1() { 
	if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(success, showError);
    }
    else {   alert('Your browser does not support geo-location');}
});


function success(position) {
    geocoder = new google.maps.Geocoder();
    
    var latlng = new google.maps.LatLng(position.coords.latitude , position.coords.longitude);
    
    createMarker(latlng);
    
    map.setCenter(latlng);
    
    map.setZoom(15);
}

function createMarker(latlng) {
  if(marker != undefined && marker != ''){
    marker.setMap(null);
    marker = '';
  }
  marker = new google.maps.Marker({
    map: map,
    position: latlng
  });
}

function showError(error) {
    switch(error.code) {
        case error.PERMISSION_DENIED:
            x.innerHTML = "User denied the request for Geolocation."
            break;
        case error.POSITION_UNAVAILABLE:
            x.innerHTML = "Location information is unavailable."
            break;
        case error.TIMEOUT:
            x.innerHTML = "The request to get user location timed out."
            break;
        case error.UNKNOWN_ERROR:
            x.innerHTML = "An unknown error occurred."
            break;
    }
}
/////////////////////////////////get location of address given/////////////////////////////////
var button_getaddress = document.querySelector('#searchAddress');

var searchAddress = function searchAddress() {
	var addressInput = document.querySelector('#street').value + ", " + document.querySelector('#city').value + ", " + document.querySelector('#zipcode').value + ", " + document.querySelector('#country').value ;
	var geocoder = new google.maps.Geocoder();
	geocoder.geocode({address: addressInput}, function(results, status) {
		if (status == google.maps.GeocoderStatus.OK) {
			var myResult = results[0].geometry.location;
      		createMarker(myResult);
      		map.setCenter(myResult);
      		map.setZoom(15);
		}
	});
}
button_getaddress.addEventListener('click', searchAddress);

///////////////////////////////////////////video/////////////////////////////////////////////
var video1 = document.querySelector("#video1");

var btn_url = document.querySelector("#urlvideo");
var btn_offset = document.querySelector("#offsetbtn");
var btn_preview = document.querySelector("#preview");
var btn_rotate = document.querySelector(".rotateevent");
var btn_display_control = document.querySelector("#display_control");
var btn_mirror = document.querySelector("#mirror");
var btn_playpause = document.querySelector("#playpause");

var canvas = document.querySelector('.mycanvas');
var canvas2 = document.querySelector('.mycanvas2');
var context = canvas.getContext('2d');
var context2 = canvas2.getContext('2d');
var cw = 320;
var ch = 240;
canvas.width = cw;
canvas.height = ch;
canvas2.width = cw;
canvas2.height = ch;
// url: https://upload.wikimedia.org/wikipedia/commons/transcoded/8/83/Elephants_Dream_%28high_quality%29.ogv/Elephants_Dream_%28high_quality%29.ogv.240p.webm
//https://upload.wikimedia.org/wikipedia/commons/4/41/Big_Buck_Bunny_medium.ogv
var playurl = function playurl() {
    video1.setAttribute('class','video1');
	canvas.setAttribute('class', 'mycanvas');
    canvas2.setAttribute('class', 'mycanvas2');
	var videourl = document.querySelector("#video_url").value; // set the url to your video file here
    if (!videourl){
        
    }
	video1.setAttribute('src', videourl);
	video1.load();
	video1.play();
};
btn_url.addEventListener('click', playurl);

var offset = function offset() {
    video1.setAttribute('class','video1');
	canvas.setAttribute('class', 'mycanvas');
    canvas2.setAttribute('class', 'mycanvas2');
	var offsetTime = document.querySelector("#video_start").value;
    video1.currentTime = offsetTime;
    video1.play();
};
btn_offset.addEventListener('click', offset);


function drawPreview(v,c,w,h) {
    
    c.drawImage(video1,0,0,w,h);
    var img = document.createElement("img");
    img.src = c.toDataURL();
}
btn_preview.addEventListener('click', function(){
    drawPreview(video1,context2,cw,ch);
},false);

function rotate() {
    video1.setAttribute('class','video_rotate');
    canvas.setAttribute('class','video_rotate');
    canvas2.setAttribute('class', 'video_rotate');
    video1.play();
}
btn_rotate.addEventListener('click', function(){
    rotate();
},false);


var display_control = function display_control() {
	canvas.setAttribute('class', 'mycanvas');
    video1.setAttribute('class','video1');
    canvas2.setAttribute('class', 'mycanvas2');
	var checkbox = document.querySelector("#video_controls").checked;
    video1.controls = checkbox;
	video1.play();
};
btn_display_control.addEventListener('click', display_control);


function draw(v,c,w,h) {
    c.setTransform(1,0,0,1,0,0);
    c.translate(0,h);
    c.scale(1,-1);
    c.drawImage(video1,0,0,w,h);
    setTimeout(draw,20,video1,c,w,h);
}
btn_mirror.addEventListener('click', function(){
	draw(video1,context,cw,ch);
},false);



var nextVideo1 = "https://upload.wikimedia.org/wikipedia/commons/4/41/Big_Buck_Bunny_medium.ogv";
var nextVideo2 = "https://upload.wikimedia.org/wikipedia/commons/transcoded/4/47/Elephants_Dream_1024.avi.to63.5w720vbr1760soft-targetabr112.ogv/Elephants_Dream_1024.avi.to63.5w720vbr1760soft-targetabr112.ogv.360p.webm";
var nextVideo3 = "https://upload.wikimedia.org/wikipedia/commons/transcoded/2/21/Making_of_Elephants_Dream_-_title_origin.ogv/Making_of_Elephants_Dream_-_title_origin.ogv.360p.webm";
var nextVideo4 = "https://upload.wikimedia.org/wikipedia/commons/transcoded/8/8c/Making_of_Elephants_Dream_part_2_of_8.ogv/Making_of_Elephants_Dream_part_2_of_8.ogv.360p.webm";
var videos = [nextVideo1,nextVideo2,nextVideo3,nextVideo4]
var videoPlayer = document.querySelector('#videojukebox');
btn_jukebox = document.querySelector("#playjukebox");
btn_again = document.querySelector("#playagain");

btn_jukebox.addEventListener('click', function play2(){
    if (videoPlayer.paused || videoPlayer.ended) {
        videoPlayer.play();
    }
    else
        videoPlayer.pause();
});

function jumpTo(i) {
    var newVid = videos[i]
    videoPlayer.src = newVid;
    videoPlayer.play();
}

var i=0;
videoPlayer.addEventListener('ended', function(){
    if (i < 4){
        $('p.currentplay').text('Playing video '+ (i+2) +'/5');        
    }
    jumpTo(i);
    i+=1;

}, false);

btn_again.addEventListener('click', function (){
    i=0;
    $('p.currentplay').text('Playing video 1/5');
    videoPlayer.src = "https://upload.wikimedia.org/wikipedia/commons/transcoded/d/d6/Elaphants_Dream.ogv/Elaphants_Dream.ogv.480p.webm";
    videoPlayer.play();
});