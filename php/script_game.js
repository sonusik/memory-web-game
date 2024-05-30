const emojiSounds = {
    '🥔': new Audio('audio2/potato.mp3'),
    '🍒': new Audio('audio2/cher.mp3'),
    '🥑': new Audio('audio2/avocado.mp3'),
    '🌽': new Audio('audio2/corn.mp3'),
    '🥕': new Audio('audio2/carrot.mp3'),
    '🍇': new Audio('audio2/grapes.mp3'),
    '🍉': new Audio('audio2/watermel.mp3'),
    '🍌': new Audio('audio2/banan.mp3'),
    '🥭': new Audio('audio2/mango.mp3'),
    '🍍': new Audio('audio2/pineapl.mp3'),
    '🍓': new Audio('audio2/straw.mp3'),
    '🍋': new Audio('audio2/lemon.mp3'),
    '🍊': new Audio('audio2/mandarin.mp3'),
    '🍏': new Audio('audio2/gr_aple.mp3'),
    '🍎': new Audio('audio2/red_apl.mp3'),
    '🍐': new Audio('audio2/pear.mp3'),
    '🍑': new Audio('audio2/peach.mp3'),
    '🥝': new Audio('audio2/kiwi.mp3'),
    '🍅': new Audio('audio2/tomat.mp3'),
    '🍆': new Audio('audio2/baklazhan.mp3'),
    '🥒': new Audio('audio2/cucumber.mp3'),
    '🥬': new Audio('audio2/lyk_parei.mp3'),
    '🥦': new Audio('audio2/broccol.mp3'),
    '🥜': new Audio('audio2/arahis.mp3'),
    '🌰': new Audio('audio2/hazelnut.mp3'),
    '🍞': new Audio('audio2/bread.mp3'),
    '🥐': new Audio('audio2/kryassan.mp3'),
    '🥞': new Audio('audio2/puncake.mp3'),
    '🧀': new Audio('audio2/chees.mp3'),
    '🍗': new Audio('audio2/leg.mp3'),
    '🥩': new Audio('audio2/meat.mp3'),
    '🍔': new Audio('audio2/humbur.mp3'),
    '🍕': new Audio('audio2/pizza.mp3'),
    '🌭': new Audio('audio2/hotdog.mp3'),
    '🥪': new Audio('audio2/sandwich.mp3'),
    '🌯': new Audio('audio2/byrito.mp3'),
    '🧈': new Audio('audio2/butter.mp3'),
    '🍚': new Audio('audio2/rice.mp3'),
    '🍝': new Audio('audio2/spagetti.mp3'),
    '🍣': new Audio('audio2/sushi.mp3'),
    '🥟': new Audio('audio2/pelmen.mp3'),
    '🥡': new Audio('audio2/takeout_box.mp3'),
    '🦀': new Audio('audio2/crab.mp3'),
    '🦞': new Audio('audio2/lobster.mp3'),
    '🦐': new Audio('audio2/shrimp.mp3'),
    '🦑': new Audio('audio2/kalmar.mp3'),
    '🦪': new Audio('audio2/oyster.mp3'),
    '🍦': new Audio('audio2/ice_cream.mp3'),
    '🍧': new Audio('audio2/shaved_ice.mp3'),
    '🍨': new Audio('audio2/straw_ice.mp3'),
    '🍩': new Audio('audio2/donat.mp3'),
    '🍪': new Audio('audio2/coockie.mp3'),
    '🎂': new Audio('audio2/bd_cake.mp3'),
    '🍰': new Audio('audio2/piece_cake.mp3'),
    '🍫': new Audio('audio2/chocolate.mp3'),
    '🥥': new Audio('audio2/coconut.mp3'),
    '🥣': new Audio('audio2/kasha.mp3')
};

const selectors = {
    boardContainer: document.querySelector('.board-container'),
    board: document.querySelector('.board'),
    moves: document.querySelector('.moves'),
    timer: document.querySelector('.timer'),
    start: document.querySelector('.start'),
    nextLevelBtn: document.querySelector('.next-level-btn'),
    win: document.querySelector('.win'),
    levelText: document.querySelector('.level-text')
};

const state = {
    gameStarted: false,
    flippedCards: 0,
    totalFlips: 0,
    totalTime: 0,
    loop: null
};

const shuffle = array => {
    const clonedArray = [...array];
    for (let i = clonedArray.length - 1; i > 0; i--) {
        const randomIndex = Math.floor(Math.random() * (i + 1));
        const original = clonedArray[i];
        clonedArray[i] = clonedArray[randomIndex];
        clonedArray[randomIndex] = original;
    }
    return clonedArray;
};

