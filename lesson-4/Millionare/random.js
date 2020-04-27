
function randomQuestion (){
    do {
       numberOfQuestion = Math.floor(Math.random() * questions.length);
    }  while (oldQuestions.indexOf(numberOfQuestion, 0) != -1);
    oldQuestions.push(numberOfQuestion);
    foundQuestion = questions[numberOfQuestion];
}
function shuffleAnswer (){
    shuffledAnswer = [];
    let randomX = new Array;
    for (; randomX.length < 4;){
        do {
            x = Math.floor(Math.random() * 4);
        } while (randomX.indexOf(x, 0) != -1);
    randomX.push(x);
    };
    for (i = 0; i < 4; i++){
        if (randomX[i] == 0){
            shuffledAnswer.push(foundQuestion["rightAnswer"]);
        } else if (randomX[i] == 1){
            shuffledAnswer.push(foundQuestion["wrongAnswer1"]);
        } else if (randomX[i] == 2){
            shuffledAnswer.push(foundQuestion["wrongAnswer2"]);
        } else if (randomX[i] == 3){
            shuffledAnswer.push(foundQuestion["wrongAnswer3"]);
        }
    }
  
}