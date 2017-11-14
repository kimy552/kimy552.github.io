//click
document.addEventListener("keypress",handleDocumentClick)

function handleDocumentClick(evt){
	console.log(evt)

	

	if (document.body.style.backgroundColor =="red") {
		
		document.body.style.backgroundColor = "blue"
	} else {
		document.body.style.backgroundColor ="red"
	}
}


var blueButton = document.getElementById("car2")

blueButton.addEventListener("click", handleBtnClick)

function handleBtnClick(click,)
   
}