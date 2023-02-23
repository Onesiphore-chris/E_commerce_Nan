
function addForm(){
  

    let form = document.querySelector('#addForm');
    let log = document.getElementById("btnE")
    var username = document.getElementById('username');
    var email = document.getElementById('email');
    var password = document.getElementById('password');

   
    form.addEventListener('click', (e)=>{
        e.preventDefault();
    })

    log.addEventListener("click", ()=>{
        let card =JSON.parse(localStorage.getItem("username")); 
        let isFound = false;
        console.log(card);
        var user ={
            email: email.value,
            username: username.value,
            password: password.value,
        };
        if(card != null){
            console.log(card)
            card.push(user);
            localStorage.setItem("username", JSON.stringify(card));
            isFound = true
            console.log("ok");
        }else{
            card = [];
            card.push(user);
            localStorage.setItem("username", JSON.stringify(card));
             isFound = true
          
        }
        console.log(isFound)
    
        if(isFound === true){
            window.location.href="../login.html";
        }
    })
   
}

addForm();
