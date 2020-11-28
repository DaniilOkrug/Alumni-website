function chooseCategory(x) {
    let button = document.getElementById('categoryDropdown')
    if (x==1) {
        button.innerHTML = "Кепка"
    }
    else if (x==2){
        button.innerHTML = "Футболка"
    }
    else {
        button.innerHTML = "Худи"
    }
}