let menuHide = document.getElementById("menuHide");
let menu = document.getElementById("menu");

let desplegate = document.getElementById("icon_desplegate");
desplegate.onclick = function(){
    // alert("Hello");
    // menuHide.setAttribute("style", "display:flex;")
    // menuHide.setAttribute("style", "display:flex;");
    menuHide.innerHTML=menu.innerHTML;
}