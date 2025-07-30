let color = 'black'; 
let click = true;

function populateBoard(size) {
    let board = document.querySelector('.board');
    let squares = board.querySelectorAll('div');
    squares.forEach(div => div.remove());
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let amount = size * size;
    for (let i = 0; i < amount; i++) {
        let square = document.createElement('div');
        square.addEventListener('mouseover', colorSquare);
        square.style.backgroundColor = 'white';
        board.insertAdjacentElement('beforeend', square);
    } 
}

populateBoard(16);
function changeSize(input){
    if (click){
        if (input >= 2 && input <= 100) {
        populateBoard(input);
    }
    else {
        console.log('Please enter a number between 2 and 100');
    }
    }
}

function colorSquare() {
    if (!click) return;
    if (color === 'random') {
        this.style.backgroundColor = `rgb(${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)})`;
    } else if (color === 'reset') {
        this.style.backgroundColor = 'white';
    } else {
        this.style.backgroundColor = color;
    }
}

function changeColor(choice) {
    color = choice;
}

function resetBoard() {
    let squares = document.querySelectorAll('.board div');
    squares.forEach(div => div.style.backgroundColor = 'white');
}

function submitSize() {
    const input = document.getElementById('boardSizeInput').value;
    changeSize(input);
}

document.body.addEventListener('click', () => {
    click = !click;
    const modeStatus = document.getElementById('modeStatus');
    if (click) {
        modeStatus.textContent = 'Mode: Active';
    } else {
        modeStatus.textContent = 'Mode: Inactive';
    }
});