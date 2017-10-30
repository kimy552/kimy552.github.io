function updateTime () {

	var clockholder = document.getElementById("clock")

	var now = new Date()
	var seconds = now.getSeconds()
	now = now.toTimeString()

	if (seconds < 20) {
		//red
		clockholder.style.color = "red"
	} else if (seconds < 40) {
		//green
		clockholder.style.color = "green"
	} else {
		//blue
		clockholder.style.color = "blue"
	}

	clockholder.innerHTML = now
}	

setInterval(updateTime,1000)