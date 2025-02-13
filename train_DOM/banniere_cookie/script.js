const cookie_sections = document.querySelectorAll("section");

const section_cookie = cookie_sections[0];
const section_cookie_parametre = cookie_sections[1];

function cookieAccepted(){
    section_cookie.classList.toggle("cookies_diseapear");
}
function cookieParametre(){
    section_cookie.remove();
    section_cookie_parametre.classList.toggle("cookies_diseapear");
}

const tab_section_cookie_bouttons = section_cookie.querySelectorAll(".containeur_boutton>button")
const first_boutton_cookie = tab_section_cookie_bouttons[0];
first_boutton_cookie.addEventListener("click",cookieAccepted);

const second_boutton_cookie = tab_section_cookie_bouttons[1];
second_boutton_cookie.addEventListener("click",cookieParametre);



const tab_section_cookie_parametre_bouttons = section_cookie_parametre.querySelectorAll(".containeur_boutton>button")
const first_boutton_cookie_paremetre = tab_section_cookie_parametre_bouttons[0];
const second_boutton_cookie_paremetre = tab_section_cookie_parametre_bouttons[1];

function cookieParametreAccepted(){
    section_cookie_parametre.classList.toggle("cookies_diseapear");
}
first_boutton_cookie_paremetre.addEventListener("click",cookieParametreAccepted);

function cookieParametreRefused(){
    console.log("oui");
    section_cookie_parametre.classList.toggle("cookies_diseapear");
}
second_boutton_cookie_paremetre.addEventListener("click",cookieParametreRefused);
