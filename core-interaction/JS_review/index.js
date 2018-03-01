//get input element
var myInput = document.getElementById("input")
 console.log(myInput)
//detect when user types input
myInput.addEventListener("input",onInput)

function onInput() {

var password="secret"
console.log(myInput.value)

if(password == myInput.value){
  console.log("password match")
var myImg=document.createElement("img")
myImg.src="beach.jpeg"

document.body.appendChild(myImg)
}else{
  console.log("no match")
}



}
