/* 1. Дан код:
Подсказка. Чтобы лучше разобраться возьмите этот код и запустите в отладчике в браузере со
включенными точками остановки.

Почему код даёт именно такие результаты?
var a = 1, b = 1, c, d;
c = ++a; alert(c); // 2, так как сначала увеличиваем переменную на 1, а затем выводим её
d = b++; alert(d); // 1, так как сначала выводим значение переменной, а затем увеличиваем её на 1
c = (2+ ++a); alert(c); // 5, в строке 7 мы увеличили переменную до 2, перед сложением увеличиваем переменную а ещё на 1 получили что a=3. итого 2+3=5
d = (2+ b++); alert(d); // 4, в строке 8 мы увеличили переменную до 2, затем сложили 2 + 2 = 4, затем переменную b увеличили на 1
alert(a); // 3
alert(b); // 3

*/

/*2. Чему будет равен x в примере ниже?
var a = 2;
var x = 1 + (a *= 2);
Х будет равен 5, по причине того что оператор *= выполняется раньше сложения 
*/

/*3. Объявить две целочисленные переменные a и b и задать им произвольные начальные значения. Затем написать скрипт, который работает по следующему принципу:
если a и b положительные, вывести их разность;
если а и b отрицательные, вывести их произведение;
если а и b разных знаков, вывести их сумму; ноль можно считать положительным числом. Подсказка, чтобы сделать последний пункт можно также попробовать погуглить по запросу «получить знак числа javascript»
*/
var a = parseInt(prompt("Задайте число a"));
var b = parseInt(prompt("Задайте число b"));
if (a >= 0 && b >= 0 && a <= b) {
    c = b - a;
    alert("Разность чисел a и b =" + " " + c);
}
else if (a >= 0 && b >= 0 && a > b){
    c = a - b;
    alert("Разность чисел a и b =" + " " + c);
}
else if (a < 0 && b < 0){
    c = a * b;
    alert("Произведение чисел a и b =" + " " + c);
}
else if (a < 0 && b >= 0 || a >= 0 && b < 0){
    c = a + b;
    alert("Сумма чисел a и b =" + " " + c);
}


/*4. Присвоить переменной а значение в промежутке [0..15]. С помощью оператора switch организовать вывод чисел от a до 15.*/
var a = parseInt(prompt("Задайте число a в диапазоне [0..15]"));
switch (a){
    case 1:
        console.log("1");
    case 2:
        console.log("2");
    case 3:
        console.log("3");
    case 4:
        console.log("4");
    case 5:
        console.log("5");
    case 6:
        console.log("6");
    case 7:
        console.log("7");
    case 8:
        console.log("8");
    case 9:
        console.log("9");
    case 10:
        console.log("10");
    case 11:
        console.log("11");
    case 12:
        console.log("12");
    case 13:
        console.log("13");
    case 14:
        console.log("14");
    case 15:
        console.log("15");
        break;
    default:
        alert("неверное число");
        break;
}

/*5. Реализовать основные 4 арифметические операции в виде функций с двумя параметрами. Обязательно использовать оператор return.*/

function SummNumber (a, b){
    return a + b;
};
function SubNumber (a, b){
    return a - b;
};
function ComNumber (a, b){
    return a * b;
};
function DivNumber (a, b){
    return a / b;
};


/*6. Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation), где arg1, arg2 – значения аргументов, operation – строка с названием операции. В зависимости от переданного значения операции выполнить одну из арифметических операций (использовать функции из пункта 5) и вернуть полученное значение (использовать switch).*/

function mathOperation(arg1, arg2, operation){
    switch (operation){
        case SummNumber:
            console.log(SummNumber(arg1, arg2));
            break;
        case SubNumber:
            console.log(SubNumber(arg1, arg2));
            break;
        case ComNumber:
            console.log(ComNumber(arg1, arg2));
            break;
        case DivNumber:
            console.log(DivNumber(arg1, arg2));
            break;
        default:
            console.log("Неизвестная операция")

    }
}
/*7) *Сравнить null и 0. Попробуйте объяснить результат.
null - значение отсутсвует, пусто
0 - имеет значение числа 0


/*8) *С помощью рекурсии организовать функцию возведения числа в степень. Формат: function power(val, pow), где val – заданное число, pow – степень.*/
function power(val, pow){
    if (pow <= 0){
        alert("Указана отрицательная степень")
    }
    else if(pow > 1){
        --pow;
        return val * power(val, pow)
    }
    else if(pow == 1){
        return val
    }

}