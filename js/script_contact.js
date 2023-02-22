
let btnenvoyer= document.getElementById("btn");
let formua = document.getElementById("formua");
let nom = document.getElementById("nom")
console.log("ok")
formua.addEventListener("submit", (e)=>{
    e.preventDefault();
})

btnEnvoyer.addEventListener("click", () => {
    console.log(nom.value);
 // sctoker dans le localstorage 

//  localStorage.setItem("nom", document.getElementById("nom").value);

//  console.log(document.getElementById("nom").value);
});