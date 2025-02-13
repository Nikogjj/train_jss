const formulaire = document.querySelector("form");
const tab_input = formulaire.querySelectorAll("div>input");
const tab_div = formulaire.querySelectorAll(".info_formulaire");
console.log(tab_div);

function isValidEmail(email){
    const emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; 
    //Création d'un objet RegexExp
    if (emailFormat.test(email))
    {
    return true;
    }else{
    return false
    }
}

formulaire.addEventListener("submit",function (event){
    event.preventDefault();
    for (let i = 0; i < tab_input.length; i++) {
        const element = tab_input[i].name;
        const element_value = tab_input[i].value;
        console.log("element = " + element + ", element_value = " + element_value + ", i = " + i);
        // console.log(element_value);
        if (element == "prenom" || element == "nom") {
            if (element_value.length<2) {
                console.log(element + "la")
                const div_a_faire_apparaitre = tab_div[i].querySelector("div");
                div_a_faire_apparaitre.classList.remove("error_input_none");
                console.log(div_a_faire_apparaitre)
                // div_a_faire_apparaitre.classList.add("error_input");
                // console.log("oui");
            }
            else{
                const div_a_faire_apparaitre = tab_div[i].querySelector("div");
                div_a_faire_apparaitre.classList.add("error_input_none");
            }
            
        }
        if (element == "mail") {
            if (isValidEmail(element_value) == false) {
                
                const div_a_faire_apparaitre = tab_div[i].querySelector("div");
                div_a_faire_apparaitre.classList.remove("error_input_none");
                console.log(div_a_faire_apparaitre)
                // div_a_faire_apparaitre.classList.add("error_input");
                console.log("oui");
            }
            else{
                const div_a_faire_apparaitre = tab_div[i].querySelector("div");
                div_a_faire_apparaitre.classList.add("error_input_none");
            }
            
        }
    }
})

    // const tab_div = this.querySelectorAll("div");
    // const list_attribut = tab_input[1].getAttribute("name");
    // console.log(list_attribut);
    // for (let i = 0; i < tab_input.length; i++) {
    //     let element = tab_input[i].getAttribute("name");
    //     let element_value = tab_input[i].getAttribute("value");
        
    //     let formData = {};
    //     // formData.a=0;
    //     formData["a"]=0;
    //     formData[element]="toto";
    //     console.log(formData);




    //     console.log(tab_input[i]);
    //     if (element === "prenom") {
    //         console.log(element_value);
    //         if (element_value.length < 2) {
    //             const div_a_faire_apparaitre = tab_div[i].querySelector("div");
    //             div_a_faire_apparaitre.classList.toggle("error_input_none");
    //             console.log("oui");
    //         }
    //     }
    //     else if (element == "nom") {
            
    //     }
    //     console.log(element);
    // }

// const form = document.querySelector("form");
// form.addEventListener("submit",event=>{
//     event.preventDefault();
//     const formData = new FormData(form);
//     const test = formData.getAll("attribute");
//     console.log(test);
//     console.log(formData);
//     console.log(formData.get("nom"));
    
//     formData[]

// });

/**
* Renvoie vrai si la string email passé en paramètre correspond à une
adresse email valide.
*/
