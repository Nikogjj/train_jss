const div2 = document.querySelector(".div2");
const pop_up = document.querySelector(".pop_up")
const pop_up_boutton = pop_up.querySelector("i");
console.log(div2.offsetTop)

window.addEventListener("scroll",()=>{
    const windowTop = document.documentElement.scrollTop;
    let check = div2.offsetTop;
    check = check-windowTop;
    console.log(windowTop);
    console.log(check);
    if (check < 0) {
        pop_up.classList.add("pop_up_appears");
        pop_up.classList.add("pop_up_appears_zindex");
    }
})

pop_up_boutton.addEventListener("click",()=>{
    pop_up.classList.toggle("pop_up_appears");
    setTimeout(() => {
        pop_up.remove();
        console.log("oui")
    }, 500);
})