const form = document.querySelector('form');
form.addEventListener('submit', e =>{
    const pass = document.querySelector('#pass1');
    const conPass = document.querySelector('#pass2');
    const errorMsg = document.querySelector('.pass-error-msg');

    if( pass !== conPass){
        e.preventDefault();
        pass.classList.add('error');
        conPass.classList.add('error');
        errorMsg.style.display = 'block';
    }

});