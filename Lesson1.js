"use strict"
//Task_1
let celcius = prompt('Введите температуру в градусах цельсия');
let farenheit = (9/5) * celcius + 32;
alert(`Получилось ${farenheit} градуса фаренгейт`);

//Task_2
let admin = null;
let name = "Василий";
admin = name;
console.log(admin)

//Task_3
let result = 10 + 10 + "10"
console.log(result)
// интерпритатор считает как сумму первых двух десяток + объединение со строкой 10 и изменение общего типа на строку "2010"
result = 10 + "10" + 10
console.log(result)
// интрепритатор складывает число со строкой, образуя общую строку 1010 и к ней добавляет преобразованную в строку 10,
// получается новая строка "101010"
result = 10 + 10 + +"10"
console.log(result)
// третий плюс в выражении рассматривается как унарный, преобразующий str в int
result = 10 / -""
console.log(result)
// отрицательная бесконечность получается при делении 10 на отрицательный 0 или аналогичную отрицательную "" пустоту
result = 10 / +"2,5"
console.log(result)
// деление int на str не преобразовывается интерпритатором, поэтому он выдает ошибку "not a number"

//Task_4
let mode = "normal"; // если не ошибаюсь, mode - зарезервиновано языком, поэтому лучше так не делать
let my_valu3 = 102; // такое может быть, но если рассматривать 3 как аналог е, то тоже не следует так писать
let 3my_value3 = "102"; // даже оболочка подсвечивает ошибку, нельзя начинать переменную с цифры
let __hello__ = "world"; // напоминает метод класса, так тоже лучше не писать
let $$$ = "money"; // плохой тон
let !0_world = true; // некорректное название