const layout = [
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 0, 4, 0, 0, 0, 0, 0, 0, 1,
    1, 0, 1, 0, 1, 1, 0, 1, 0, 1,
    1, 0, 1, 0, 0, 3, 0, 1, 0, 1,
    1, 0, 1, 0, 1, 1, 0, 1, 0, 1,
    1, 0, 0, 0, 0, 0, 0, 0, 0, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
];


let pacmanIndex;
let playerSpeed = 200;
let currentSpeed = playerSpeed;
let currentDirection;
let movementInterval;

let score = 0;
let pelletCount = 0;

let ghostSpeed = 200;
let previousGhostIndex;
let ghostMovementInterval;

const mapWidth = 10;
const mapHeight = 7;
const mapArea = mapHeight * mapWidth;
const grid = document.getElementById("grid");
const cells = []; 
const scoreDisplay = document.getElementById("scoreDisplay")
const winScreen = document.querySelector(".winScreen")
const finalScoreDisplay = document.getElementById("finalScoreValue")

const ghosts = [
{
    index: 12,
    speed: 200,
    className: "redGhost",
    interval: 0,
    previousIndex: null,
},
]
const redGhost = ghosts[0]


function createMap() {
    layout.forEach((cellType, index) => {
        const cell = document.createElement("div");
        cell.dataset.index = index;
        cell.innerText = index;

        if (cellType === 1) {
        cell.classList.add("wall");
        } else if (cellType === 0) {
        cell.classList.add("path");
        cell.classList.add("pellet");
        } else if(cellType === 3) {
            cell.classList.add("path");
        }
        else if(cellType === 4){
            cell.classList.add("path")
        }

        grid.appendChild(cell);
        cells.push(cell);
    });
}

function addPacMan(){
    layout.forEach((cellType, index) =>{
        if (cellType === 3) {
            cells[index].classList.add("pacman");
            pacmanIndex = index;
}
    })
}

function addRedGhost(){
    layout.forEach((cellType, index) =>{
        if (cellType === 4) {
            cells[index].classList.add("redGhost");
            redGhost.index = index;
}
    })
}
function init(){
    scoreDisplay.innerHTML = score
    createMap()
    addPacMan()
    addRedGhost()
    calculatePellets()
}

function calculatePellets(){
    layout.forEach((cell) => {
        pelletCount;
        if (cell === 0){
            pelletCount += 1}
        
    })
}

function movePlayer(e){
    console.log(e);
    if(e.code === "KeyW"){
        startMovement("up");
        console.log("up")}
    else if(e.code === "KeyA"){
        startMovement("left");
        console.log("left")}
    else if(e.code === "KeyS"){
        startMovement("down");
        console.log("down")}
    else if(e.code === "KeyD"){
        startMovement("right");
        console.log("right")}
    else{console.log("not valid input")}
} 

function startMovement(dir){
    if (dir === "up"){
        if (!cells[pacmanIndex-mapWidth].classList.contains("wall")){
            clearInterval(movementInterval)
            movementInterval = 0
            moveUp()
        }
        else(console.log("wall in the way"))
    }
    else if (dir === "left"){
        if (!cells[pacmanIndex-1].classList.contains("wall")){
            clearInterval(movementInterval)
            movementInterval = 0
            moveLeft()
        }
        else{console.log("wall in the way")}
    }
    else if(dir === "down"){
        if (!cells[pacmanIndex + mapWidth].classList.contains("wall")){
            clearInterval(movementInterval)
            movementInterval = 0
            moveDown()
        }
        else{console.log("wall in the way")}
    }
    else if (!cells[pacmanIndex+1].classList.contains("wall")){
            clearInterval(movementInterval)
            movementInterval = 0
            moveRight()
        }
        else{console.log("wall in the way")}
}


function moveUp(){
    if (!movementInterval){
        movementInterval = setInterval(() =>{
            let newPosition = pacmanIndex - mapWidth
            if (pelletCount === 0){
                wonGame();
            }
            else if (!cells[newPosition].classList.contains("wall")){
                cells[pacmanIndex].classList.remove("pacman")
                cells[newPosition].classList.add("pacman")
                pacmanIndex = newPosition;
                eatPellet()
            }
            else{
                clearInterval(movementInterval);
                movementInterval=0;
            }
        }, playerSpeed)
    }
}

function moveDown(){
    if (!movementInterval){
        movementInterval = setInterval(() =>{
            let newPosition = pacmanIndex + mapWidth
            if (pelletCount === 0){
                wonGame();
            }
            else if (!cells[newPosition].classList.contains("wall")){
                cells[pacmanIndex].classList.remove("pacman")
                cells[newPosition].classList.add("pacman")
                pacmanIndex = newPosition;
                eatPellet()
            }
                else{
                    clearInterval(movementInterval);
                    movementInterval = 0;
                }
        }, playerSpeed)
    }
}

