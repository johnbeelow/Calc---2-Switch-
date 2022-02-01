// ----------------------------------------------------------------CALC SWITCH VERSION -----------------------------------------------------------
    // '6' - Делаем переменную что операнды а и b не являються числами
    // '7-8' - Запускаем проверку на то что а и b не являються числами, если true, запускается возврат 'Erorr'
// -----------------------------------------------------------------------------------------------------------------------------------------------
function Calc(func, a, b) {
    let isNotValid = (typeof a !== 'number') || (typeof b !== 'number');
    if (isNotValid) {
        return ('Error');
    }
    switch (func) {
        case 'sum': 
        return (a + b);
        case 'sub': 
        return (a - b);
        case 'multi': 
        return (a * b);
        case 'div': 
        return (a / b);
        case 'rem': 
        return (a % b);
        case 'con': 
        return(a ** b);
        default:
            return 'unknown operation';

    }
}

console.log(Calc('sum', 40, 10));
console.log(Calc('sub', 100, 50));
console.log(Calc('multi', 5, 10));
console.log(Calc('div', 100, 2));
console.log(Calc('rem', 50, 100));
console.log(Calc('con', 2, 6));
console.log(Calc('non', 'non', 'non'));
console.log(Calc('', '', ''));
console.log(Calc());
console.log(Calc('fff', 5, 5));


