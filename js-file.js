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
        gridSquare.style.width = "20px";
        gridSquare.style.height = "20px";
        gridSquare.style.border = "2px solid black";
        gridSquare.addEventListener('click', function () {
            gridSquare.style.backgroundColor = "red";
        });
        gridRow.appendChild(gridSquare);
    }
    return gridRow;
}


const gridSpace = document.querySelector('.grid-space');


createDivGrid(16);

const gridSquares = document.querySelectorAll('.grid-square');

