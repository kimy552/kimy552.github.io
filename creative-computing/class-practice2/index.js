//document= 모든거에 적용(배경경)
document.addEventListener("mousemove",handleMouseMove)
//*evt 넣기기
function handleMouseMove(evt) {
   //중요 
    var x=(evt.pageX/window.innerWidth)*255
    var y=(evt.pageY/window.innerHeight)*255

    x =Math.round(x)
    y =Math.round(y)


//지금까지input 이제 output
    var rgbString="rgb("+x+","+y+",255)"
    //e뒤에 배경 색바꿈기 
//"",붙는 이유는 그냥 xy가 ㅏㄴ아닌 rgb 스트링 값을 가진 xy
    console.log(rgbString)
    document.body.style.backgroundColor=rgbString
}