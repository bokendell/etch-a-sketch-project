function createDivGrid(size) {
    let grid = document.createElement('div');
    grid.classList.add('.grid');
    for (let i = 0; i < size; i++){
        let newGridRow = createGridRow(size);
        grid.appendChild(newGridRow);
    }
    gridSpace.appendChild(grid);
}

function createGridRow(size) {
    let gridRow = document.createElement('div')
    gridRow.classList.add('.grid-row');
    gridRow.style.display = "flex";
    for (let i = 0; i < size; i++){
        let gridSquare = document.createElement('div');
        gridSquare.classList.add('.grid-square');
        addGridSquareStyle(gridSquare);
        gridSquare.addEventListener('mouseenter', function () {
            gridSquare.style.backgroundColor = randomRGBValue();
        });
        gridRow.appendChild(gridSquare);
    }
    return gridRow;
}

function addGridSquareStyle(gridSquare) {
    gridSquare.style.width = "20px";
    gridSquare.style.height = "20px";
    gridSquare.style.border = "2px solid black";
}

function removeGrid(){
    let gridSpace = document.querySelector('.grid-space');
    while (gridSpace.firstChild) {
        gridSpace.removeChild(gridSpace.firstChild);
    }
}

function randomNumberGenerator(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function randomRGBValue() {
    return "rgb(" + randomNumberGenerator(0, 255) + "," + randomNumberGenerator(0, 255) + "," + randomNumberGenerator(0, 255) + ")";
}

const btn = document.querySelector('.user-prompt');
btn.addEventListener('click', function () {
    let newGridSize = prompt("How many squares per side? (max 100)");
    while (newGridSize > 100 || newGridSize <= 0) {
        if (newGridSize > 100) {
            alert("You entered above the max size");
            newGridSize = prompt("How many squares per side? (max 100)")
        }

        if (newGridSize <= 0) {
            alert("You entered below the min size");
            newGridSize = prompt("How many squares per side? (max 100)")
        }
    }
    removeGrid();
    createDivGrid(newGridSize);
});

const gridSpace = document.querySelector('.grid-space');
createDivGrid(16);