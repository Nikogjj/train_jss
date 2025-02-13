const div_boutton_dark_mode = document.querySelector(".boutton_click");
const icon = document.querySelector(".boutton_click>i")

div_boutton_dark_mode.addEventListener("click",()=>{
    console.log("oui")
    const boutton_dark_mode = div_boutton_dark_mode.querySelector(".boutton");
    boutton_dark_mode.classList.toggle("boutton_left");
    setTimeout(() => {
        icon.classList.toggle("fa-moon")   
    }, 300);
    // icon.classList.toggle("fa-moon")
    const main = document.querySelector(".main");
    main.classList.toggle("dark_mode");

    const tab_div = document.querySelectorAll("main>div")
    console.log(tab_div)
    tab_div.forEach(function(balise){
        balise.classList.toggle("dark_mode");
    });
})
