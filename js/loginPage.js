document.getElementById('submit-btn').addEventListener('click', function(){

    const inputEmail = document.getElementById('email-type')
    const inputEmailValue = inputEmail.value
    

    const inputPassword = document.getElementById('password-type')
    const inputPasswordValue = inputPassword.value
    
    if(inputEmailValue === 'mirnoman@gmail.com' && inputPasswordValue === 'noman'){
        window.location.href = 'bank.html'
    }
    else{
        alert('invalid user')
    }

})