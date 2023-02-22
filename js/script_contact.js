
let btnenvoyer= document.getElementById("boutton");
let formua = document.getElementById("formua");
let nom = document.getElementById("nom")
let email = document.getElementById("email");
let numero = document.getElementById("numero");
let sub = document.getElementById("sub");
let textFormulaire = document.getElementById("textFormulaire");

// newletter 

let formD = document.getElementById("formD");
let emailD = document.getElementById("emailD");
let send = document.getElementById("buttonD");


formua.addEventListener("submit", (e)=>{
    e.preventDefault();
})

btnenvoyer.addEventListener("click",  () => {
    var formData ={
        nom: nom.value,
        email: email.value,
        numero: numero.value,
        sub: sub.value,
        textFormulaire: textFormulaire.value,
    };

    
    
    var data = JSON.stringify(formData);
    localStorage.setItem("formData", data);
    console.log(formData);
 // sctoker dans le localstorage 
});


formD.addEventListener("submit", (e) =>{
    e.preventDefault();
})

send.addEventListener("click",  () =>{
    var formD  ={
        email: emailD.value,
    };
    

    var data = JSON.stringify(formD);
    localStorage.setItem("formD", data);
    
});