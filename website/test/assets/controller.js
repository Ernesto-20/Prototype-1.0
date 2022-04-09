let desplegate = document.getElementById("icon_desplegate");
let menu = document.getElementById("MainMenu");
let open = false;

desplegate.onclick = function(){
    console.log("hi");
    if(!open){
        menu.setAttribute("style", "left: 0vw; transition: left 1s");
    }else{
        console.log("else");
        menu.setAttribute("style", "left: -65vw; transition: left 1s;");
    }
    open = !open;
}