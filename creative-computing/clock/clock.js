function update() {
	var paper = document.getElementById("paper")
	var paper1 = document.getElementById("paper1")
	console.log (paper)
	console.log (paper1)

	var now = new Date()

	var height = 300-(now.getMinutes()*5)+"px"
	console.log(height)
	paper.style.height = height
	paper1.style.height = height
}

setInterval(update, 1000)

var date = new Date()
var hrs = date.getHours()
var clockContainer = document.getElementById("clock-container")


for (var i = 0; i < (hrs - 1); i++) {

	hourBlocks();
}

function hourContainer() {
	var date = new Date()
	var hrs = date.getHours()
	var hourBlock = document.getElementById("hour-container");
	hourBlock.style.left = ((hrs + hrs) + (hrs * 50) + "px");
}

function hourBlocks() {
	var hourColumnContainer = document.createElement("div");
	hourColumnContainer.id = 'hour';
	var hourColumn = document.getElementById("hour");
	clockContainer.appendChild(hourColumnContainer);
}

