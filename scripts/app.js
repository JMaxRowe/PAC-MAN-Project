// const layout = [
//     1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
//     1, 2, 4, 0, 0, 0, 0, 0, 2, 1,
//     1, 0, 1, 0, 1, 1, 0, 1, 0, 1,
//     1, 0, 1, 0, 0, 3, 0, 1, 0, 1,
//     1, 0, 1, 0, 1, 1, 0, 1, 0, 1,
//     1, 0, 0, 0, 0, 0, 0, 0, 0, 1,
//     1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
// ];

const layout = [
  1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
  1,2,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,2,1,
  1,0,1,1,1,0,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,0,1,1,1,0,1,
  1,0,1,1,1,0,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,0,1,1,1,0,1,
  1,0,1,1,1,0,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,0,1,1,1,0,1,
  1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
  1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,0,1,
  1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,0,1,
  1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
  1,0,1,1,1,1,0,1,1,1,1,1,1,0,1,1,1,1,1,1,0,1,1,1,1,1,0,1,
  1,0,1,1,1,1,0,1,1,1,1,1,1,0,1,1,1,1,1,1,0,1,1,1,1,1,0,1,
  1,2,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,2,1,
  1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,
  1,1,1,1,1,1,0,1,1,1,1,5,5,5,5,5,1,1,1,1,0,1,1,1,1,1,1,1,
  1,0,0,0,0,0,0,1,1,1,1,5,5,5,5,5,1,1,1,1,0,0,0,0,0,0,0,1,
  1,0,1,1,1,1,0,1,1,1,1,5,5,5,5,5,1,1,1,1,0,1,1,1,1,1,0,1,
  1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,0,1,
  1,0,1,1,1,1,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,1,1,1,1,1,0,1,
  1,0,1,1,1,1,0,1,1,1,1,1,1,0,1,1,1,1,1,1,0,1,1,1,1,1,0,1,
  1,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,1,
  1,1,1,1,1,1,0,1,1,1,1,1,1,0,1,1,1,1,1,1,0,1,1,1,1,1,1,1,
  1,1,1,1,1,1,0,1,1,1,1,1,1,0,1,1,1,1,1,1,0,1,1,1,1,1,1,1,
  1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
  1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,0,1,
  1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,0,1,
  1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,0,1,
  1,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,1,
  1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1
];





let pacmanIndex;
let pacmanStartingIndex
let playerSpeed = 200;
let currentSpeed = playerSpeed;
let currentDirection;
let movementInterval;

let score = 0;
let pelletCount = 0;
let lives = 3

let ghostSpeed = 200;
let previousGhostIndex;
let ghostMovementInterval;
let powerPelletTimeout;

const startingSpeed = 200;
const powerSpeed = 100;
const mapWidth = 28;
const mapHeight = 31;
const mapArea = mapHeight * mapWidth;
const grid = document.getElementById("grid");
const cells = []; 
const scoreDisplay = document.getElementById("scoreDisplay");
const winScreen = document.querySelector(".winScreen");
const finalScoreDisplay = document.getElementById("finalScoreValue");
const loseScreen = document.querySelector(".gameOverScreen");
const loserScoreValue = document.getElementById("loserScoreValue");
const tryAgainButton = document.querySelector(".retryButton");
const playAgainButton = document.querySelector(".restart");
const livesDisplay = document.querySelector(".lives")

const ghosts = [
{
    index: null,
    speed: 200,
    className: "redGhost",
    interval: 0,
    previousIndex: null,
    startingIndex: null,
},
]
const redGhost = ghosts[0]


function createMap() {
    layout.forEach((cellType, index) => {
        const cell = document.createElement("div");
        cell.dataset.index = index;
        // cell.innerText = index;
        cell.classList.add("cell")

        if (cellType === 1) {
        cell.classList.add("wall");
        } 
        else if (cellType === 0) {
        cell.classList.add("path");
        cell.classList.add("pellet");
        }
        else if(cellType === 2){
            cell.classList.add("path");
            cell.classList.add("powerPellet")
        }
        else if(cellType === 3) {
            cell.classList.add("path");
        }
        else if(cellType === 4){
            cell.classList.add("path")
        }
        else if (cellType === 5){
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
            pacmanStartingIndex = index;
            pacmanIndex = index;
        }
    })
}

