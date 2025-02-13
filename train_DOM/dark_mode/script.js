const tab_css = document.querySelectorAll("body *");
// console.log(tab_css);
const tab_div_boutton_click = document.querySelectorAll("main>.boutton_click");

tab_div_boutton_click.forEach((div_boutton)=>{
    div_boutton.addEventListener("click",()=>{
        tab_css.forEach((balise)=>{
            if (balise == div_boutton.querySelector(".boutton")) {
                for (let i = 0; i < tab_div_boutton_click.length; i++) {
                    const boutton = tab_div_boutton_click[i].querySelector(".boutton") ;
                    const icon = tab_div_boutton_click[i].querySelector("i") ;
                    boutton.classList.toggle("boutton_left");
                    icon.classList.toggle("fa-moon");
                }
            }
            balise.classList.toggle("dark_mode");
        });
    });
})