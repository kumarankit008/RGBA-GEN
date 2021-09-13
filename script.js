let inputs=document.querySelectorAll(".input");
let text=document.querySelector(".output");
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