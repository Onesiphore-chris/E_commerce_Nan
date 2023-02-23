
function addForm(){
  
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    var user ={
        email: email,
        username: username,
        password: password,
    };

    let card =JSON.parse(localStorage.getItem(username)); 
    let isFound = false;
    console.log('user added');
    
    if(card){
        card.push(user);
        localStorage.setItem("username", JSON.stringify(card));
        isFound = true
    }else{
        card = [];
        card.push(user);
        localStorage.setItem("username", JSON.stringify(card));
         isFound = true
    }

    if(isFound === true){
        window.location.href="../login.html";
    }
}
