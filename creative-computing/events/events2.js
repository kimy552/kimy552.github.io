//types(key press)
document.addEventListener("keypress", handleKeyPress)

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
}