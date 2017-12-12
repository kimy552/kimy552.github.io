window.addEventListener("mousemove",handleMouseMove)
function handleMouseMove(evt) {
	 var x=(evt.pageX/window.innerWidth)*255
    var y=(evt.pageY/window.innerHeight)*255

    x =Math.round(x)
    y =Math.round(y)

     var rgbString="rgb("+x+","+y+",255)"

     console.log(rgbString)
     document.body.style.backgroundColor=rgbString
}


 var audio = new Audio('rockstar.mp3')
 audio.play();
 
 

 var alt_or_shift = function(e) {
 	if(e.altKey) {
 		audio.playbackRate = 2.0;
 	} else {
 		audio.playbackRate = 1.0;
 	}
 	if (e.shiftKey) {
 		audio.playbackRate = 0.5;
 	} else {
 		audio.playbackRate = 1.0;
 	}
 	
 };




 	window.onkeydown = function(e) {
 		alt_or_shift (e);
 		console.log(e.keyCode);

 		if (e.keyCode === 49) {
 			audio.playbackRate = 2.0;
 		}

 		if (e.keyCode === 50) {
 			audio.playbackRate = 0.5;
 		}

 		if (e.keyCode === 51) {
 			audio.currentTime = 20;
 		}

 		if (e.keyCode === 52) {
 			audio.currentTime = 40;
 		}

 		if (e.keyCode === 53) {
 			audio.currentTime = 60;
 		}

 		if (e.keyCode === 54) {
 			audio.currentTime = 80;
 		}
 		
 		if (e.keyCode === 55) {
 			audio.currentTime = 100;
 		}

 		if (e.keyCode === 56) {
 			audio.currentTime = 120;
 		}
 		
 		if (e.keyCode === 57) {
 			audio.currentTime = 140;
 		}
 		

 	};

 	window.onkeyup = function(e) {
 		alt_or_shift(e);
 	};