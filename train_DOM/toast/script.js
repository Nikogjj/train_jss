const boutton_enregistrer = document.querySelector(".hero_section");
const nouvelle_balise_notif = document.createElement("p");

nouvelle_balise_notif.textContent = "Votre document a bien été enregistrer"

boutton_enregistrer.addEventListener("click",()=>{
    nouvelle_balise_notif.classList.add("notification")
    boutton_enregistrer.appendChild(nouvelle_balise_notif);
    nouvelle_balise_notif.classList.add("test_opacity")
    setTimeout(() => {
        nouvelle_balise_notif.classList.remove("notification")
        nouvelle_balise_notif.remove();
    }, 5000);
})