let number = 0
console.log("hi")
document.getElementById("add").onclick = function(){
    console.log("add was clicked")
    number = number + 1
    console.log(number)
    document.getElementById("num").innerHTML = number
}
document.getElementById("reset").onclick = function(){
    console.log("reset was clicked")
    number = 0
    console.log(number)
    document.getElementById("num").innerHTML = number
}
document.getElementById("sub").onclick = function(){
    console.log ("sub was clicked")
    number = number - 1
    console.log(number) 
    document.getElementById("num").innerHTML = number
}