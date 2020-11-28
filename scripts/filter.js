function filter() {
    let items = document.getElementsByClassName("item");
    let typeArr = TypeCheck();
    let price = PriceCheck();

    for (i = 0; i < items.length; i++) {
        RemoveClass(items[i], "show");
        for (j = 0; j < typeArr.length; j++) {
            if (items[i].className.indexOf(typeArr[j]) > -1) {
                AddClass(items[i], "show");
            }
        }
    }
}

function RemoveClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
            arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
    }
    element.className = arr1.join(" ");
}

function AddClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) { element.className += " " + arr2[i]; }
    }
}

function TypeCheck() {
    let tshirtCheckBox = document.getElementById("TypeCheckBoxT-Shirt");
    let hoodieCheckBox = document.getElementById("TypeCheckBoxHoodie");
    let capCheckBox = document.getElementById("TypeCheckBoxCap");
    let typeArr = new Array();

    if(tshirtCheckBox.checked) {
        typeArr.push("t-shirt");
    }else if(hoodieCheckBox.checked) {
        typeArr.push("hoodie");
    }else if(capCheckBox.checked) {
        typeArr.push("cap");
    }else{
        typeArr.push("t-shirt");
        typeArr.push("hoodie");
        typeArr.push("cap");
    }
    return typeArr;
}

function PriceCheck(){
    let priceUnder25 = document.getElementById("under25");
    let price25_50 = document.getElementById("2550");
    let price50_100 = document.getElementById("50100");
    let price100_200 = document.getElementById("100200");
    let price200Above = document.getElementById("200above");
    let price;

    if(priceUnder25.checked){
         price = "price-0-25";
    }else{
        if(price25_50.checked){
            price = "price-25-50";
        }else{
            if(price50_100.checked){
                price = "prcie-50-100";
            }else{
                if(price100_200.checked){
                    price = "price-100-200";
                }else{
                    if(price200Above){
                        price = "price-200-above";
                    }else{
                        price = "all";
                    }
                }
            }
        }
    }
    return price;
}