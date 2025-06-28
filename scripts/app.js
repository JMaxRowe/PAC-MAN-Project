const layout = [
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 0, 0, 0, 0, 0, 0, 0, 0, 1,
  1, 0, 1, 1, 1, 1, 1, 1, 0, 1,
  1, 0, 1, 0, 0, 3, 0, 1, 0, 1,
  1, 0, 1, 0, 1, 1, 0, 1, 0, 1,
  1, 0, 0, 0, 1, 1, 0, 0, 0, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
];

let pacmanIndex

const mapWidth = 10;
const grid = document.getElementById("grid");
const cells = []; 

function createMap() {
  layout.forEach((cellType, index) => {
    const cell = document.createElement("div");
    cell.dataset.index = index;
    cell.innerText = index;

    if (cellType === 1) {
      cell.classList.add("wall");
    } else if (cellType === 0) {
      cell.classList.add("path");
    } else if(cellType === 3) {
        cell.classList.add("path");
        cell.classList.add('PacMan')
        pacmanIndex = index;

    }

    grid.appendChild(cell);
    cells.push(cell);
  });
}

createMap()























// ~~~~~~~~~~~~~~~Comment Graveyard~~~~~~~~~~~~~~
//map gen
// let mapWidth = 10;
// let mapHeight = 10;
// let mapArea = mapHeight*mapWidth;

// const grid = document.getElementById('grid');
// const cellElements = []

// function createMap(){
//     grid.style.display = "grid";
//     grid.style.gridTemplateColumns = `repeat(${mapWidth}, 1fr)`;
//     grid.style.gridTemplateRows = `repeat(${mapHeight}, 1fr)`;

//     for(let i = 0; i<mapArea; i++){
//     const cell = document.createElement('div')
//     cell.innerText = i
//     cell.dataset.index = i
//     cell.style.width = (`${100/mapHeight}%`)
//     cell.style.height = (`${100/mapWidth}%`)


//     cellElements.push(cell)
//     grid.appendChild(cell)
//     }
//     console.log(cellElements)
// }


// createMap()