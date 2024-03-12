let loginBtn = document.getElementById("submit-login");

loginBtn.addEventListener("click", ()=>{
    console.log("botão clicado");
});

function togglePasswordVisibility(){
    const passwordInput = document.getElementById('password');
    const toggleIcon = document.querySelector('#toggleIcon img');

    if(passwordInput.type === 'password'){
        passwordInput.type = 'text';
        toggleIcon.src = 'img/view.png';
    }
    else{
        passwordInput.type = 'password';
        toggleIcon.src = 'img/hide.png'
    }
}

document.querySelector('#toggleIcon').addEventListener('click', togglePasswordVisibility);