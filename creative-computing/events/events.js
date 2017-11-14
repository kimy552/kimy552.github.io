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

function handleBtnClick() {
    document.getElementById("car2").style.borderColor = "#4ddbff"
    document.getElementById("car3").style.backgroundColor = "#4ddbff"
    document.getElementById("wheel1").style.borderColor = "#4ddbff"
    document.getElementById("wheel2").style.borderColor = "#4ddbff"
   
}