document.addEventListener("DOMContentLoaded", function() {
    var desMenu = document.querySelector(".des_menu");
    var selectMenu = document.querySelector(".select_menu");
    var selectMenuMobile = document.querySelector(".select_menu_mobile");

    desMenu.addEventListener("click", function() {
        // Cambia la visibilidad del menú al hacer clic en el ícono
        if (selectMenu.style.display === "none") {
            selectMenu.style.display = "flex";
            selectMenu.style.flexDirection = "column";
            selectMenu.style.gap = "15px";
        } else {
            selectMenu.style.display = "none";
        }
    });
});