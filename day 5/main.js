let number = 0
let number2 = 0
console.log("hi")
document.getElementById("add").onclick = function(){
    console.log("add was clicked")
    number = number + 1
    console.log(number)
    document.getElementById("num").innerHTML = number
    number = number + 1
}
document.getElementById("reset").onclick = function(){
    console.log("reset was clicked")
    number = 0
    console.log(number)
    document.getElementById("num").innerHTML = number
}
document.getElementById("sub").onclick = function(){
    console.log("sub was clicked")
    number = number -1
    console.log(number)
    document.getElementById("num").innerHTML = number
}




document.getElementById("add2").onclick = function(){
    console.log("2 add was clicked")
    number2 = number2 + 1
    console.log(number)
    document.getElementById("num2").innerHTML = number2
}
document.getElementById("reset2").onclick = function(){
    console.log("2 reset was clicked")
    number2 = 0
    console.log(number2)
    document.getElementById("num2").innerHTML = number2
}
document.getElementById("sub2").onclick = function(){
    console.log("2 sub was clicked")
    number2 = number2 -1
    console.log(number)
    document.getElementById("num2").innerHTML = number2
}
console.getElementById(number + number2)