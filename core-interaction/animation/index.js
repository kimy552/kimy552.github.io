//when a click happens
window.addEventListener("click", onWindowClick)

function onWindowClick(evt){
console.log(evt.x, evt.y)
document.getElementById("bike")

mybike.style.top = evt.y + "px"
myBike.style.left= evt.x + "px"
}
