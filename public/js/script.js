
let navOverlay = document.getElementById("nav-overlay");
let allContent = document.getElementById("all-content");
let burga = document.getElementById("burga");

function toggleNav() {
    navOverlay.classList.toggle("show");
    allContent.classList.toggle("blur-sm");
    // allContent.classList.toggle("h-screen");
    allContent.classList.toggle("overflow-hidden");
    let invisible = document.createElement("div");
    invisible.classList.add("fixed", "w-1/3", "left-0", "z-10", "h-screen");
    invisible.onclick = closeNav;
    document.body.prepend(invisible);
}

function closeNav() {
    navOverlay.classList.remove("show");
    allContent.classList.remove("blur-sm");
    // allContent.classList.remove("h-screen");
    allContent.classList.remove("overflow-hidden");
}

// const botonesNav = document.getElementsByClassName("boton-nav");
// botonesNav.array.forEach(boton => {
//     boton.onClick(closeNav);
// });

addEventListener('DOMContentLoaded', () => {
    const btn_menu = document.querySelector(".boton-nav")
    for (i = 0; i > btn_menu.length; i++) {
        btn_menu[i].addEventListener('click', () => {
            console.log("hola", i)
            closeNav()
        })
    }
})

// AOS

AOS.init();