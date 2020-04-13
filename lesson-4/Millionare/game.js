function playerAnswer (){
        randomQuestion ();
        shuffleAnswer ();
        let answer = prompt(foundQuestion["question"] + "\r\n" + "1 " + shuffledAnswer[0] + "\r\n" + "2 " + shuffledAnswer[1]+ "\r\n" + "3 " + shuffledAnswer[2]+ "\r\n" + "4 " + shuffledAnswer[3],"Укажите номер верного варианта")
        if (foundQuestion["rightAnswer"] == shuffledAnswer[--answer]){
            playerAnswerResult = true;
            alert('Это правильный ответ!')
            if (score == 0){
                score = score + 100;
            } else {
                score = score * 2;
            }
            if (oldQuestions.length >= gamelength && oldQuestions.length <= questions.length){
                alert("Вы ответили на все вопросы верно! Вы победили!");
                playerAnswerResult = false;
                return;
            } else {
                alert('Ваш текущий счёт = ' + score + "р" + "\r\n" + "Правильный ответ на следующий вопрос может увеличить сумму вдвое")
            }
        } else {
            playerAnswerResult = false;
            alert('К сожалению вы ответили не верно')
            return;
    }
}

function start (){
    alert("Добро пожаловать на игру\r\nКто хочет стать Миллионером?!");
    alert("Правила очень просты:\r\nВам будут заданы " + gamelength + "4 вопросов, на которые нужно дать верные ответы");

    let continueGame = confirm("Вы готовы играть?");
    if (continueGame === false){
        alert("Очень жаль, игра окончена");
        return
    }
    else if (continueGame === true){
        alert("Итак, первый вопрос за который вы можете получить 100р");
    }
    while (playerAnswerResult === true){
        playerAnswer();
    }
    alert("Ваш итоговый счет = " + score + "р");
    let newGame = confirm("Хотите сыграть снова?");
    if (newGame === true){
        oldQuestions = new Array;
        numberOfQuestion = new Number;
        foundQuestion = new Object;
        shuffledAnswer = new Array;
        score = 0;
        playerAnswerResult = true;
        start();
    } else {
        alert("Очень жаль, игра окончена. \r\n(Для повторного запуска потребуется обновить страницу)");
        return
    }

}



setTimeout(start, 0)