function addRedGhost(ghostObj){
    layout.forEach((cellType, index) =>{
        if (cellType === 4) {
            cells[index].classList.add("redGhost");
            redGhost.startingIndex = index
            redGhost.index = index;
        }
    })
}
function init(){
    lives = 3
    setHearts()
    scoreDisplay.innerHTML = score
    createMap()
    addPacMan()
    addRedGhost()
    calculatePellets()
    moveGhost(redGhost)
}

function calculatePellets(){
    pelletCount = 0
    layout.forEach((cell) => {
        pelletCount;
        if (cell === 0){
            pelletCount += 1}
        
    })
}


function movePlayer(e){
    console.log(e);
    if(e.code === "KeyW"){
        if (!cells[pacmanIndex-mapWidth].classList.contains("wall")){
            clearInterval(movementInterval)
            movementInterval = 0
            playerMoveLoop("up")
        }}
    else if(e.code === "KeyA"){
        if (!cells[pacmanIndex-1].classList.contains("wall")){
            clearInterval(movementInterval)
            movementInterval = 0
            playerMoveLoop("left")
        }
    }
    else if(e.code === "KeyS"){
        if (!cells[pacmanIndex + mapWidth].classList.contains("wall")){
            clearInterval(movementInterval)
            movementInterval = 0
            playerMoveLoop("down")
        }}
    else if(e.code === "KeyD"){
        if (!cells[pacmanIndex+1].classList.contains("wall")){
            clearInterval(movementInterval)
            movementInterval = 0
            playerMoveLoop("right")
        }}
    else{console.log("not valid input")}
} 



function playerMoveLoop(dir){
    if (!movementInterval){
        movementInterval = setInterval(() =>{
            let newPosition = newPlayerPosition(dir)
            if (pelletCount === 0){
                wonGame();
            }
            else if (!cells[newPosition].classList.contains("wall")){
                cells[pacmanIndex].classList.remove("pacman")
                cells[newPosition].classList.add("pacman")
                pacmanIndex = newPosition;
                eatPellet()
                checkForGhost()
            }
            else{
                clearInterval(movementInterval);
                movementInterval=0;
            }
        }, playerSpeed)
    }
}

function newPlayerPosition(dir){
    if (dir === "up"){
        return pacmanIndex-mapWidth;
    }
    else if (dir === "left"){
        return pacmanIndex-1;
    }
    else if (dir === "down"){
        return pacmanIndex + mapWidth;
    }
    else if(dir === "right"){
        return pacmanIndex + 1
    }
}




function eatPellet(){
    if(cells[pacmanIndex].classList.contains("pellet")){
        cells[pacmanIndex].classList.remove("pellet");
        score += 10;
        scoreDisplay.innerHTML = score;
        pelletCount -= 1;
    }
    else if (cells[pacmanIndex].classList.contains("powerPellet")){
        powerPellet()
    }
}