function moveLeft(){
    if (!movementInterval){
        movementInterval = setInterval(() =>{
            let newPosition = pacmanIndex - 1
            if (pelletCount === 0){
                wonGame();
            }
            else if (!cells[newPosition].classList.contains("wall")){
                cells[pacmanIndex].classList.remove("pacman")
                cells[newPosition].classList.add("pacman")
                pacmanIndex = newPosition;
                eatPellet()
            }
                else{
                    clearInterval(movementInterval)
                    movementInterval = 0
                }
        }, playerSpeed)
    }
}

function moveRight(){
    if (!movementInterval){
        movementInterval = setInterval(() =>{
            let newPosition = pacmanIndex + 1
            if (pelletCount === 0){
                if (pelletCount === 0){
                wonGame();
            }
            }
            else if (!cells[newPosition].classList.contains("wall")){
                cells[pacmanIndex].classList.remove("pacman")
                cells[newPosition].classList.add("pacman")
                pacmanIndex = newPosition;
                eatPellet()
            }
                else{
                    clearInterval(movementInterval)
                    movementInterval = 0
                }
        }, playerSpeed)
    }
}

function eatPellet(){
    if(cells[pacmanIndex].classList.contains("pellet")){
        cells[pacmanIndex].classList.remove("pellet");
        score += 10;
        scoreDisplay.innerHTML = score;
        pelletCount -= 1;
    }
}

function wonGame(){
    clearInterval(movementInterval);
    movementInterval=0;
    winScreen.style.display = "flex";
    finalScoreDisplay.innerHTML = score;
    console.log("you won the game")
}

function moveGhost(ghostObj){
//checkDirections
    let validDirs = checkGhostDirections(ghostObj);
//pickDirection
    let newDir = pickDirection(validDirs);
//startGhostMovement
    startGhostMovement(ghostObj, newDir);
}

function checkGhostDirections(ghostObj){
    let directions = [];
    if (!cells[ghostObj.index-1].classList.contains("wall") && ghostObj.index-1 !== ghostObj.previousIndex){
        directions.push("left")
    }
    if (!cells[ghostObj.index-mapWidth].classList.contains("wall") && ghostObj.index-mapWidth !== ghostObj.previousIndex){
        directions.push("up")
    }
    if (!cells[ghostObj.index+1].classList.contains("wall") && ghostObj.index+1 !== ghostObj.previousIndex){
        directions.push("right")
    }
    if (!cells[ghostObj.index+mapWidth].classList.contains("wall") && ghostObj.index+mapWidth !== ghostObj.previousIndex){
        directions.push("down")
    }
    return directions
}

function pickDirection(dirs){
    let randnum = Math.floor(Math.random() * dirs.length);
    return dirs[randnum]
}


function startGhostMovement(ghostObj, dir){
    if (!ghostObj.interval){
        ghostObj.interval = setInterval(() =>{
            let newPosition = movePosition(ghostObj, dir)
            if (pelletCount === 0){
                wonGame();
            }
            else if (!cells[newPosition].classList.contains("wall")){
                cells[ghostObj.index].classList.remove("redGhost")
                cells[newPosition].classList.add("redGhost")
                ghostObj.previousIndex = ghostObj.index;
                ghostObj.index = newPosition;
                choosePath(ghostObj);
                checkForPacman(ghostObj)
            }
            else{
                clearInterval(ghostObj.interval);
                ghostObj.interval=0;
                moveGhost(ghostObj)
            }
        }, ghostObj.speed)
    }
}

function movePosition(ghostObj, dir){
    if (dir === "up"){
        return ghostObj.index-mapWidth;
    }
    else if (dir === "left"){
        return ghostObj.index-1;
    }
    else if (dir === "down"){
        return ghostObj.index + mapWidth;
    }
    else if(dir === "right"){
        return ghostObj.index + 1
    }
}

function choosePath(ghostObj){
let directions = checkGhostDirections(ghostObj);
if (directions.length > 1){
    clearInterval(ghostObj.interval);
    ghostObj.interval = 0;
    let newDir = pickDirection(directions);
    startGhostMovement(ghostObj,newDir);
}
}

function findNumOfPaths(ghostObj){
    let options = 0;
    if (!cells[ghostObj.index-1].classList.contains("wall") && ghostObj.index-1 !== previousGhostIndex){
        options += 1;
    }
    if (!cells[ghostObj.index-mapWidth].classList.contains("wall") && ghostObj.index-mapWidth !== previousGhostIndex){
        options += 1;
    }
    if (!cells[ghostObj.index+1].classList.contains("wall") && ghostObj.index+1 !== previousGhostIndex){
        options += 1;
    }
    if (!cells[ghostObj.index+mapWidth].classList.contains("wall") && ghostObj.index+mapWidth !== previousGhostIndex){
        options += 1;
    }
    return options
}

function checkForPacman()







document.addEventListener("keydown", movePlayer)


init()


moveGhost(redGhost)













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

// let timerInterval;
// function startMovement (e, dir){
//     if(!timerInterval){
//         clearInterval(timerInterval)
//         timerInterval = setInterval(() => {
//             console.log("move")
//             if(dir === "up"){
//                 console.log(pacmanIndex - mapWidth)
//             }
//     }, playerSpeed)}
//}