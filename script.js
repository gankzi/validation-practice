const email = document.querySelector('#email');
const country = document.querySelector('#country');
const zipcode = document.querySelector('#zipcode');
const zipcodeError = document.querySelector("#zipcode-error");
const password = document.querySelector('#password');
const passwordError = document.querySelector('#password-error')
const pwConfirm = document.querySelector('#pwconfirm');
const pwConfirmError = document.querySelector('#passwordconfirm-error');
const submit = document.querySelector("#submit");

email.addEventListener('input', () => {

    if(email.validity.typeMismatch) {
        email.setCustomValidity("Type in email address bozo");
    } else {
        email.setCustomValidity("");
    }
});


const zipCodeReg = /^[ABCEGHJ-NPRSTVXY]\d[ABCEGHJ-NPRSTV-Z][ -]?\d[ABCEGHJ-NPRSTV-Z]\d$/i;

window.addEventListener("load", () => {
    const isValid = zipcode.value.length === 0 || zipCodeReg.test(zipcode.value);
    zipcode.className = isValid ? "valid" : "invalid";
});

zipcode.addEventListener('input', () => {

    const isValid = zipcode.value.length === 0 || zipCodeReg.test(zipcode.value);
    if (isValid) {
        zipcode.className = "valid";
        zipcodeError.textContent = "";
        zipcodeError.className = "error";
    } else {
        zipcode.className = "invalid";
    }
});


const passwordReg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

window.addEventListener("load", () => {
    const isValid = password.value.length === 0 || passwordReg.test(password.value);
    password.classname = isValid ? "valid" : "invalid";
});

password.addEventListener('input', () => {
    
    const isValid = password.value.length === 0 || passwordReg.test(password.value);
    if (isValid) {
        password.className = "valid";
        passwordError.textContent = "";
        passwordError.className = "error";
    } else {
        password.className = "invalid";
    }
});

window.addEventListener("load", () => {
    const isValid = pwConfirm.value.length === 0 || pwConfirm.value === password.value;
    pwConfirm.className = isValid ? "valid" : "invalid";
});

pwConfirm.addEventListener('input', () => {
    
    const isValid = pwConfirm.value.length === 0 || pwConfirm.value === password.value;

    if (isValid) {
        pwConfirm.className = "valid";
        pwConfirmError.textContent = "";
        pwConfirmError.className = "error";
    } else {
        pwConfirm.className = "invalid";
    }
});


console.log(country.value);


submit.addEventListener("click", (event) => {
    event.preventDefault();

    if(email.validity.typeMismatch) {
        email.setCustomValidity("Type in email address bozo");
    } else {
        email.setCustomValidity("");
    }

    const isValid = zipCodeReg.test(zipcode.value);

    if(!isValid) {
        zipcode.className = "invalid";
        zipcodeError.textContent = "Please enter your Zip Code";
        zipcodeError.className = "error";
    } else {
        zipcode.classList = "valid";
        zipcodeError.textContent = "";
        zipcodeError.className = "error";
    }

    const isValidPW = passwordReg.test(password.value);

    if(!isValidPW) {
        password.className = "invalid";
        passwordError.textContent = "Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character";
        passwordError.className = "error";
    } else {
        password.classList = "valid";
        passwordError.textContent = "";
        passwordError.className = "error";
    }

    if(pwConfirm.value.length === 0) {
        pwConfirm.className = "invalid";
        pwConfirmError.textContent = "Must confirm password";
        pwConfirmError.className = "error";
    } else if(password.value != pwConfirm.value) {
        pwConfirm.className = "invalid";
        pwConfirmError.textContent = "Password does not match";
        pwConfirmError.className = "error";
    } else {
        pwConfirm.classList = "valid";
        pwConfirmError.textContent = "";
        pwConfirmError.className = "error";
    }
})

