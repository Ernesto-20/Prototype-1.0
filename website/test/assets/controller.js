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

let sale_btn = document.getElementById("saleBTN");
let subSale = document.getElementById("sub-venta");
let client_btn = document.getElementById("clientBTN");

sale_btn.onclick = function(){
    sale_btn.setAttribute("style", "background: linear-gradient(to left, #01da42, #00FF4C); box-shadow: 0px 2px 5px rgb(122, 122, 122);");
    sale_btn.children.item(0).setAttribute("style", "content: url(\"./assets/images/icons8_cash_register_euro_100px@2x.png\");");
    sale_btn.children.item(1).setAttribute("style", "color: white");
    sale_btn.children.item(2).setAttribute("style", "content: url(\"./assets/images/icon-right-white.png\"); transform: rotate(90deg); transition: transform .5s");

    subSale.setAttribute("style", "height: 100px; transition: all 1s");
}
client_btn.onclick = function(){
    client_btn.setAttribute("style", "background: linear-gradient(to left, #01da42, #00FF4C);");
    // client_btn.children.item(0).setAttribute("style", "content: url(\"./assets/images/icons8_cash_register_euro_100px@2x.png\");");
    client_btn.children.item(1).setAttribute("style", "color: white");
    client_btn.children.item(2).setAttribute("style", "content: url(\"./assets/images/icon-right-white.png\"); transform: rotate(90deg); transition: transform .5s");
}




// Control of view new order (sale)
var client = document.getElementById("inputClient");
var center_cost = document.getElementById("inputCentroCosto");
var add_product = document.getElementById("inputProduct");
var add_amount_product = document.getElementById("inputAmountProduct");
// var add_mixture = document.getElementById("inputMixture");
// var add_amount_mixture = document.getElementById("inputAmountMixture");
var add_product_btn = document.getElementById("addOrder");
var sell = document.getElementById("sell");

function createdItem (){
    product_name = add_product.value;
    amount_product = add_amount_product.value;

    let listOrders = document.getElementById("orders");
    let order = document.createElement("div");
    order.className = 'numberOrder';
    let listItems = document.createElement("ul");

    //Creating item of name product
    insertNameProduct(listItems, product_name);
    insertCodeProduct(listItems, product_name);
    insertAmountProduct(listItems, amount_product);
    insertPriceProduct(listItems, 10.0);
    insertSubTotalProduct(listItems, 10.0*amount_product);

    order.appendChild(listItems);
    listOrders.appendChild(order);
}  


function insertNameProduct(list_items, value){
    let li = document.createElement("li");
    let div = document.createElement("div");
    let a = document.createElement("a");
    li.className = 'hide_column';
    div.className = 'item_order';
    a.href = '#';
    a.innerText = value;
    div.appendChild(a);
    li.appendChild(div);

    list_items.appendChild(li);
}
function insertCodeProduct(list_items, value){
    let li = document.createElement("li");
    let div = document.createElement("div");
    let a = document.createElement("a");
    div.className = 'item_order';
    a.href = '#';
    a.innerText = value;
    div.appendChild(a);
    li.appendChild(div);

    list_items.appendChild(li);
}
function insertAmountProduct(list_items, value){
    let li = document.createElement("li");
    let div = document.createElement("div");
    let input = document.createElement("input");
    div.className = 'item_order';
    input.type = 'number';
    input.value = value;
    input.onchange = changeValue_input;
    div.appendChild(input);
    li.appendChild(div);

    list_items.appendChild(li);
}
function insertPriceProduct(list_items, value){
    let li = document.createElement("li");
    let div = document.createElement("div");
    let input = document.createElement("input");
    div.className = 'item_order';
    input.type = 'number';
    input.value = value;
    input.onchange = changeValue_input;
    div.appendChild(input);
    li.appendChild(div);
    list_items.appendChild(li);
}
function insertSubTotalProduct(list_items, value){
    let li = document.createElement("li");
    let div = document.createElement("div");
    let span = document.createElement("span");
    let img = document.createElement("img");
    img.src = "./assets/images/icon-remove.png";
    img.onclick = function(){
        alert("heloy");
        let item = this.parentElement.parentElement.parentElement;
        item.parentElement.remove(li);
    }

    div.className = 'item_order';
    span.innerText = value;
    div.appendChild(span);
    div.appendChild(img);
    li.appendChild(div);
    list_items.appendChild(li);
}

function changeValue_input(){
            // div            li            ul
    ul = this.parentElement.parentElement.parentElement;
    let amount = ul.children[2].firstChild.firstChild.value;
    let price = ul.children[3].firstChild.firstChild.value;

    ul.lastChild.firstChild.firstChild.innerHTML = amount*price;
}

    //Creating item of name code of product
let countItems = 0;
add_product_btn.onclick = function(){  
    createdItem();

    if(++countItems > 0){
        sell.setAttribute("style", "display: block");
    }
}