const generateLevels = (count) => {
    const levels = [];
    const emojis = ['🥔', '🍒', '🥑', '🌽', '🥕', '🍇', '🍉', '🍌', '🥭', '🍍', '🍓', '🍋', '🍊', '🍏', '🍎', '🍐', '🍑', '🥝', '🍅', '🍆', '🥒', '🥬', '🥦', '🥜', '🌰', '🍞', '🥐', '🥞', '🧀', '🍗', '🥩', '🍔', '🍕', '🌭', '🥪', '🌯', '🧈', '🍚', '🍝', '🍣', '🥟', '🥡', '🦀', '🦞', '🦐', '🦑', '🦪', '🍦', '🍧', '🍨', '🍩', '🍪', '🎂', '🍰', '🍫', '🥥', '🥣'];

    for (let i = 0; i < count; i++) {
        const dimension = 4; // Все уровни будут 4x4

        const emojisSubset = shuffle(emojis).slice(0, dimension * dimension / 2);
        levels.push({
            dimension: dimension,
            emojis: shuffle([...emojisSubset, ...emojisSubset])
        });
    }

    return levels;
};

const levels = generateLevels(3); // Создаем 3 уровня

const startSound = new Audio('audio/btn.mp3');
const nextLevelSound = new Audio('audio/click.mp3');
const levelCompleteSound = new Audio('audio/success.mp3');
let currentLevel = 0;

const startGame = () => {
    state.gameStarted = true;
    selectors.start.classList.add('disabled');
    startSound.play();

    state.loop = setInterval(() => {
        state.totalTime++;
        selectors.moves.innerText = `${state.totalFlips} moves`;
        selectors.timer.innerText = `Time: ${state.totalTime} sec`;
    }, 1000);
};

const goToNextLevel = () => {
    const matchedCards = document.querySelectorAll('.card.matched');
    if (matchedCards.length !== levels[currentLevel].emojis.length) {
        return;
    }

    currentLevel++;
    if (currentLevel >= levels.length) {
        clearInterval(state.loop);
        selectors.nextLevelBtn.classList.add('disabled');
        selectors.win.innerHTML = `
            <span class="win-text">
                Congratulations!<br />
                You completed all levels!
            </span>
            <button class="next-quiz-btn">Next</button>
        `;
        document.querySelector('.next-quiz-btn').addEventListener('click', () => {
            window.location.href = 'quiz.php'; // замените на нужный URL
        });
        return;
    }

    state.flippedCards = 0;
    state.totalFlips = 0;
    state.totalTime = 0;
    clearInterval(state.loop);
    selectors.nextLevelBtn.classList.add('disabled');
    generateGame();
    nextLevelSound.play();

    selectors.boardContainer.classList.remove('flipped');
    selectors.win.innerHTML = '';

    selectors.moves.innerText = "0 moves";
    selectors.timer.innerText = "Time: 0 sec";

    startGame();
    updateLevelText();

    selectors.start.style.display = 'none';
};

const resetCards = () => {
    document.querySelectorAll('.card').forEach(card => {
        card.classList.remove('flipped', 'matched');
    });
};

const flipBackCards = () => {
    document.querySelectorAll('.card:not(.matched)').forEach(card => {
        card.classList.remove('flipped');
    });
    state.flippedCards = 0;
};

const generateGame = () => {
    const level = levels[currentLevel];
    const dimensions = level.dimension;
    const emojis = level.emojis;

    selectors.board.innerHTML = '';
    selectors.board.style.gridTemplateColumns = `repeat(${dimensions}, auto)`;

    const fragment = document.createDocumentFragment();

    emojis.forEach(emoji => {
        const card = document.createElement('div');
        card.classList.add('card');

        const cardFront = document.createElement('div');
        cardFront.classList.add('card-front');

        const cardBack = document.createElement('div');
        cardBack.classList.add('card-back');
        cardBack.innerText = emoji;

        card.addEventListener('click', () => {
            if (!card.classList.contains('flipped') && state.flippedCards < 2) {
                flipCard(card);
                emojiSounds[emoji].play();
            }
        });

        card.appendChild(cardFront);
        card.appendChild(cardBack);
        fragment.appendChild(card);
    });

    selectors.board.appendChild(fragment);
};

