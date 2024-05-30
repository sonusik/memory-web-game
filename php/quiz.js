const questions = [
    {
        question: "I am a big cat with stripes. What animal am I?",
        optionA: "Tiger",
        optionB: "Bear",
        optionC: "Lion",
        optionD: "None of the above",
        correctOption: "optionA"
    },

    {
        question: "I have a long neck and eat leaves from tall trees. What animal am I?",
        optionA: "Elephant",
        optionB: "Giraffe",
        optionC: "Kangaroo",
        optionD: "None of the above",
        correctOption: "optionB"
    },

    {
        question: "I am a small animal that loves cheese. What animal am I?",
        optionA: "Cat",
        optionB: "Dog",
        optionC: "Mouse",
        optionD: "None of the above",
        correctOption: "optionC"
    },

    {
        question: "I can hop and have a pouch. What animal am I?",
        optionA: "Kangaroo",
        optionB: "Frog",
        optionC: "Rabbit",
        optionD: "None of the above",
        correctOption: "optionA"
    },

    {
        question: "I am known for my eight long legs. What animal am I?",
        optionA: "Spider",
        optionB: "Puma",
        optionC: "Donkey",
        optionD: "None of the above",
        correctOption: "optionA"
    },

    {
        question: "I am a large animal with a trunk. What animal am I?",
        optionA: "Rhino",
        optionB: "Elephant",
        optionC: "Hippopotamus",
        optionD: "None of the above",
        correctOption: "optionB"
    },

    {
        question: "I have a shell and move slowly. What animal am I?",
        optionA: "Slug",
        optionB: "Turtle",
        optionC: "Seahorse",
        optionD: "None of the above",
        correctOption: "optionB"
    },

    {
        question: "I am an insect that makes honey. What animal am I?",
        optionA: "Bee",
        optionB: "Ant",
        optionC: "Butterfly",
        optionD: "None of the above",
        correctOption: "optionA"
    },

    {
        question: "I am a bird that cannot fly and I live in cold places. What animal am I?",
        optionA: "Penguin",
        optionB: "Eagle",
        optionC: "Ostrich",
        optionD: "None of the above",
        correctOption: "optionA"
    },

    {
        question: "I am known for my ability to change colors. What animal am I?",
        optionA: "Goldfish",
        optionB: "Chameleon",
        optionC: "Shark",
        optionD: "None of the above",
        correctOption: "optionB"
    },

    {
        question: "I am known for my long ears and hopping. What animal am I?",
        optionA: "Cat",
        optionB: "Dog",
        optionC: "Rabbit",
        optionD: "None of the above",
        correctOption: "optionC"
    },

    {
        question: "I am a large, wild cat known for my mane. What animal am I?",
        optionA: "Leopard",
        optionB: "Lion",
        optionC: "Tiger",
        optionD: "None of the above",
        correctOption: "optionB"
    },

    {
        question: "I am a domestic animal known for barking. What animal am I?",
        optionA: "Dog",
        optionB: "Horse",
        optionC: "Cat",
        optionD: "None of the above",
        correctOption: "optionA"
    },

    {
        question: "I am a sea animal with a distinctive shell and claws. What animal am I?",
        optionA: "Whale",
        optionB: "Lobster",
        optionC: "Shark",
        optionD: "None of the above",
        correctOption: "optionB"
    },

    {
        question: "I am a small, colorful bird often kept as a pet. What animal am I?",
        optionA: "Penguin",
        optionB: "Parrot",
        optionC: "Eagle",
        optionD: "None of the above",
        correctOption: "optionB"
    },

    {
        question: "I am a reptile known for my long body and lack of legs. What animal am I?",
        optionA: "Lizard",
        optionB: "Snake",
        optionC: "Frog",
        optionD: "None of the above",
        correctOption: "optionB"
    },

    {
        question: "I am a farm animal known for producing milk. What animal am I?",
        optionA: "Horse",
        optionB: "Cow",
        optionC: "Sheep",
        optionD: "None of the above",
        correctOption: "optionB"
    },

    {
        question: "I am a mammal that lives in the ocean and am known for my intelligence. What animal am I?",
        optionA: "Octopus",
        optionB: "Crocodile",
        optionC: "Dolphin",
        optionD: "None of the above",
        correctOption: "optionC"
    },

    {
        question: "I am a black bird known for my intelligence. What animal am I?",
        optionA: "Crow",
        optionB: "Parrot",
        optionC: "Seagull",
        optionD: "None of the above",
        correctOption: "optionA"
    },

    {
        question: "I am a nocturnal animal known for my big eyes. What animal am I?",
        optionA: "Horse",
        optionB: "Cat",
        optionC: "Owl",
        optionD: "None of the above",
        correctOption: "optionC"
    }
]


