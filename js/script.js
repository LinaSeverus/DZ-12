'use strict';

const userNum = +prompt('Введите целое число');

if (userNum < 1) {
    console.log('NaN');
} else {

    for (let i = 2; i <= userNum; i++) {
        if (userNum % i === 0) {
            console.log('Наименьший делитель', i);
            break;
        }
    }
}