const flipCard = card => {
    state.flippedCards++;
    state.totalFlips++;

    if (!state.gameStarted) {
        startGame();
    }

    if (state.flippedCards <= 2) {
        card.classList.add('flipped');
    }

    if (state.flippedCards === 2) {
        const flippedCards = document.querySelectorAll('.flipped:not(.matched)');

        if (flippedCards[0].innerText === flippedCards[1].innerText) {
            flippedCards[0].classList.add('matched');
            flippedCards[1].classList.add('matched');
        }

        setTimeout(() => {
            flipBackCards();
        }, 1000);
    }

    if (!document.querySelectorAll('.card:not(.flipped)').length) {
        setTimeout(() => {
            selectors.boardContainer.classList.add('flipped');
            selectors.win.innerHTML = `
                <span class="win-text">
                    You won!<br />
                    with <span class="highlight">${state.totalFlips}</span> moves<br />
                    under <span class="highlight">${state.totalTime}</span> seconds
                </span>
            `;

            clearInterval(state.loop);
            selectors.nextLevelBtn.classList.remove('disabled');
            levelCompleteSound.play();
        }, 1000);
    }
};

const updateLevelText = () => {
    const totalLevels = levels.length;
    selectors.levelText.innerText = `Level: ${currentLevel + 1} / ${totalLevels}`;
};
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

document.querySelector('.autorization-button').addEventListener('click', handleMenuButton);

document.getElementById('music-button').addEventListener('click', toggleMusic);
selectors.start.addEventListener('click', startGame);
selectors.nextLevelBtn.addEventListener('click', goToNextLevel);

generateGame();
updateLevelText();




// const emojiSounds = {
//     '🥔': new Audio('audio2/potato.mp3'),
//     '🍒': new Audio('audio2/cher.mp3'),
//     '🥑': new Audio('audio2/avocado.mp3'),
//     '🌽': new Audio('audio2/corn.mp3'),
//     '🥕': new Audio('audio2/carrot.mp3'),
//     '🍇': new Audio('audio2/grapes.mp3'),
//     '🍉': new Audio('audio2/watermel.mp3'),
//     '🍌': new Audio('audio2/banan.mp3'),
//     '🥭': new Audio('audio2/mango.mp3'),
//     '🍍': new Audio('audio2/pineapl.mp3'),
//     '🍓': new Audio('audio2/straw.mp3'),
//     '🍋': new Audio('audio2/lemon.mp3'),
//     '🍊': new Audio('audio2/mandarin.mp3'),
//     '🍏': new Audio('audio2/gr_aple.mp3'),
//     '🍎': new Audio('audio2/red_apl.mp3'),
//     '🍐': new Audio('audio2/pear.mp3'),
//     '🍑': new Audio('audio2/peach.mp3'),
//     '🥝': new Audio('audio2/kiwi.mp3'),
//     '🍅': new Audio('audio2/tomat.mp3'),
//     '🍆': new Audio('audio2/baklazhan.mp3'),
//     '🥒': new Audio('audio2/cucumber.mp3'),
//     '🥬': new Audio('audio2/lyk_parei.mp3'),
//     '🥦': new Audio('audio2/broccol.mp3'),
//     '🥜': new Audio('audio2/arahis.mp3'),
//     '🌰': new Audio('audio2/hazelnut.mp3'),
//     '🍞': new Audio('audio2/bread.mp3'),
//     '🥐': new Audio('audio2/kryassan.mp3'),
//     '🥞': new Audio('audio2/puncake.mp3'),
//     '🧀': new Audio('audio2/chees.mp3'),
//     '🍗': new Audio('audio2/leg.mp3'),
//     '🥩': new Audio('audio2/meat.mp3'),
//     '🍔': new Audio('audio2/humbur.mp3'),
//     '🍕': new Audio('audio2/pizza.mp3'),
//     '🌭': new Audio('audio2/hotdog.mp3'),
//     '🥪': new Audio('audio2/sandwich.mp3'),
//     '🌯': new Audio('audio2/byrito.mp3'),
//     '🧈': new Audio('audio2/butter.mp3'),
//     '🍚': new Audio('audio2/rice.mp3'),
//     '🍝': new Audio('audio2/spagetti.mp3'),
//     '🍣': new Audio('audio2/sushi.mp3'),
//     '🥟': new Audio('audio2/pelmen.mp3'),
//     '🥡': new Audio('audio2/takeout_box.mp3'),
//     '🦀': new Audio('audio2/crab.mp3'),
//     '🦞': new Audio('audio2/lobster.mp3'),
//     '🦐': new Audio('audio2/shrimp.mp3'),
//     '🦑': new Audio('audio2/kalmar.mp3'),
//     '🦪': new Audio('audio2/oyster.mp3'),
//     '🍦': new Audio('audio2/ice_cream.mp3'),
//     '🍧': new Audio('audio2/shaved_ice.mp3'),
//     '🍨': new Audio('audio2/straw_ice.mp3'),
//     '🍩': new Audio('audio2/donat.mp3'),
//     '🍪': new Audio('audio2/coockie.mp3'),
//     '🎂': new Audio('audio2/bd_cake.mp3'),
//     '🍰': new Audio('audio2/piece_cake.mp3'),
//     '🍫': new Audio('audio2/chocolate.mp3'),
//     '🥥': new Audio('audio2/coconut.mp3'),
//     '🥣': new Audio('audio2/kasha.mp3')

