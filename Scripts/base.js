const ScreenQuery =  window.matchMedia("(max-width: 675px)");

const buttonholder = document.getElementById("Header-Button-Holder");
const hiderbutton = document.getElementById("menu-hider");


function MenuHide(query) {
    hiderbutton.src="../images/icons/menu_closed.svg";
    buttonholder.style.display = query.matches ? "none" : "flex";
}

console.log(window.matchMedia("(max-width: 675px)").matches);
MenuHide(ScreenQuery)

ScreenQuery.addEventListener("change", (e) => { MenuHide(ScreenQuery) })

hiderbutton.addEventListener('click', (e) => {

    buttonholder.style.display = buttonholder.style.display === "none" ? "flex" : "none";

    hiderbutton.src = (hiderbutton.src.endsWith("/images/icons/menu_closed.svg") ? "../images/icons/menu_open.svg" : "../images/icons/menu_closed.svg");

})