function powerPellet(){
    score += 50
    playerSpeed = powerSpeed
    cells[pacmanIndex].classList.remove("powerPellet")
    ghosts.forEach((ghost)=>{
        cells[ghost.index].classList.add("scaredGhost")
    })
    clearTimeout(powerPelletTimeout)
    powerPelletTimeout = setTimeout(()=>{
        playerSpeed = startingSpeed
        ghosts.forEach((ghost)=>{
            cells[ghost.index].classList.remove("scaredGhost")
        })
    }, 5000)
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
                if (cells[ghostObj.index].classList.contains("scaredGhost")){
                    cells[ghostObj.index].classList.remove(ghostObj.className, "scaredGhost")
                    cells[newPosition].classList.add(ghostObj.className, "scaredGhost")
                    ghostObj.previousIndex = ghostObj.index;
                    ghostObj.index = newPosition;
                    choosePath(ghostObj);
                    checkForPacman(ghostObj);
                }
                else {
                    cells[ghostObj.index].classList.remove(ghostObj.className)
                    cells[newPosition].classList.add(ghostObj.className)
                    ghostObj.previousIndex = ghostObj.index;
                    ghostObj.index = newPosition;
                    choosePath(ghostObj);
                    checkForPacman(ghostObj);
            }
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



function checkForPacman(ghostObj){
    if(cells[ghostObj.index].classList.contains("scaredGhost")&&cells[ghostObj.index].classList.contains("pacman")){
        eatGhost(ghostObj)
    }
    else if(cells[ghostObj.index].classList.contains("pacman")){
        loseLife()
    }
}

function checkForGhost(){
    const collidedGhost = ghosts.find(ghost=> ghost.index === pacmanIndex)
    if(cells[pacmanIndex].classList.contains("scaredGhost")){
        eatGhost(collidedGhost)
    }
    else if(cells[pacmanIndex].classList.contains("redGhost")){
        loseLife()
    }
}

function eatGhost(ghostObj){
    score =+ 100
    cells[ghostObj.index].classList.remove("scaredGhost", ghostObj.className)
    clearInterval(ghostObj.interval)
    ghostObj.interval = 0
    ghostObj.index = ghostObj.startingIndex;
    setTimeout(()=>{
        cells[ghostObj.startingIndex].classList.add(ghostObj.className);
        moveGhost(ghostObj)
    },1000)
}

function loseLife(){
    document.removeEventListener("keydown", movePlayer)
    clearInterval(movementInterval)
    movementInterval = 0;
    clearInterval(redGhost.interval)
    redGhost.interval = 0;
    lives --;
    loseHeart()
    if(lives===0){loseGame()}
    else{resetPositions()}
}

function loseHeart(){
    let nextHeart = document.querySelector(".heart")
    nextHeart.classList.remove("heart")
    nextHeart.classList.add('greyHeart')
}

function resetPositions(){
    setTimeout(() => {
    cells[pacmanIndex].classList.remove("pacman")
    pacmanIndex = pacmanStartingIndex;
    cells[pacmanStartingIndex].classList.add("pacman")
    
    ghosts.forEach((ghost)=>{
        cells[ghost.index].classList.remove(ghost.className);
        ghost.index = ghost.startingIndex
        cells[ghost.index].classList.add(ghost.className);
        activateSprites()
    })
}, 2000)
}
function activateSprites(){
    document.addEventListener("keydown", movePlayer)
    moveGhost(redGhost)
}

function wonGame(){
    clearInterval(movementInterval);
    movementInterval=0;
    winScreen.style.display = "flex";
    finalScoreDisplay.innerHTML = score;
    console.log("you won the game")
}

function loseGame(){
    loseScreen.style.display = "flex";
    loserScoreValue.innerHTML = score;
}

function restart(){
    hideDisplays()
    lives = 3
    score = 0
    
    setHearts()
    scoreDisplay.innerHTML = score
    removeAllSprites()
    addPacMan()
    document.addEventListener("keydown", movePlayer)
    addRedGhost()
    addPellets()
    calculatePellets()
    moveGhost(redGhost)
}

function hideDisplays(){
    loseScreen.style.display = "none";
    winScreen.style.display = "none";
}

function removeAllSprites() {
    cells.forEach(cell => {
        cell.classList.remove("pacman", "redGhost", "scaredGhost");
    });
}


function setHearts() {
    const allHearts = document.querySelectorAll(".lives div");
    allHearts.forEach(heart => {
        heart.classList.remove("greyHeart");
        heart.classList.add("heart");
    });
}

function addPellets(){
    layout.forEach((cellType, index) => {
        const cell = cells[index]
        if (cellType === 0) {
        cell.classList.add("pellet");
        }
        else if (cellType === 2){
            cell.classList.add("powerPellet")
        }
    });
}


document.addEventListener("keydown", movePlayer)

tryAgainButton.addEventListener("click", restart)
playAgainButton.addEventListener("click", restart)



init()
















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


// function movePlayer(e){
//     console.log(e);
//     if(e.code === "KeyW"){
//         startMovement("up");
//         console.log("up")}
//     else if(e.code === "KeyA"){
//         startMovement("left");
//         console.log("left")}
//     else if(e.code === "KeyS"){
//         startMovement("down");
//         console.log("down")}
//     else if(e.code === "KeyD"){
//         startMovement("right");
//         console.log("right")}
//     else{console.log("not valid input")}
// } 

// function startMovement(dir){
//     if (dir === "up"){
//         if (!cells[pacmanIndex-mapWidth].classList.contains("wall")){
//             clearInterval(movementInterval)
//             movementInterval = 0
//             playerMoveLoop(dir)
//         }
//         else(console.log("wall in the way"))
//     }
//     else if (dir === "left"){
//         if (!cells[pacmanIndex-1].classList.contains("wall")){
//             clearInterval(movementInterval)
//             movementInterval = 0
//             playerMoveLoop(dir)
//         }
//         else{console.log("wall in the way")}
//     }
//     else if(dir === "down"){
//         if (!cells[pacmanIndex + mapWidth].classList.contains("wall")){
//             clearInterval(movementInterval)
//             movementInterval = 0
//             playerMoveLoop(dir)
//         }
//         else{console.log("wall in the way")}
//     }
//     else if(dir === "right"){
//         if (!cells[pacmanIndex+1].classList.contains("wall")){
//             clearInterval(movementInterval)
//             movementInterval = 0
//             playerMoveLoop(dir)
//         }
//         else{console.log("wall in the way")}
//     }
// }


// function findNumOfPaths(ghostObj){
//     let options = 0;
//     if (!cells[ghostObj.index-1].classList.contains("wall") && ghostObj.index-1 !== previousGhostIndex){
//         options += 1;
//     }
//     if (!cells[ghostObj.index-mapWidth].classList.contains("wall") && ghostObj.index-mapWidth !== previousGhostIndex){
//         options += 1;
//     }
//     if (!cells[ghostObj.index+1].classList.contains("wall") && ghostObj.index+1 !== previousGhostIndex){
//         options += 1;
//     }
//     if (!cells[ghostObj.index+mapWidth].classList.contains("wall") && ghostObj.index+mapWidth !== previousGhostIndex){
//         options += 1;
//     }
//     return options
// }

// function moveUp(){
//     if (!movementInterval){
//         movementInterval = setInterval(() =>{
//             let newPosition = pacmanIndex - mapWidth
//             if (pelletCount === 0){
//                 wonGame();
//             }
//             else if (!cells[newPosition].classList.contains("wall")){
//                 cells[pacmanIndex].classList.remove("pacman")
//                 cells[newPosition].classList.add("pacman")
//                 pacmanIndex = newPosition;
//                 eatPellet()
//                 checkForGhost()
//             }
//             else{
//                 clearInterval(movementInterval);
//                 movementInterval=0;
//             }
//         }, playerSpeed)
//     }
// }

// function moveDown(){
//     if (!movementInterval){
//         movementInterval = setInterval(() =>{
//             let newPosition = pacmanIndex + mapWidth
//             if (pelletCount === 0){
//                 wonGame();
//             }
//             else if (!cells[newPosition].classList.contains("wall")){
//                 cells[pacmanIndex].classList.remove("pacman")
//                 cells[newPosition].classList.add("pacman")
//                 pacmanIndex = newPosition;
//                 eatPellet()
//                 checkForGhost()
//             }
//                 else{
//                     clearInterval(movementInterval);
//                     movementInterval = 0;
//                 }
//         }, playerSpeed)
//     }
// }

// function moveLeft(){
//     if (!movementInterval){
//         movementInterval = setInterval(() =>{
//             let newPosition = pacmanIndex - 1
//             if (pelletCount === 0){
//                 wonGame();
//             }
//             else if (!cells[newPosition].classList.contains("wall")){
//                 cells[pacmanIndex].classList.remove("pacman")
//                 cells[newPosition].classList.add("pacman")
//                 pacmanIndex = newPosition;
//                 eatPellet()
//                 checkForGhost()
//             }
//                 else{
//                     clearInterval(movementInterval)
//                     movementInterval = 0
//                 }
//         }, playerSpeed)
//     }
// }

// function moveRight(){
//     if (!movementInterval){
//         movementInterval = setInterval(() =>{
//             let newPosition = pacmanIndex + 1
//             if (pelletCount === 0){
//                 if (pelletCount === 0){
//                 wonGame();
//             }
//             }
//             else if (!cells[newPosition].classList.contains("wall")){
//                 cells[pacmanIndex].classList.remove("pacman")
//                 cells[newPosition].classList.add("pacman")
//                 pacmanIndex = newPosition;
//                 eatPellet()
//                 checkForGhost()
//             }
//                 else{
//                     clearInterval(movementInterval)
//                     movementInterval = 0
//                 }
//         }, playerSpeed)
//     }
// }