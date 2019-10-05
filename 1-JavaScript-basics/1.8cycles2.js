for (i = '#';; i += '#') {
    if (i.length < 8)
        console.log(i);
}

j = '#';
for (l = 0; l < 7; l++) {
    if (l != 0) j += '#';
    console.log(j);
}

for (y = 1; y < 101; y++) {
    if (y % 3 == 0 && y % 5 == 0) {
        console.log('кратно 3 и 5');
        continue;
    }
    if (y % 3 == 0) {
        console.log('кратно 3');
        continue;
    }
    if (y % 5 == 0) {
        console.log('кратно 5');
        continue;
    }
    console.log(y);
}

for (b = 0; b < 8; b++) {
    if (b % 2 == 0) {
        console.log(' # # # #');
    } else { console.log('# # # #'); }

}

var h1 = '';
var h2 = '';
var g = 0;

for (var v = 0; v < 8; v++) {

    for (; g < 8; g++) {
        if (g % 2 == 0) {
            h1 += '#';
            h2 += ' ';
        } else {
            h1 += ' ';
            h2 += '#';
        };
    };

    console.log(h1 + '\n' + h2 + '\n' + h1 + '\n' + h2 + '\n' + h1 + '\n' + h2 + '\n' + h1 + '\n' + h2);
}

let board = '';
const size = 8;

for (let v = 0; v < size; v++) {

    for (let g = 0; g < size; g++) {
        if (g % 2 == 0) {
            board += '#';
        } else {
            board += ' ';
        };
    };
    board += '\n';
}