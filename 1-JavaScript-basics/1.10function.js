showPow();

function checkAge(age) {
    return age > 18 || confirm('а родители разрешили');
}

function checkAge(age) {
    return age > 18 ? true : confirm('а родители разрешили');
}

function min(a, b) {
    return a < b ? a : b;
}

function showPow() {
    let x = +prompt('Введите число', 1);
    let n = +prompt('Введите число', 1);
    pow(x, n);
}

function pow(x, n) {
    return n > 0 ? alert(Math.pow(x, n)) : showPow();
}