let shuffledQuestions = [] 

function handleQuestions() { 

    while (shuffledQuestions.length <= 9) {
        const random = questions[Math.floor(Math.random() * questions.length)]
        if (!shuffledQuestions.includes(random)) {
            shuffledQuestions.push(random)
        }
    }
}


let questionNumber = 1 
let playerScore = 0  
let wrongAttempt = 0 
let indexNumber = 0 


function NextQuestion(index) {
    handleQuestions()
    const currentQuestion = shuffledQuestions[index]
    document.getElementById("question-number").innerHTML = questionNumber
    document.getElementById("player-score").innerHTML = playerScore
    document.getElementById("display-question").innerHTML = currentQuestion.question;
    document.getElementById("option-one-label").innerHTML = currentQuestion.optionA;
    document.getElementById("option-two-label").innerHTML = currentQuestion.optionB;
    document.getElementById("option-three-label").innerHTML = currentQuestion.optionC;
    document.getElementById("option-four-label").innerHTML = currentQuestion.optionD;

}


function checkForAnswer() {
    const currentQuestion = shuffledQuestions[indexNumber]  
    const currentQuestionAnswer = currentQuestion.correctOption 
    const options = document.getElementsByName("option"); 
    let correctOption = null

    options.forEach((option) => {
        if (option.value === currentQuestionAnswer) {

            correctOption = option.labels[0].id
        }
    })


    if (options[0].checked === false && options[1].checked === false && options[2].checked === false && options[3].checked == false) {
        document.getElementById('option-modal').style.display = "flex"
    }


    options.forEach((option) => {
        if (option.checked === true && option.value === currentQuestionAnswer) {
            document.getElementById(correctOption).style.backgroundColor = "green"
            playerScore++ 
            indexNumber++ 

            setTimeout(() => {
                questionNumber++
            }, 1000)
        }

        else if (option.checked && option.value !== currentQuestionAnswer) {
            const wrongLabelId = option.labels[0].id
            document.getElementById(wrongLabelId).style.backgroundColor = "red"
            document.getElementById(correctOption).style.backgroundColor = "green"
            wrongAttempt++ //adds 1 to wrong attempts 
            indexNumber++

            setTimeout(() => {
                questionNumber++
            }, 1000)
        }
    })
}




function handleNextQuestion() {
    checkForAnswer() 
    unCheckRadioButtons()

    setTimeout(() => {
        if (indexNumber <= 9) {

            NextQuestion(indexNumber)
        }
        else {
            handleEndGame()
        }
        resetOptionBackground()
    }, 1000);
}


function resetOptionBackground() {
    const options = document.getElementsByName("option");
    options.forEach((option) => {
        document.getElementById(option.labels[0].id).style.backgroundColor = ""
    })
}


function unCheckRadioButtons() {
    const options = document.getElementsByName("option");
    for (let i = 0; i < options.length; i++) {
        options[i].checked = false;
    }
}

function handleEndGame() {
    let remark = null
    let remarkColor = null


    if (playerScore <= 3) {
        remark = "Bad Grades, Keep Practicing."
        remarkColor = "red"
    }
    else if (playerScore >= 4 && playerScore < 7) {
        remark = "Average Grades, You can do better."
        remarkColor = "orange"
    }
    else if (playerScore >= 7) {
        remark = "Excellent, Keep the good work going."
        remarkColor = "green"
    }
    const playerGrade = (playerScore / 10) * 100

    document.getElementById('remarks').innerHTML = remark
    document.getElementById('remarks').style.color = remarkColor
    document.getElementById('grade-percentage').innerHTML = playerGrade
    document.getElementById('wrong-answers').innerHTML = wrongAttempt
    document.getElementById('right-answers').innerHTML = playerScore
    document.getElementById('score-modal').style.display = "flex"

}


function closeScoreModal() {
    questionNumber = 1
    playerScore = 0
    wrongAttempt = 0
    indexNumber = 0
    shuffledQuestions = []
    NextQuestion(indexNumber)
    document.getElementById('score-modal').style.display = "none"
}


function closeOptionModal() {
    document.getElementById('option-modal').style.display = "none"
}


function handleMenuButton() {
    window.location.href = 'index.php'; 
}

function toggleMusic() {
    let music = document.getElementById('background-audio');
    if (music.paused) {
        music.volume = 0.2; 
        music.play();
    } else {
        music.pause();
        music.volume = 0.5;
    }
}

document.getElementById('menu-button').addEventListener('click', handleMenuButton);
document.getElementById('music-button').addEventListener('click', toggleMusic);