// };


// const selectors = {
//     boardContainer: document.querySelector('.board-container'),
//     board: document.querySelector('.board'),
//     moves: document.querySelector('.moves'),
//     timer: document.querySelector('.timer'),
//     start: document.querySelector('.start'),
//     nextLevelBtn: document.querySelector('.next-level-btn'),
//     win: document.querySelector('.win'),
//     levelText: document.querySelector('.level-text')
// };

// const state = {
//     gameStarted: false,
//     flippedCards: 0,
//     totalFlips: 0,
//     totalTime: 0,
//     loop: null
// };

// const shuffle = array => {
//     const clonedArray = [...array];
//     for (let i = clonedArray.length - 1; i > 0; i--) {
//         const randomIndex = Math.floor(Math.random() * (i + 1));
//         const original = clonedArray[i];
//         clonedArray[i] = clonedArray[randomIndex];
//         clonedArray[randomIndex] = original;
//     }
//     return clonedArray;
// };

// const generateLevels = (count) => {
//     const levels = [];
//     const emojis = ['🥔', '🍒', '🥑', '🌽', '🥕', '🍇', '🍉', '🍌', '🥭', '🍍', '🍓', '🍋', '🍊', '🍏', '🍎', '🍐', '🍑', '🥝', '🍅', '🍆', '🥒', '🥬', '🥦', '🥜', '🌰', '🍞', '🥐', '🥞', '🧀', '🍗', '🥩', '🍔', '🍕', '🌭', '🥪', '🌯', '🧈', '🍚', '🍝', '🍣', '🥟', '🥡', '🦀', '🦞', '🦐', '🦑', '🦪', '🍦', '🍧', '🍨', '🍩', '🍪', '🎂', '🍰', '🍫', '🥥', '🥣'];

//     for (let i = 0; i < count; i++) {
//         let dimension = 4;
//         if (i >= count / 2) {
//             dimension = 5;
//         }

//         const emojisSubset = shuffle(emojis).slice(0, dimension * dimension / 2);
//         levels.push({
//             dimension: dimension,
//             emojis: shuffle([...emojisSubset, ...emojisSubset])
//         });
//     }

//     return levels;
// };

// const levels = generateLevels(100);

// const startSound = new Audio('audio/btn.mp3');
// const nextLevelSound = new Audio('audio/click.mp3');
// const levelCompleteSound = new Audio('audio/success.mp3');
// let currentLevel = 0;

// const startGame = () => {
//     state.gameStarted = true;
//     selectors.start.classList.add('disabled');
//     startSound.play();

//     state.loop = setInterval(() => {
//         state.totalTime++;
//         selectors.moves.innerText = `${state.totalFlips} moves`;
//         selectors.timer.innerText = `Time: ${state.totalTime} sec`;
//     }, 1000);
// };

// const goToNextLevel = () => {
//     const matchedCards = document.querySelectorAll('.card.matched');
//     if (matchedCards.length !== levels[currentLevel].emojis.length) {
//         return;
//     }

//     currentLevel++;
//     if (currentLevel >= levels.length) {
//         clearInterval(state.loop);
//         selectors.nextLevelBtn.classList.add('disabled');
//         selectors.win.innerHTML = `
//             <span class="win-text">
//                 Congratulations!<br />
//                 You completed all levels!
//             </span>
//         `;
//         return;
//     }

//     state.flippedCards = 0;
//     state.totalFlips = 0;
//     state.totalTime = 0;
//     clearInterval(state.loop);
//     selectors.nextLevelBtn.classList.add('disabled');
//     generateGame();
//     nextLevelSound.play();

//     selectors.boardContainer.classList.remove('flipped');
//     selectors.win.innerHTML = '';

//     selectors.moves.innerText = "0 moves";
//     selectors.timer.innerText = "Time: 0 sec";

//     startGame();
//     updateLevelText();

