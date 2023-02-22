const signUp = e =>{
    let formData ={
        username: document.getElementById('username').value,
        email: document.getElementById('email').value,
        password: document.getElementById('password').value, 
    }
    localStorage.setItem('formData', JSON.stringify(formData));
    e.preventDefault();
}