/* 1. 1. С помощью цикла while вывести все простые числа в промежутке от 0 до 100*/
var i = 2;
var j = 2;
while (j <= i && i <= 100){
    let x = i % j;
    if (x == 0 && j < i) {
        j = 2;
        i++;
    }
    else if (x == 0 && j == i){
        console.log(i);
        j = 2;
        i++;
    }
    else if (x != 0){
        j++;
    }
}


/*2. С этого урока начинаем работать с функционалом интернет-магазина. Предположим, есть сущность корзины. Нужно реализовать функционал подсчета стоимости корзины в зависимости от находящихся в ней товаров.
3. Товары в корзине хранятся в массиве. Задачи:
a) Организовать такой массив для хранения товаров в корзине;
b) Организовать функцию countBasketPrice, которая будет считать стоимость корзины.
*/
var objBasket = [
    {Title: "Хлеб", Cost: 37}, 
    {Title: "Соль", Cost: 10}, 
    {Title: "Колбаса", Cost: 253}, 
    {Title: "Масло", Cost: 124},];

function countBasketPrice(objBasket){
    let x = 0;
    for (i = 0; i < objBasket.length; i++){
        x = x + objBasket[i].Cost;
    }
    return x;
}

/*
4.*Вывести с помощью цикла for числа от 0 до 9, не используя тело цикла. Выглядеть это должно так:
for(…){// здесь пусто}*/
for (i = 0; i <= 9; i++) console.log(i)

/*4) *Нарисовать пирамиду с помощью console.log, как показано на рисунке, только у вашей пирамиды должно быть 20 рядов, а не 5:
x
xx
xxx
xxxx
xxxxx
*/
let PiramidOfX = 'x';
for (i = 1; i <= 20; i++){
    console.log(PiramidOfX);
    PiramidOfX = PiramidOfX + 'x';
}
