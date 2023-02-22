
function addForm(e){
    event.preventDefault;


    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    var user ={
        email: email,
        username: username,
        password: password,
    };

    let card =JSON.parse(localStorage.getItem(username)); 

    console.log('user added');
    
    if(card == true){
        card.push(user);
        localStorage.setItem("username", JSON.stringify(card));
        console.log(red);
    }else{
        card = [];
        card.push(user);
   let red =  localStorage.setItem("username", JSON.stringify(card));
            
    }

}




/*

let addForm = document.getElementById('addForm');
let username = document.getElementById('username');
let email = document.getElementById('email');
let password = document.getElementById('password');
let btnE = document.getElementById('btnE');



addForm.addEventListener("btnE", (e) =>{
    e.preventDefault();
})



btnE.addEventListener("click", () =>{

    var userE = {
        username: username.value,
        email: email.value,
        password: password.value,
    };

    var data = JSON.stringify(userE);
    localStorage.setItem("username", data);
    console.log(userE);
 
});
  */

function loginFunction(e){
    event.preventDefault();

var email = document.getElementById('email').value;
var password = document.getElementById('password').value;
var result = document.getElementById('result');


var user = localStorage.getItem(email);
var data = JSON.parse(user);

console.log(data);

if(user == null ){
    result.innerHTML = 'mauvais email';
}else if(email == data.email && password == data.password){
        result.innerHTML = 'connecter'
}else{
    result.innerHTML = 'erreur de mot de passe';
}






}














 /*  
let loginFunction = document.getElementById('loginFunction');
let email_ins = document.getElementById('email_ins');
let password_ins = document.getElementById('password_ins');
let button_ins = document.getElementById('button_ins');



loginFunction.addEventListener("button_ins", (e) =>{
    e.preventDefault();
})

button_ins.addEventListener("click", () =>{
    var formE ={
        email_ins: email_ins.value,
        password_ins: password_ins.value,

    };


    var data = JSON.stringify(formE);
    localStorage.setItem("formE", data);
    console.log(formE);
});
*/