function loginFunction(){

    let form = document.querySelector('#addForm');
    let log = document.getElementById("btn-2")
    var email = document.getElementById('email');
    var password = document.getElementById('password');


form.addEventListener('submit', (e) =>{
    e.preventDefault();
});

log.addEventListener("click", () =>{

    console.log(email.value)
    var result = document.getElementById('result');

    var user = localStorage.getItem("username");
    var data = JSON.parse(user);
    data.forEach(element => {
        
        if(user !== null ){
           
            if(email.value === element.email ){
                if( password.value === element.password){
                    window.location.href="users/index.html";
                }
                else{
                    result.textContent = 'mot de passe incorrect';
                }
            }
            else{
                result.textContent = 'email est incorrect';
            }
        }
        else{
            result.textContent = "mauvais email";
        }

        
            })
})
   
       
    
    



  

    
}
loginFunction()