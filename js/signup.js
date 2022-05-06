const btnSignUp = document.querySelector('#signup');
 
btnSignUp.addEventListener('click', e => {
    fetch('/signup.php', {
        method: 'POST',
        headers: {
            '': ''
        }
    }).then(res => res.text())
        
})