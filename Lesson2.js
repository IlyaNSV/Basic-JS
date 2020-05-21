/**
//Task_1
let a = 1, b = 1, c, d;
c = ++a;
alert(c); // ответ: 2 т.к ++ перед переменной прибавляет 1 к ней и сразу возвращает новое значение
//пример 2
d = b++;
alert(d); //ответ: 1 т.к ++ после переменной прибавляет к ней 1, но возвращает значение предыдущее (до прибавления)
//пример 3
c = 2 + ++a;
alert(c); //ответ: 5 т.к 2 + а=2, к которому сразу прибавили 1 и вернули полученную 3
//пример 4
d = 2 + b++;
alert(d); //ответ: 4 т.к к 2 сначала прибавили b=2 и получили 4, и только после прибавили к b единицу, поэтому b=3
alert(a); //3
alert(b); //3 выше к а два раза прибавляли единицу
**/

/**
//Task_2
let a = 2;
let x = 1 + (a *= 2);
alert(x); // получается 5 т.к *= означает умножение переменной на 2 и получается 1+4=5
 **/

/**
//Task_3
let a = Number(prompt("Enter the first number"));
let b = Number(prompt("Enter the second number"));
if (isNaN(a) || isNaN(b)){
    alert("You should enter only numbers!");
}
if (a>=0 && b>=0){
    alert(a-b);
} else if (a<0 && b<0){
    alert(a*b);
} else {
    alert(a+b); // в данном пункет проверки на разные числа не стал заморачиваться с библиотекой math
}
 **/

/**
//Task_4
let a = Number(prompt("Enter the first number"));
let b = Number(prompt("Enter the second number"));
if (isNaN(a) || isNaN(b)){
    alert("You should enter only numbers!");
}
function sum_maker(a,b){
    return `The sum is ${a+b}`;
}
function minus_maker(a,b){
    return `The minus is ${a-b}`;
}
function mult_maker(a,b){
    return `The mult is ${a*b}`;
}
function div_maker(a,b){
    return `The div is ${a/b}`;
}
alert(sum_maker(a,b));
alert(minus_maker(a,b));
alert(mult_maker(a,b));
alert(div_maker(a,b));
**/

/**
//Task_5
function mathOperation(arg1, arg2, operation){
    function sum_maker(a,b){
        return `The sum is ${a+b}`;
    }
    function minus_maker(a,b){
        return `The minus is ${a-b}`;
    }
    function mult_maker(a,b){
        return `The mult is ${a*b}`;
    }
    function div_maker(a,b){
        return `The div is ${a/b}`;
    }
    switch (operation) {
        case 'sum': return sum_maker(arg1,arg2);
        case 'minus': return minus_maker(arg1,arg2);
        case 'mult': return mult_maker(arg1,arg2);
        case 'div' : return div_maker(arg1,arg2);
        default: alert('Unknown function')
    }
}
let a = Number(prompt("Enter the first number"));
let b = Number(prompt("Enter the second number"));
let func = prompt("Enter the function from: sum,minus,mult,div");
alert(mathOperation(a,b,func));
// В данном задании столкнулся с такой штукой, что если функция родитель вызывает встроенную функцию у которой
// есть return, то это не означает, что функция родитель выдаст нам значение, если перед дочерней нет еще одного return
**/

/**
//Task_6
let num = prompt("Enter the money amount");
lastone = num.toString().split('').pop(); // эту строчку нагуглил, надеюсь, не карается ;)
switch (true) {
    case ((num>=5 && num<=20) || lastone === "0" || (lastone>=5 && lastone<=9)) : {alert(`На счет поступило ${num} рублей`)}
    break;
    case (lastone === "1") :{alert(`На счет поступило ${num} рубль`)}
    break;
    default: {alert(`На счет поступило ${num} рубля`)}
}
**/