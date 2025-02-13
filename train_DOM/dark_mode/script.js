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
})