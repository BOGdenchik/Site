let save = document.querySelector('#save');
let login = document.querySelector('#login');
let password = document.querySelector('#password');
let repeat = document.querySelector('#repeat');
let control = document.querySelector('#control');
let generate = document.querySelector('#generate');

save.addEventListener('click', () => {
    if (password.value.length < 7 || password.value.length > 15) {
        alert('Введите пароль от 7 до 15 символов');
    } else if (!(/[A-Z]/.test(password.value))) {
        alert('Пароль должен содержать хотя бы одну букву английского алфавита в верхнем регистре');
    } else if (!(/[a-z]/.test(password.value))) {
        alert('Пароль должен содержать хотя бы одну букву английского алфавита в нижнем регистре');
    } else if (!(/[0-9]/.test(password.value))) {
        alert('Пароль должен содержать хотя бы одну цифру');
    } else if (!(/[!@#$%^&*]/.test(password.value))) {
        alert('Пароль должен содержать хотя бы один спецсимвол');
    } else if ((/[^!@#$%^&*A-Z-a-z-0-9]/.test(password.value))) {
        alert('Пароль содержит недопустимые символы');
    } else if (password.value != repeat.value) {
        alert('Пароль и повтор пароля не совпадают');
    } else {
        localStorage.clear();
        localStorage.setItem(login.value, password.value);
        window.location.href = 'log.html';
    }
});

control.addEventListener('click', () => {
    if (password.getAttribute('type') == 'password') {
        control.classList.add('view');
        password.setAttribute('type', 'text');
    } else {
        control.classList.remove('view');
        password.setAttribute('type', 'password');
    }
});

generate.addEventListener('click', () => {
    let chars = 'ksjfjkshflsl1234568"£$%^&*';
    let password_length = 10;
    let pass = '';
    for (let i=0; i<password_length; i++) {
        let randNumber = Math.floor(Math.random()*chars.length);
        pass += chars.slice(randNumber, randNumber+1);
    }
    password.value = pass;
    console.log(pass);
});

