'use strict'
// 1. получить объект модального окна с классом .wrap
let our_window = document.querySelector('.wrap');
// 2. получить тег span, используемый для закрытия окна
let closing_span=our_window.querySelector('span');
// 3. получить кнопку, используемую для показа модального окна
let show_button=document.querySelector('button');
// 4. назначить обработку клика на кнопку показа модального окна
// когда функция обработчик срабатывает она должна у модального
// окна удалять класс hidden
show_button.addEventListener('click', function (event) {
    our_window.classList.remove('hidden');
});
// 5. назначить обработку клика на тег span, при клике
// в обработчике модальному окну должен быть добавлен
// класс hidden
closing_span.addEventListener("click", function (event) {
    our_window.classList.add('hidden');
});