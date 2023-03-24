function animationOnWindowLoadEffect() {
    let component_intro = document.querySelector(".mini-banner-title");
    let component_position = component_intro.getBoundingClientRect().top;

    let windows_position = window.innerHeight / 2;

    if ( !component_intro.classList.contains("animation-throttle-appear")) {
        component_intro.classList.add("animation-throttle-appear")
    }
}

let mobile_hamburger = document.querySelector("#mobile-hamburger");
let mobile_menu = document.querySelector("#mobile-menu");

let close_drawer_nav = document.querySelector("#close-drawer-nav");

mobile_hamburger.addEventListener("click", () => {
    // document.querySelector("#mobile-menu-drawer").classList.remove("hidden");
    if ( document.querySelector("#mobile-menu-drawer").classList.contains("hidden") ) {
        document.querySelector("#mobile-menu-drawer").classList.remove("hidden");
    } else {
        document.querySelector("#mobile-menu-drawer").classList.add("block");
    }
})

close_drawer_nav.addEventListener("click", () => {
    if ( document.querySelector("#mobile-menu-drawer").classList.contains("block") ) {
        document.querySelector("#mobile-menu-drawer").classList.remove("block");
    } else {
        document.querySelector("#mobile-menu-drawer").classList.add("hidden")
    }
})

// Updated via windows
// Window scroll effect
window.addEventListener('load', animationOnWindowLoadEffect);

