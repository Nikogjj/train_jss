const full_heart = document.querySelector(".like_and_subscribe>coeur>i");
const count_like = document.querySelector(".like_and_subscribe>coeur>p");
let count = 0;
full_heart.addEventListener("click",()=>{
    console.log("oui");
    if (full_heart.classList.toggle("fa-regular") == false) {
        count++;
        count_like.textContent = count;
    }
    else{
        count --;
        count_like.textContent = count;
    }
    
    full_heart.classList.toggle("fat");
    // full_heart.classList.toggle("hidden")
});
const boutton_abonnement = document.querySelector(".like_and_subscribe>pouce>button");
boutton_abonnement.addEventListener("click",()=>{
    console.log("non");
    boutton_abonnement.classList.toggle("subscribed")
    if (boutton_abonnement.textContent == "Abonne toi !") {
        boutton_abonnement.textContent = "Abonné"
    }
    else{
        console.log("okkkkk");
        boutton_abonnement.textContent = "Abonne toi !";
    }
    // boutton_abonnement.textContent = "Abonné"
    const pouce = document.querySelector(".like_and_subscribe>pouce>i");
    pouce.classList.toggle("hidden");
})