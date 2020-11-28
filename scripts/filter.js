function filter() {
    let items = document.querySelectorAll(".item");
    let typeArr = typeCheck();
    let price = priceCheck();

    items.forEach(element => {

        element.classList.remove("show")
        element.classList.forEach(cls => {
            if (typeArr.includes(cls)) element.classList.add("show");
            
        });
    });
}

function typeCheck() {
    let tshirtCheckBox = document.getElementById("TypeCheckBoxT-Shirt");
    let hoodieCheckBox = document.getElementById("TypeCheckBoxHoodie");
    let capCheckBox = document.getElementById("TypeCheckBoxCap");
    let typeArr = new Array();
    let emptyType = true;

    if (tshirtCheckBox.checked) {
        typeArr.push("t-shirt");
        emptyType = false;
    }
    if (hoodieCheckBox.checked) {
        typeArr.push("hoodie");
        emptyType = false;
    }
    if (capCheckBox.checked) {
        typeArr.push("cap");
        emptyType = false;
    }
    if (emptyType) {
        typeArr.push("t-shirt", "cap", "hoodie");
    }
    return typeArr;
}

function priceCheck() {
    let priceUnder25 = document.getElementById("under25");
    let price25_50 = document.getElementById("2550");
    let price50_100 = document.getElementById("50100");
    let price100_200 = document.getElementById("100200");
    let price200Above = document.getElementById("200above");
    let priceArr = new Array();
    let emptyPrice = true;

    if (priceUnder25.checked) {
        priceArr.push("price-0-25");
        emptyPrice = false;
    }
    if (price25_50.checked) {
        priceArr.push("price-25-50");
        emptyPrice = false;
    }
    if (price50_100.checked) {
        priceArr.push("price-50-100");
        emptyPrice = false;
    }
    if (price100_200.checked) {
        priceArr.push("price-100-200");
        emptyPrice = false;
    }
    if (price200Above.checked) {
        priceArr.push("price-200above");
        emptyPrice = false;
    }
    if (emptyPrice) {
        priceArr.push("price-0-25", "price-25-50", "price-50-100", "price-100-200", "price-200above")
    }
    return priceArr;
}

function sizeCheck() {
    
}