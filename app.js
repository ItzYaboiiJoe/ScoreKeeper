const p1button = document.querySelector('#p1button');
const p2button = document.querySelector('#p2button');
const p1display = document.querySelector('#p1display');
const p2display = document.querySelector('#p2display');
const reset = document.querySelector('#reset');
const dropDown = document.querySelector('#dropDown');

let finalScore = 3
let p1Score = 0
let p2Score = 0
let gameOver = false

let p1ScoreUp = () => {
    if (!gameOver){
        p1Score +=1
        if (p1Score === finalScore){
            gameOver = true;
            p1display.classList.add('win')
            p2display.classList.add('lose')
        }
        p1display.innerText = p1Score
    }
}

let p2ScoreUp = () => {
    if (!gameOver){
        p2Score +=1
        if (p2Score === finalScore){
            gameOver = true;
            p2display.classList.add('win')
            p1display.classList.add('lose')
        }
        p2display.innerText = p2Score
    }
}

let resetButton = () => {
    gameOver = false;
    p1Score = 0;
    p2Score = 0;
    p1display.innerText = 0;
    p2display.innerText = 0;
    p1display.classList.remove('win', 'lose')
    p2display.classList.remove('win', 'lose')
}

let dropDownChange = () => {
    finalScore = parseInt(dropDown.value)
    resetButton()
}

p1button.addEventListener('click', p1ScoreUp);
p2button.addEventListener('click', p2ScoreUp);
reset.addEventListener('click', resetButton);
dropDown.addEventListener('change', dropDownChange);