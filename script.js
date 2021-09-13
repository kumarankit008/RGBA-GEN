let inputs=document.querySelectorAll(".input");
<<<<<<< HEAD
let text=document.querySelector(".output");
=======
let text=document.querySelector(".output);
>>>>>>> 3c5cb0b941a0201b930279b90f8ef06b62ace2b7
function getValue(){
    let red=document.getElementById("red").value;
    let green =document.getElementById("green").value;
    let blue =document.getElementById("blue").value;
    let alpha =document.getElementById("alpha").value;
    var colour='rgba('+red+','+green+','+blue+','+ alpha +')';
    document.body.style.backgroundColor=colour;
    document.querySelector(".output").innerHTML=colour;

}

function copy(){
    let element = document.createElement("textarea");
    element.value=text.textContent;
    document.body.appendChild(element);
    element.select();
    document.execCommand("copy");
    document.body.removeChild(element);
    alert("Copied!!");
}