//     selectors.start.style.display = 'none';
// };

// const resetCards = () => {
//     document.querySelectorAll('.card').forEach(card => {
//         card.classList.remove('flipped', 'matched');
//     });
// };

// const flipBackCards = () => {
//     document.querySelectorAll('.card:not(.matched)').forEach(card => {
//         card.classList.remove('flipped');
//     });
//     state.flippedCards = 0;
// };

// const generateGame = () => {
//     const level = levels[currentLevel];
//     const dimensions = level.dimension;
//     const emojis = level.emojis;

//     selectors.board.innerHTML = '';
//     selectors.board.style.gridTemplateColumns = `repeat(${dimensions}, auto)`;

//     const fragment = document.createDocumentFragment();

//     emojis.forEach(emoji => {
//         const card = document.createElement('div');
//         card.classList.add('card');

//         const cardFront = document.createElement('div');
//         cardFront.classList.add('card-front');

//         const cardBack = document.createElement('div');
//         cardBack.classList.add('card-back');
//         cardBack.innerText = emoji;

//         card.appendChild(cardFront);
//         card.appendChild(cardBack);
//         fragment.appendChild(card);

//         card.addEventListener('click', () => {
//             if (!card.classList.contains('flipped') && state.flippedCards < 2) {
//                 flipCard(card);
//                 emojiSounds[emoji].play();
//             }
//         });
//     });

//     selectors.board.appendChild(fragment);
// };

// const flipCard = card => {
//     state.flippedCards++;
//     state.totalFlips++;

//     if (!state.gameStarted) {
//         startGame();
//     }

//     if (state.flippedCards <= 2) {
//         card.classList.add('flipped');
//     }

//     if (state.flippedCards === 2) {
//         const flippedCards = document.querySelectorAll('.flipped:not(.matched)');

//         if (flippedCards[0].innerText === flippedCards[1].innerText) {
//             flippedCards[0].classList.add('matched');
//             flippedCards[1].classList.add('matched');
//         }

//         setTimeout(() => {
//             flipBackCards();
//         }, 1000);
//     }

//     if (!document.querySelectorAll('.card:not(.flipped)').length) {
//         setTimeout(() => {
//             selectors.boardContainer.classList.add('flipped');
//             selectors.win.innerHTML = `
//                 <span class="win-text">
//                     You won!<br />
//                     with <span class="highlight">${state.totalFlips}</span> moves<br />
//                     under <span class="highlight">${state.totalTime}</span> seconds
//                 </span>
//             `;

//             clearInterval(state.loop);
//             selectors.nextLevelBtn.classList.remove('disabled');
//             levelCompleteSound.play();
//         }, 1000);
//     }
// };

// const updateLevelText = () => {
//     selectors.levelText.innerText = `Level: ${currentLevel + 1}`;
// };

// selectors.start.addEventListener('click', startGame);
// selectors.nextLevelBtn.addEventListener('click', goToNextLevel);

// generateGame();
// updateLevelText();



