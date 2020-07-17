
// apple
//  Initial value of apple
let appleprice = 0;
let appleQuantity = 0


// adding apple price

function addprice1() {
        appleprice += 10
        appleQuantity++
        document.querySelector("#apple-price").value = appleQuantity;
        let total = appleprice + mangoprice + bananaprice
        document.querySelector("#total span").innerHTML = total;
        let budget = document.querySelector("#budget").value;
        let remaining = budget - total;
        document.querySelector("#r-b span").innerHTML = remaining;
}
// subtracting apple price
function subprice1() {
    appleprice -= 10
    appleQuantity--
    document.querySelector("#apple-price").value = appleQuantity;
    let total = appleprice + mangoprice + bananaprice
    document.querySelector("#total span").innerHTML = total;
    let budget = document.querySelector("#budget").value;
    let remaining = budget - total;
    document.querySelector("#r-b span").innerHTML = remaining;
}
// mango
//  Initial value of mango
let mangoprice = 0;
let mangoQuantity = 0

// adding mango price
function addprice2() {
    mangoprice += 5
    mangoQuantity++
    document.querySelector("#mango-price").value = mangoQuantity;
    let total = appleprice + mangoprice + bananaprice
    document.querySelector("#total span").innerHTML = total;
    let budget = document.querySelector("#budget").value;
    let remaining = budget - total;
    document.querySelector("#r-b span").innerHTML = remaining;
}
// subtracting mango price
function subprice2() {
    mangoprice -= 5
    mangoQuantity--
    document.querySelector("#mango-price").value = mangoQuantity;
    let total = appleprice + mangoprice + bananaprice
    document.querySelector("#total span").innerHTML = total;
    let budget = document.querySelector("#budget").value;
    let remaining = budget - total;
    document.querySelector("#r-b span").innerHTML = remaining;
}
// banana
//  Initial value of banana
let bananaprice = 0;
let bananaQuantity = 0

// adding banana price
function addprice3() {
    bananaprice += 15
    bananaQuantity++
    document.querySelector("#banana-price").value = bananaQuantity;
    let total = appleprice + mangoprice + bananaprice
    document.querySelector("#total span").innerHTML = total;
    let budget = document.querySelector("#budget").value;
    let remaining = budget - total;
    document.querySelector("#r-b span").innerHTML = remaining;
}
// subtracting banana price
function subprice3() {
    bananaprice -= 15
    bananaQuantity--
    document.querySelector("#banana-price").value = bananaQuantity;
    let total = appleprice + mangoprice + bananaprice
    document.querySelector("#total span").innerHTML = total;
    let budget = document.querySelector("#budget").value;
    let remaining = budget - total;
    document.querySelector("#r-b span").innerHTML = remaining;
}







