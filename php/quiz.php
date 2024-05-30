<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Quiz о Названиях Животных</title>
    <link rel="stylesheet" href="quiz.css">
    <link rel="icon" href="images/myshkafon2.png" type="image/myshkafon2">
</head>
<body onload="NextQuestion(0)">
<div class="top-buttons-container">
    <button id="music-button">🎵</button>
    <button id="menu-button">🚪</button>
</div>
<main>
    <div class="modal-container" id="score-modal">
        <div class="modal-content-container">
            <h1>Здорово, Quiz Завершен.</h1>
            <div class="grade-details">
                <p>Попытки : 10</p>
                <p>Правильные ответы : <span id="wrong-answers"></span></p>
                <p>Правильных ответов : <span id="right-answers"></span></p>
                <p>Оценка : <span id="grade-percentage"></span>%</p>
                <p ><span id="remarks"></span></p>
            </div>
            <div class="modal-button-container">
                <button onclick="closeScoreModal()">Далее</button>
            </div>
        </div>
    </div>
    <div class="game-quiz-container">
        <div class="game-details-container">
            <h1>Счёт : <span id="player-score"></span> / 10</h1>
            <h1> Вопросов : <span id="question-number"></span> / 10</h1>
        </div>
        <div class="game-question-container">
            <h1 id="display-question"></h1>
        </div>
        <div class="game-options-container">
            <div class="modal-container" id="option-modal">
                <div class="modal-content-container">
                    <h1>Пожалуйста, выберите один из вариантов</h1>
                    <div class="modal-button-container">
                        <button onclick="closeOptionModal()">Далее</button>
                    </div>
                </div>
            </div>
            <span>
                <input type="radio" id="option-one" name="option" class="radio" value="optionA" />
                <label for="option-one" class="option" id="option-one-label"></label>
            </span>
            <span>
                <input type="radio" id="option-two" name="option" class="radio" value="optionB" />
                <label for="option-two" class="option" id="option-two-label"></label>
            </span>
            <span>
                <input type="radio" id="option-three" name="option" class="radio" value="optionC" />
                <label for="option-three" class="option" id="option-three-label"></label>
            </span>
            <span>
                <input type="radio" id="option-four" name="option" class="radio" value="optionD" />
                <label for="option-four" class="option" id="option-four-label"></label>
            </span>
        </div>
        <div class="next-button-container">
            <button onclick="handleNextQuestion()">Продолжить</button>
        </div>
    </div>
</main>
<script src="quiz.js"></script>
<audio id="background-audio" src="sound/220225.mp3" loop></audio>
</body>
</html>
