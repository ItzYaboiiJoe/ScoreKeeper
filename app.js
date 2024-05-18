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
            p1display.classList.add('has-text-success')
            p2display.classList.add('has-text-danger')
            p1button.disabled = true
            p2button.disabled = true
        }
        p1display.innerText = p1Score
    }
}

let p2ScoreUp = () => {
    if (!gameOver){
        p2Score +=1
        if (p2Score === finalScore){
            gameOver = true;
            p2display.classList.add('has-text-success')
            p1display.classList.add('has-text-danger')
            p1button.disabled = true
            p2button.disabled = true
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
    p1display.classList.remove('has-text-success', 'has-text-danger')
    p2display.classList.remove('has-text-success', 'has-text-danger')
    p1button.disabled = false
    p2button.disabled = false
}

let dropDownChange = () => {
    finalScore = parseInt(dropDown.value)
    resetButton()
}

p1button.addEventListener('click', p1ScoreUp);
p2button.addEventListener('click', p2ScoreUp);
reset.addEventListener('click', resetButton);
dropDown.addEventListener('change', dropDownChange);