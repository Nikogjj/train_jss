const burger = document.querySelector(".header_burger>i");
const burger_menu = document.querySelector(".header_burger_menu");
burger.addEventListener("click",()=>{
    console.log("oui");
    burger_menu.classList.toggle("none");
    // burger_menu.classList.toggle("");
    burger.classList.toggle("fa-x");
})