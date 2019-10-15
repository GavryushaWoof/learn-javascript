'use strict';
var nameJS = prompt('Какое официальное название JavaScript?', ' ');
if (nameJS == 'ECMAScript') {
    alert('Верно!');
} else {
    alert('Не знаете? "ECMAScript"!');
}

var appraisal = prompt('Оцените наш сайт от "-5" до "5", где "-5" это ужасно, "0" нейтрально, "5" замечательно.', 0);
if (appraisal > 0) {
    alert(1);
} else if (appraisal < 0) {
    alert(-1);
} else {
    alert(0);
}

var password;
var userName = prompt('Кто пришел?', ' ');
if (userName == null) {
    alert('Вход отменен.');
} else if (userName != 'Админ') {
    alert('Я вас не знаю!');
} else {
    password = prompt('Пароль?', ' ');
    if (password == null) {
        alert('Вход отменен.');
    } else if (password != 'Черный Властелин') {
        alert('Пароль неверен.');
    } else {
        alert('Добро пожаловать!');
    }
}

var a = prompt('Сколько стаканов воды вы выпили утром?', 0);
var b = prompt('Сколько стаканов воды вы выпили вечером?', 0);
var result = (+a + +b < 4) ? 'Мало' : 'Много';
alert(result);

var login = prompt('Кто ты?', ' ');
var message = (login == 'Вася') ? 'Привет' :
    (login == 'Директор') ? 'Здравствуйте' :
    (login == ' ') ? 'Нет логина' :
    ' ';
alert(message);