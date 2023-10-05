const menuIcon = document.getElementById("menu-icon")
const menu = documen.getElementById("menu");

menuIcon?.addEventListener("click", ()=>{
    if(menu.className === "hidden"){
        menu.classList.remove("hidden");
    }else{
        menu.classList.add("hidden");
    }
})