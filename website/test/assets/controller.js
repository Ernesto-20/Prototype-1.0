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

let sale = document.getElementById("saleBTN");
let subSale = document.getElementById("sub-venta");

sale.onclick = function(){
    sale.setAttribute("style", "background: linear-gradient(to left, #01da42, #00FF4C);");
    sale.children.item(0).setAttribute("style", "content: url(\"./assets/images/icons8_cash_register_euro_100px@2x.png\");");
    sale.children.item(1).setAttribute("style", "color: white");
    sale.children.item(2).setAttribute("style", "content: url(\"./assets/images/icon-right-white.png\"); transform: rotate(90deg); transition: transform .5s");

    subSale.setAttribute("style", "height: 100px; transition: all 1s");
}

let client = document.getElementById("clientBTN");
client.onclick = function(){
    client.setAttribute("style", "background: linear-gradient(to left, #01da42, #00FF4C);");
    // sale.children.item(0).setAttribute("style", "content: url(\"./assets/images/icons8_cash_register_euro_100px@2x.png\");");
    client.children.item(1).setAttribute("style", "color: white");
    client.children.item(2).setAttribute("style", "content: url(\"./assets/images/icon-right-white.png\"); transform: rotate(90deg); transition: transform .5s");
}