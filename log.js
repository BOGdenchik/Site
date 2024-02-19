let enter = document.querySelector('#enter');
let login = document.querySelector('#login');
let password = document.querySelector('#password');

enter.addEventListener('click', () => {
    if (login.value != localStorage.key(0)) {
        alert('Пользователь не найден');
        console.log(localStorage.key(0));
    } else if (password.value != localStorage.getItem(login.value)) {
        alert('Неверный пароль');
        console.log(localStorage.getItem(login.value));
    } else {
        window.location.href = 'index.html';
    }
});