let name;
let lname;
const pi = 3.75

document.getElementById("btn").onclick = function() {
    name2 = document.getElementById("text1").value;
    lname = document.getElementById("text2").value;
    console.log(name2 +" " +lname)

    console.log(pi)
document.getElementById("jstext").innerHTML = "your last name is"+lname
}