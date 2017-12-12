//types(key press)
/*document.addEventListener("keypress", handleKeyPress)

function handleKeyPress(evt) {
	//console.log(evt.key) 둘중하
	var key = evt.key
	console.log(key)
	
	var totalHeight = document.body.offsetHeight

	var percentage = key / 9
	console.log("%",percentage)

	var targetHeight = percentage * totalHeight
	console.log("px",targetHeight)

	window.scrollTo(0,targetHeight)
}*/
var $win = $(window),
    w = 0,h = 0,
    rgb = [255,0,153],
    getWidth = function("keydown",handleKeyPress) {
        w = $win.width();
        h = $win.height();
    };

$win.resize(getWidth).mousemove(function(e) {
    
    rgb = [
        Math.round(e.pageX/w * 255),
        Math.round(e.pageY/h * 255),
        150
    ];
    
    $(document.body).css('background','rgb('+rgb.join(',')+')');
    
}).resize();