// const emojiSounds = {
//     '🥔': new Audio('audio2/potato.mp3'),
//     '🍒': new Audio('audio2/cher.mp3'),
//     '🥑': new Audio('audio2/avocado.mp3'),
//     '🌽': new Audio('audio2/corn.mp3'),
//     '🥕': new Audio('audio2/carrot.mp3'),
//     '🍇': new Audio('audio2/grapes.mp3'),
//     '🍉': new Audio('audio2/watermel.mp3'),
//     '🍌': new Audio('audio2/banan.mp3'),
//     '🥭': new Audio('audio2/mango.mp3'),
//     '🍍': new Audio('audio2/pineapl.mp3'),
//     '🍓': new Audio('audio2/straw.mp3'),
//     '🍋': new Audio('audio2/lemon.mp3'),
//     '🍊': new Audio('audio2/mandarin.mp3'),
//     '🍏': new Audio('audio2/gr_aple.mp3'),
//     '🍎': new Audio('audio2/red_apl.mp3'),
//     '🍐': new Audio('audio2/pear.mp3'),
//     '🍑': new Audio('audio2/peach.mp3'),
//     '🥝': new Audio('audio2/kiwi.mp3'),
//     '🍅': new Audio('audio2/tomat.mp3'),
//     '🍆': new Audio('audio2/baklazhan.mp3'),
//     '🥒': new Audio('audio2/cucumber.mp3'),
//     '🥬': new Audio('audio2/lyk_parei.mp3'),
//     '🥦': new Audio('audio2/broccol.mp3'),
//     '🥜': new Audio('audio2/arahis.mp3'),
//     '🌰': new Audio('audio2/hazelnut.mp3'),
//     '🍞': new Audio('audio2/bread.mp3'),
//     '🥐': new Audio('audio2/kryassan.mp3'),
//     '🥞': new Audio('audio2/puncake.mp3'),
//     '🧀': new Audio('audio2/chees.mp3'),
//     '🍗': new Audio('audio2/leg.mp3'),
//     '🥩': new Audio('audio2/meat.mp3'),
//     '🍔': new Audio('audio2/humbur.mp3'),
//     '🍕': new Audio('audio2/pizza.mp3'),
//     '🌭': new Audio('audio2/hotdog.mp3'),
//     '🥪': new Audio('audio2/sandwich.mp3'),
//     '🌯': new Audio('audio2/byrito.mp3'),
//     '🧈': new Audio('audio2/butter.mp3'),
//     '🍚': new Audio('audio2/rice.mp3'),
//     '🍝': new Audio('audio2/spagetti.mp3'),
//     '🍣': new Audio('audio2/sushi.mp3'),
//     '🥟': new Audio('audio2/pelmen.mp3'),
//     '🥡': new Audio('audio2/takeout_box.mp3'),
//     '🦀': new Audio('audio2/crab.mp3'),
//     '🦞': new Audio('audio2/lobster.mp3'),
//     '🦐': new Audio('audio2/shrimp.mp3'),
//     '🦑': new Audio('audio2/kalmar.mp3'),
//     '🦪': new Audio('audio2/oyster.mp3'),
//     '🍦': new Audio('audio2/ice_cream.mp3'),
//     '🍧': new Audio('audio2/shaved_ice.mp3'),
//     '🍨': new Audio('audio2/straw_ice.mp3'),
//     '🍩': new Audio('audio2/donat.mp3'),
//     '🍪': new Audio('audio2/coockie.mp3'),
//     '🎂': new Audio('audio2/bd_cake.mp3'),
//     '🍰': new Audio('audio2/piece_cake.mp3'),
//     '🍫': new Audio('audio2/chocolate.mp3'),
//     '🥥': new Audio('audio2/coconut.mp3'),
//     '🥣': new Audio('audio2/kasha.mp3')

// };

// const selectors = {
//     boardContainer: document.querySelector('.board-container'),
//     board: document.querySelector('.board'),
//     moves: document.querySelector('.moves'),
//     timer: document.querySelector('.timer'),
//     start: document.querySelector('.start'),
//     nextLevelBtn: document.querySelector('.next-level-btn'),
//     win: document.querySelector('.win'),
//     levelText: document.querySelector('.level')
// };

// // Состояние игры
// const state = {
//     gameStarted: false,
//     flippedCards: 0,
//     totalFlips: 0,
//     totalTime: 0,
//     loop: null
// };

// // Функция для перемешивания массива
// const shuffle = array => {
//     const clonedArray = [...array];

//     for (let i = clonedArray.length - 1; i > 0; i--) {
//         const randomIndex = Math.floor(Math.random() * (i + 1));
//         const original = clonedArray[i];

//         clonedArray[i] = clonedArray[randomIndex];
//         clonedArray[randomIndex] = original;
//     }

//     return clonedArray;
// };

// // Функция для генерации уровней
// const generateLevels = (count) => {
//     const levels = [];
//     const emojis = ['🥔', '🍒', '🥑', '🌽', '🥕', '🍇', '🍉', '🍌', '🥭', '🍍', '🍓', '🍋', '🍊', '🍏', '🍎', '🍐', '🍑', '🥝', '🍈', '🍅', '🍆', '🥒', '🥬', '🥦', '🥜', '🌰', '🍞', '🥐','🥞', '🧀','🍗', '🥩', '🥓', '🍔', '🍕', '🌭', '🥪','🌯','🥚','🥣','🧈','🍚','🍝','🍣','🥟', '🥡', '🦀', '🦞', '🦐', '🦑', '🦪', '🍦', '🍧', '🍨', '🍩', '🍪', '🎂', '🍰','🍫']; 

//     for (let i = 0; i < count; i++) {
//         const dimension = 4;
//         const emojisSubset = shuffle(emojis).slice(0, dimension * dimension / 2);

//         levels.push({
//             dimension: dimension,
//             emojis: shuffle([...emojisSubset, ...emojisSubset])
//         });
//     }

//     return levels;
// };

// const levels = generateLevels(3); // Генерация 3 уровней

// // Звуки для кнопок
// const startSound = new Audio('audio/btn.mp3');
// const nextLevelSound = new Audio('audio/click.mp3');

