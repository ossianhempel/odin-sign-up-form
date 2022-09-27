function samePassword() {
    pw1 = document.querySelector("#password");
    pw2 = document.querySelector("#confirm-password");
    
    if (pw1.value != pw2.value) {
        pw1.classList.add("password-error");
        pw2.classList.add("password-error");
        formContainer.appendChild(pwErrorMessage);

    } else {
        pw1.classList.remove("password-error");
        pw2.classList.remove("password-error");
        formContainer.removeChild(pwErrorMessage);

    }
    
};



const createAcccountBtn = document.querySelector('button');
const pwErrorMessage = document.createElement('p');
pwErrorMessage.textContent = "*Passwords do not match";
pwErrorMessage.classList.add("password-error");
const formContainer = document.querySelector('.right-mid-container');










createAcccountBtn.addEventListener('click', () => samePassword());

