document.addEventListener("DOMContentLoaded", function() {
    const menuContainer = document.getElementById('menu-container');

    function firstRender(){
        fetch("components/menu.html")
        .then(response => response.text())
        .then(data =>{
            menuContainer.innerHTML = data;
        });
    };

    firstRender();















});