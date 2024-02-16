const modal = document.querySelector('.modal');
const modal2 = document.querySelector('.modal2')
let openmodal1 = document.querySelector('.openmodal1')
let openmodal2 = document.querySelector('.openmodal2')
let openmodal3 = document.querySelector('.openmodal3')
let openmodal4 = document.querySelector('.openmodal4')
let limit_button = document.querySelector('.limit_button')
let call_button = document.querySelector('.call_button')
let call_button_1 = document.querySelector('.call_button_1')


openmodal1.addEventListener('click', ()=>{
        modal.classList.add('show');
        document.body.classList.add('stop-scrolling');
        modal.innerHTML = `
        <div class="modal_card">
            <p>Multi-Voyage</p>
            <div class="modal_movie_overwrite">
            <div class="modal_img1"></div>
            <div class="modal_text"> 
            Multi-Voyage подразумевает возможность путешевствовать различными видами транспорта.
            Если вы хотите максимально сократить время и получить доступ к удаленным местам, лучшим выбором будет воздушный транспорт.
            Если же вы ищете глубокое погружение в культуру и природу, рекомендуется использовать наземный транспорт. В конечном счете, путешествия подразумевают исследование и открытие новых мест, что делает и возможным просмотра света совершенно разными способами.
            </div>
            </div>
            <button class="modal_button_close">Закрыть</button>
        </div>
    `;
    const btnClose = document.querySelector('.modal_button_close');
    btnClose.addEventListener('click', () => {closeModal()});
});
openmodal2.addEventListener('click', ()=>{
    modal.classList.add('show');
    document.body.classList.add('stop-scrolling');
    modal.innerHTML = `
    <div class="modal_card">
        <p>Удобное бронирование</p>
        <div class="modal_movie_overwrite">
        <div class="modal_img2"></div>
        <div class="modal_text2"> 
        Одним из основных преимуществ удобного бронирования является экономия времени. 
        Люди могут сэкономить много времени, потому что они больше не должны звонить или посещать физическое место, чтобы забронировать или купить что-то. 
        Вместо этого они могут сделать это в любое время и из любого места, где есть доступ в Интернет. 
        Это особенно полезно для тех, кто ведет активный образ жизни или имеет плотный график работы.
        Кроме того, удобное бронирование также обеспечивает большую гибкость. Люди могут быстро изменить свои планы и отменить или изменить бронирование при необходимости.
        Они могут также легко сравнить различные варианты и выбрать наиболее подходящий для них.
        Тем самым, удобное бронирование становится все более важным аспектом современной жизни.
         Оно обеспечивает экономию времени, гибкость и удобство в мировом обществе, где все быстро меняется и требует быстрых решений.
        </div>
        </div>
        <button class="modal_button_close">Закрыть</button>
    </div>
`;
const btnClose = document.querySelector('.modal_button_close');
btnClose.addEventListener('click', () => {closeModal()});
});
openmodal3.addEventListener('click', ()=>{
    modal.classList.add('show');
    document.body.classList.add('stop-scrolling');
    modal.innerHTML = `
    <div class="modal_card">
        <p>Гарантированное качество</p>
        <div class="modal_movie_overwrite2">
        <div class="modal_block">
            <div class="modal_img">
                <img src="img/traveliccurance.jpg" alt="image" class="modal_image">
            </div>
            <div class="modal_t">
            <p>Страховка</p>
            <p>Каждому нашему клиенту при оформлении тура выдается страховка на случай, если путешествие не удасться</p>
            </div>
        </div>
        <div class="modal_block">
        <div class="modal_img">
                <img src="img/transfer.jpg" alt="image" class="modal_image">
            </div>
            <div class="modal_t">
            <p>Трансфер</p>
            <p>Путешественникам предоставляется комфортный трансфер от аэропорта к отелю</p>
            </div>
            </div>
        <div class="modal_block">
        <div class="modal_img">
                <img src="img/билеты.jpg" alt="image" class="modal_image">
            </div>
            <div class="modal_t">
            <p>Билеты</p>
            <p>Билеты на самолет можно получить в офисе турагенства</p>
            </div></div>
        </div>
        <button class="modal_button_close">Закрыть</button>
    </div>
`;
const btnClose = document.querySelector('.modal_button_close');
btnClose.addEventListener('click', () => {closeModal()});
});
openmodal4.addEventListener('click', ()=>{
    modal.classList.add('show');
    document.body.classList.add('stop-scrolling');
    modal.innerHTML = `
    <div class="modal_card">
        <p>Множество направлений</p>
        <div class="modal_movie_overwrite">
        <div class="modal_img4">
        Наша компания предоставляет путевки во многие страны, такие как Турция, Египет, ОАЭ и другие.
        </div>
        </div>
        <button class="modal_button_close">Закрыть</button>
    </div>
`;
const btnClose = document.querySelector('.modal_button_close');
btnClose.addEventListener('click', () => {closeModal()});
});

function closeModal() {
    modal.classList.remove('show');
    document.body.classList.remove('stop-scrolling');
}
window.addEventListener('click', (event) => {
    if (event.target == modal) {
    closeModal();
    }
})
window.addEventListener('keydown', (event) => {
    if (event.keyCode == 27) {
    closeModal();
    }
});

limit_button.addEventListener('click', ()=>{
    modal2.classList.add('show');
    document.body.classList.add('stop-scrolling2');
    modal2.innerHTML = `
    <div class="modal_card">
        <p>Multi-Voyage</p>
        <div class="modal_movie_overwrite">
        <div class="modal_img1"></div>
        <div class="modal_text"> 
        Multi-Voyage подразумевает возможность путешевствовать различными видами транспорта.
        Если вы хотите максимально сократить время и получить доступ к удаленным местам, лучшим выбором будет воздушный транспорт.
        Если же вы ищете глубокое погружение в культуру и природу, рекомендуется использовать наземный транспорт. В конечном счете, путешествия подразумевают исследование и открытие новых мест, что делает и возможным просмотра света совершенно разными способами.
        </div>
        </div>
        <button class="modal_button_close2">Закрыть</button>
    </div>
`;
const btnClose = document.querySelector('.modal_button_close2');
btnClose.addEventListener('click', () => {closeModal2()});
});

function closeModal2() {
    modal2.classList.remove('show');
    document.body.classList.remove('stop-scrolling2');
}
window.addEventListener('click', (event) => {
    if (event.target == modal2) {
    closeModal2();
    }
})
window.addEventListener('keydown', (event) => {
    if (event.keyCode == 27) {
    closeModal2();
    }
});
call_button.addEventListener('click', () => {
    call_button.classList.remove('show');
    call_button_1.classList.add('show');
})
call_button_1.addEventListener('click', () => {
    call_button_1.classList.remove('show');
    call_button.classList.add('show');
})