// const startGame = () => {
//     state.gameStarted = true;
//     selectors.start.classList.add('disabled');
//     selectors.nextLevelBtn.classList.add('disabled');
//     startSound.play();

//     state.loop = setInterval(() => {
//         state.totalTime++;

//         selectors.moves.innerText = `${state.totalFlips} moves`;
//         selectors.timer.innerText = `Time: ${state.totalTime} sec`;
//     }, 1000);
// };

// const levelCompleteSound = new Audio('audio/success.mp3');
// const goToNextLevel = () => {
//     const matchedCards = document.querySelectorAll('.card.matched');
//     if (matchedCards.length !== levels[currentLevel].emojis.length) {
//         return;
//     }

//     currentLevel++;

//     if (currentLevel >= levels.length) {
//         clearInterval(state.loop);
//         selectors.nextLevelBtn.classList.add('disabled');
//         selectors.win.innerHTML = `
//             <span class="win-text">
//                 Congratulations!<br />
//                 You completed all levels!
//             </span>
//         `;
//         return;
//     }

//     state.totalFlips = 0;
//     state.totalTime = 0;
//     clearInterval(state.loop);
//     selectors.nextLevelBtn.classList.add('disabled');
//     generateGame();
//     nextLevelSound.play();

//     selectors.boardContainer.classList.remove('flipped');
//     selectors.win.innerHTML = '';

//     resetCards();

//     selectors.moves.innerText = "0 moves";
//     selectors.timer.innerText = "Time: 0 sec";

//     startGame();
//     updateLevelText();

//     selectors.start.style.display = 'none';
// };

// const resetCards = () => {
//     document.querySelectorAll('.card').forEach(card => {
//         card.classList.remove('flipped', 'matched');
//     });
// };

// const flipBackCards = () => {
//     document.querySelectorAll('.card:not(.matched)').forEach(card => {
//         card.classList.remove('flipped');
//     });

//     state.flippedCards = 0;
// };

// const generateGame = () => {
//     const level = levels[currentLevel];
//     const dimensions = level.dimension;
//     const emojis = level.emojis;

//     selectors.board.innerHTML = '';
//     selectors.board.style.gridTemplateColumns = `repeat(${dimensions}, auto)`;
//     selectors.board.style.gridTemplateRows = `repeat(${dimensions}, auto)`;

//     const fragment = document.createDocumentFragment();

//     for (let i = 0; i < emojis.length; i++) {
//         const card = document.createElement('div');
//         card.classList.add('card');

//         const cardFront = document.createElement('div');
//         cardFront.classList.add('card-front');

//         const cardBack = document.createElement('div');
//         cardBack.classList.add('card-back');
//         cardBack.innerText = emojis[i];
//         card.addEventListener('click', () => {
//             if (!card.classList.contains('flipped') && state.flippedCards < 2) {
//                 flipCard(card);
//                 const emoji = card.querySelector('.card-back').innerText;
//                 emojiSounds[emoji].play();
//             }
//         });

//         card.appendChild(cardFront);
//         card.appendChild(cardBack);
//         fragment.appendChild(card);
//     }

//     selectors.board.appendChild(fragment);
// };

// const flipCard = card => {
//     state.flippedCards++;
//     state.totalFlips++;

//     if (!state.gameStarted) {
//         startGame();
//     }

//     if (state.flippedCards <= 2) {
//         card.classList.add('flipped');
//     }

//     if (state.flippedCards === 2) {
//         const flippedCards = document.querySelectorAll('.flipped:not(.matched)');

//         if (flippedCards[0].innerText === flippedCards[1].innerText) {
//             flippedCards[0].classList.add('matched');
//             flippedCards[1].classList.add('matched');
//         }

//         setTimeout(() => {
//             flipBackCards();
//         }, 1000);
//     }

//     if (!document.querySelectorAll('.card:not(.flipped)').length) {
//         setTimeout(() => {
//             selectors.boardContainer.classList.add('flipped');
//             selectors.win.innerHTML = `
//                 <span class="win-text">
//                     You won!<br />
//                     with <span class="highlight">${state.totalFlips}</span> moves<br />
//                     under <span class="highlight">${state.totalTime}</span> seconds
//                 </span>
//             `;

//             clearInterval(state.loop);
//             selectors.nextLevelBtn.classList.remove('disabled');
//             levelCompleteSound.play();
//         }, 1000);
//     }
// };

// const updateLevelText = () => {
//     selectors.levelText.innerText = `Level: ${currentLevel + 1} / ${levels.length}`;
// };

