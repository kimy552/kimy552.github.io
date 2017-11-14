document.addEventListener("click",handleDocumentClick)

function handleDocumentClick(evt){
	console.log(evt)

	 document.getElementById("wheel").style.backgroundColor= "gold"
     document.getElementById("wheel2").style.borderWidth = "80px"
     document.getElementById("car2").style.backgroundColor = "green"
     document.getElementById("car3").style.backgroundColor = "pink"
     document.getElementById("wheel3").style.borderWidth = "100px"

	if (document.body.style.backgroundColor =="red") {
		
		document.body.style.backgroundColor = "blue"
	} else {
		document.body.style.backgroundColor ="red"
	}
}
document.addEventListener("keypress", handleKeyPress)

function handleKeyPress(evt) {
	var key = evt.key
	console.log(key)
	var totalHeight = document.body.offsetHeight

	var percentage = key / 9
	console.log("%",percentage)

	var targetHeight = percentage * totalHeight
	console.log("px",targetHeight)

	window.scrollTo(0,targetHeight)
    document.getElementById("wheel").style.borderWidth = "80px"
    document.getElementById("wheel2").style.borderWidth = "80px"
    document.getElementById("car2").style.borderWidth = "50pxpx"
    document.getElementById("car3").style.borderWidth = "100px"
    document.getElementById("wheel3").style.borderWidth = "100px"
}

   