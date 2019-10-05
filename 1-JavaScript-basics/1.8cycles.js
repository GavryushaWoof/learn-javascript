"use strict";
var i = 2;
for (; i <= 10; i++) {
    if (i % 2 == 0) {
        alert(i);
    }
}
var a = 0;
while (a < 3) {
    alert('Номер ' + a + ' !');
    a++;
}

var b;
do {
    b = prompt('Введите число больше 100', 0);
}
while (b <= 100 && b != null);

var d = 2;