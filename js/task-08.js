const loginForm = document.querySelector('.login-form');
const emailLoginForm = loginForm.querySelector('[type = "email"]');
const passwordLoginForm = loginForm.querySelector('[type = "password"]')

loginForm.addEventListener('submit', onLoginFormSubmint);

function onLoginFormSubmint (event){
    event.preventDefault();
    let info = {};
    
if(emailLoginForm.value === "" || passwordLoginForm.value ===""){
    alert('Потрібно заповнити всі поля');
}  
else if(emailLoginForm.value !== '' && passwordLoginForm.value !==''){
    info.name = `${emailLoginForm.value}`;
    info.password =`${passwordLoginForm.value}`;
    console.log(info);
    loginForm.reset();
} }