// let currentLevel = 0;
// generateGame();
// updateLevelText();

// selectors.board.addEventListener('click', event => {
//     const clickedCard = event.target.closest('.card');
//     if (clickedCard && !clickedCard.classList.contains('flipped') && state.flippedCards < 2) {
//         flipCard(clickedCard);
//     }
// });

// selectors.nextLevelBtn.addEventListener('click', () => {
//     goToNextLevel();
// });

// selectors.start.addEventListener('click', () => {
//     startGame();
// });

// const quizContainer = document.getElementById('quiz');
// const resultsContainer = document.getElementById('results');
// const submitButton = document.getElementById('submit');

// const myQuestions = [
//     {
//         question: "Какое животное известно как Король Джунглей?",
//         translation: "What animal is known as the King of the Jungle?",
//         answers: {
//             a: "images/slon.png",
//             b: "images/lion.png",
//             c: "images/tiger.png"
//         },
//         correctAnswer: "b",
//         sounds: {
//             a: "sound/elephant.mp3",
//             b: "sound/lion.mp3",
//             c: "sound/tiger.mp3"
//         }
//     },
//     {
//         question: "Какое животное является самым большим млекопитающим в мире?",
//         translation: "Which animal is the largest mammal in the world?",
//         answers: {
//             a: "images/slon.png",
//             b: "images/kit.png",
//             c: "images/shark.png"
//         },
//         correctAnswer: "b",
//         sounds: {
//             a: "sound/elephant.mp3",
//             b: "sound/whale.mp3",
//             c: "sound/shark.mp3"
//         }
//     },
//     {
//         question: "Какое самое быстрое сухопутное животное?",
//         translation: "What is the fastest land animal?",
//         answers: {
//             a: "images/Cheetah.png",
//             b: "images/lion.png",
//             c: "images/horse.png"
//         },
//         correctAnswer: "a",
//         sounds: {
//             a: "sound/Cheetah.mp3",
//             b: "sound/lion.mp3",
//             c: "sound/horse.mp3"
//         }
//     }
// ];

// function buildQuiz() {
//     const output = [];
//     myQuestions.forEach((currentQuestion, questionNumber) => {
//         const answers = [];
//         for (letter in currentQuestion.answers) {
//             answers.push(
//                 `<label>
//                     <input type="radio" name="question${questionNumber}" value="${letter}">
//                     <img src="${currentQuestion.answers[letter]}" alt="${letter}" onclick="playSound('${currentQuestion.sounds[letter]}')" width="100" height="100">
//                 </label>`
//             );
//         }
//         output.push(
//             `<div class="question" onclick="toggleTranslation(${questionNumber})">${currentQuestion.question}</div>
//             <div class="translation" id="translation${questionNumber}" style="display:none;">${currentQuestion.translation}</div>
//             <div class="answers">${answers.join('')}</div>`
//         );
//     });
//     quizContainer.innerHTML = output.join('');
// }

// function showResults() {
//     const answerContainers = quizContainer.querySelectorAll('.answers');
//     let numCorrect = 0;
//     myQuestions.forEach((currentQuestion, questionNumber) => {
//         const answerContainer = answerContainers[questionNumber];
//         const selector = `input[name=question${questionNumber}]:checked`;
//         const userAnswer = (answerContainer.querySelector(selector) || {}).value;
//         if (userAnswer === currentQuestion.correctAnswer) {
//             numCorrect++;
//             answerContainers[questionNumber].style.color = 'green';
//         } else {
//             answerContainers[questionNumber].style.color = 'red';
//         }
//     });
//     resultsContainer.innerHTML = `${numCorrect} из ${myQuestions.length} правильных. Ваш результат: ${Math.round((numCorrect / myQuestions.length) * 100)}%.`;
// }

// function playSound(src) {
//     const sound = new Audio(src);
//     sound.play();
// }

// function toggleTranslation(questionNumber) {
//     const translation = document.getElementById(`translation${questionNumber}`);
//     translation.style.display = translation.style.display === "none" ? "block" : "none";
// }

// submitButton.addEventListener('click', showResults);
// buildQuiz();

// // Показать викторину после завершения уровней игры
// function onGameComplete() {
//     document.querySelector('.game-container').style.display = 'none';
//     document.querySelector('.quiz-section').style.display = 'block';
// }

// // Вызовите эту функцию, когда игрок завершит все уровни
// function checkLevelCompletion() {
//     if (currentLevel > totalLevels) {
//         onGameComplete();
//     }
// }