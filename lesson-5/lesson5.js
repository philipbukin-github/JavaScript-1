/*1. Создать функцию, генерирующую шахматную доску. 
При этом можно использовать любые html-теги по своему желанию. Доска должна быть разлинована соответствующим образом, 
т.е. чередовать черные и белые ячейки. 
Строки должны нумероваться числами от 1 до 8, столбцы – латинскими буквами A, B, C, D, E, F, G, H.

*2. Заполнить созданную таблицу буквами, отвечающими за шахматную фигуру, 
например К – король, Ф – ферзь и т.п., причем все фигуры должны стоять на 
своих местах и быть соответственно черными и белыми.

3. *Заменить буквы, обозначающие фигуры картинками 
(Символы шахмат: https://www.rabotayvinter.net/html/simvoly_html/10_shahmaty_simvoly.php).*/

let blackAndWhite = document.getElementById('blackAndWhite');
let alphabetLine1 = document.getElementById('alphabetLine1');
let numberLine1 = document.getElementById('numberLine1');
let alphabetLine2 = document.getElementById('alphabetLine2');
let numberLine2 = document.getElementById('numberLine2');
let alphabet = [" ", "A", "B", "C", "D", "E", "F", "G" ,"H", " "];
let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
let positionChessman = new Object;
function firstline(alpha){
    for (i = 1; i < 9; i++){
        blackAndWhite.insertAdjacentHTML("beforeend", '<div class="cell_first" id="' + alpha + alphabet[i] + '"></div>');

    }
}
function secondline(alpha){
    for (i = 1; i < 9; i++){
        blackAndWhite.insertAdjacentHTML("beforeend", '<div class="cell_second" id="' + alpha + alphabet[i] + '"></div>');
    }
}

function start(){
    for (i = 0; i < 8; i++){
        numberLine1.insertAdjacentHTML("afterbegin", '<div class="cell"></div>')
    }
    for (i = 0; i < 8; i++){
        numberLine2.insertAdjacentHTML("afterbegin", '<div class="cell"></div>')
    }
    for (i = 0; i < 10; i++){
        alphabetLine1.insertAdjacentHTML("afterbegin", '<div class="cell"></div>')
    }
    for (i = 0; i < 10; i++){
        alphabetLine2.insertAdjacentHTML("afterbegin", '<div class="cell"></div>')
    }
    for (i = 0; i < alphabetLine1.childNodes.length; i++){
        alphabetLine1.childNodes[i].insertAdjacentHTML("afterbegin", alphabet[i]);
        alphabetLine2.childNodes[i].insertAdjacentHTML("afterbegin", alphabet[i]);
    }
    for (i = 0; i < numberLine1.childNodes.length; i++){
        numberLine1.childNodes[i].insertAdjacentHTML("afterbegin", numbers[i]);
        numberLine2.childNodes[i].insertAdjacentHTML("afterbegin", numbers[i]);
    }
firstline('1');
secondline('2');
firstline('3');
secondline('4');
firstline('5');
secondline('6');
firstline('7');
secondline('8');
for (i = 0; i < chessman.length; i++){
    positionChessman = document.getElementById(chessman[i].position);
    positionChessman.insertAdjacentHTML("afterbegin", chessman[i].htmlCode)
}

}
setTimeout(start(), 0)


