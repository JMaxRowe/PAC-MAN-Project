const layout0 = [
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 2, 4, 0, 0, 0, 0, 0, 2, 1,
    1, 0, 1, 0, 1, 1, 0, 1, 0, 1,
    1, 0, 1, 0, 0, 3, 0, 1, 0, 1,
    1, 0, 1, 0, 1, 1, 0, 1, 0, 1,
    1, 0, 0, 0, 0, 0, 0, 0, 0, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
];

const layout1 = [
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
    1,2,0,0,0,0,0,0,0,5,5,5,5,5,5,5,5,5,0,0,0,0,0,0,0,0,2,1,
    1,1,1,1,1,1,0,1,1,5,1,1,1,1,1,1,1,5,1,1,0,1,1,1,1,1,1,1,
    1,1,1,1,1,1,0,1,1,5,1,4,4,4,4,4,1,5,1,1,0,1,1,1,1,1,1,1,
    1,0,0,0,0,0,0,1,1,5,1,4,4,4,4,4,1,5,1,1,0,0,0,0,0,0,0,1,
    1,0,1,1,1,1,0,1,1,5,1,1,1,1,1,1,1,5,1,1,0,1,1,1,1,1,0,1,
    1,0,1,1,1,1,0,0,0,5,5,5,5,3,5,5,5,5,0,0,0,1,1,1,1,1,0,1,
    1,0,1,1,1,1,0,1,1,1,1,1,1,0,1,1,1,1,1,1,0,1,1,1,1,1,0,1,
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
let pacmanStartingIndex;
let previousPacmanIndex;
let playerSpeed = 200;
let currentSpeed = playerSpeed;
let currentDirection;
let movementInterval;
let currentMap = layout1;
let gameIsRunning = true;

let score = 0;
let pelletCount = 0;
let lives = 3
let defaultVolume = 0.2;
let isMuted = false;

let ghostSpeed = 200;
let previousGhostIndex;
let ghostMovementInterval;
let powerPelletTimeout;

let playerName = "";

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
const muteButton = document.querySelector(".muteButton")

const startScreen = document.querySelector(".startScreen");
const startButton = document.querySelector(".startButton");
const nameInput = document.getElementById("playerName");

const munchSound = new Audio("../assets/sounds/Pacman_Munch.mp3");
const pacmanBeginning = new Audio("../assets/sounds/pacman_beginning.wav");
const PacmanDeath = new Audio("../assets/sounds/pacman_death.wav");
const PacmanIntermission = new Audio("../assets/sounds/pacman_intermission.wav");
const PacmanEatGhost = new Audio("../assets/sounds/pacman_eatghost.wav");
const powerPelletSound = new Audio("../assets/sounds/Pac Man Power Pellet.mp3");
const allSounds = [
    munchSound, 
    pacmanBeginning, 
    PacmanDeath, 
    PacmanIntermission, 
    PacmanEatGhost,
    powerPelletSound,
]
allSounds.forEach((sound)=>{sound.volume = defaultVolume})


let cellTypes = [
    {
        cellNum : 0,
        className : ["pellet", "path"],
    },
    {
        cellNum: 1,
        className: ["wall"],
    },
    {
        cellNum: 2,
        className: ["powerPellet", "path"],
    },
    {
        cellNum: 3,
        className: ["path"],
    },
        {
        cellNum: 4,
        className: ["spawnRoom"],
    },
    {
        cellNum: 5,
        className: ["path", "spawnPoint"],
    },
]

const ghosts = [
{
    index: null,
    speed: 175,
    className: "redGhost",
    interval: 0,
    timeOut: 0,
    delay: 0,
    previousIndex: null,
    startingIndex: null,
},
{
    index: null,
    speed: 200,
    className: "pinkGhost",
    interval: 0,
    timeOut: 0,
    delay: 5000,
    previousIndex: null,
    startingIndex: null,
},
{
    index: null,
    speed: 200,
    className: "orangeGhost",
    interval: 0,
    timeOut: 0,
    delay: 10000,
    previousIndex: null,
    startingIndex: null,
},
{
    index: null,
    speed: 225,
    className: "blueGhost",
    interval: 0,
    timeOut: 0,
    delay: 15000,
    previousIndex: null,
    startingIndex: null,
},
]

function createMap(layout){
    layout.forEach((cellType, index)=>{
        const cell = document.createElement("div");
        cell.dataset.index = index;
        const typeEntry = cellTypes.find(t => t.cellNum === cellType);
            cell.classList.add(...typeEntry.className);
        grid.appendChild(cell);
        cells.push(cell);
    })
}



function toggleMute() {
    isMuted = !isMuted;

    allSounds.forEach(sound => {
        sound.volume = isMuted ? 0 : defaultVolume;
    });
    muteButton.classList.toggle("muted", isMuted);
}



function addPacMan(layout){
    layout.forEach((cellType, index) =>{
        if (cellType === 3) {
            cells[index].classList.add("pacman");
            pacmanStartingIndex = index;
            pacmanIndex = index;
        }
    })
}



function addGhosts(layout){
    let ghostSpawns = [];
    layout.forEach((cellType, index) =>{
        if (cellType === 4){
            ghostSpawns.push(index);
        }
    })
    ghosts.forEach((ghost, index) =>{
        cells[ghostSpawns[index]].classList.add(ghost.className);
        ghost.index = ghostSpawns[index]
        ghost.startingIndex = ghost.index
    })
}




function moveOneGhostFromSpawnRoom(ghostObj, delay){
    stopGhost(ghostObj);
    ghostObj.timeOut = setTimeout(()=>{
        ghostObj.interval = setInterval(()=>{
            if(cells[ghostObj.index].classList.contains("spawnPoint")){
                clearInterval(
                ghostObj.interval);
                ghostObj.interval = 0
                moveGhost(ghostObj)
            }
            else{
                let newPosition = ghostObj.index - mapWidth;
                cells[ghostObj.index].classList.remove(ghostObj.className)
                cells[newPosition].classList.add(ghostObj.className)
                ghostObj.index -= mapWidth
            }
        }, ghostObj.speed)
    }, delay)
}

function moveAllGhostsFromSpawnRoom(){
    ghosts.forEach((ghost)=>{
        moveOneGhostFromSpawnRoom(ghost, ghost.delay)
    })
}


function init(){
    gameIsRunning = true;
    lives = 3
    setHearts()
    scoreDisplay.innerHTML = score
}

function startGame(){
    startScreen.style.display = "none",
    createMap(currentMap)
    calculatePellets(currentMap)
    addPlayerName()
    addPacMan(currentMap)
    addGhosts(currentMap)
    moveAllGhostsFromSpawnRoom()
    pacmanBeginning.play();
}

function calculatePellets(layout){
    pelletCount = 0
    layout.forEach((cell) => {
        if (cell === 0 || cell === 2){
            pelletCount += 1}
        
    })
}

let previousDir = "right";
function movePlayer(e){

    if(e.code === "KeyW" || e.code === "ArrowUp"){
        if (!cells[pacmanIndex-mapWidth].classList.contains("wall")){
            clearInterval(movementInterval)
            movementInterval = 0
            playerMoveLoop("up")
            changeRotation("up", previousDir)
        }}
    else if(e.code === "KeyA"){
        if (!cells[pacmanIndex-1].classList.contains("wall")){
            clearInterval(movementInterval)
            movementInterval = 0
            playerMoveLoop("left")
            changeRotation("left", previousDir)
        }
    }
    else if(e.code === "KeyS"){
        if (!cells[pacmanIndex + mapWidth].classList.contains("wall")){
            clearInterval(movementInterval)
            movementInterval = 0
            playerMoveLoop("down")
            changeRotation("down", previousDir)
        }}
    else if(e.code === "KeyD"){
        if (!cells[pacmanIndex+1].classList.contains("wall")){
            clearInterval(movementInterval)
            movementInterval = 0
            playerMoveLoop("right")
            changeRotation("right", previousDir)
        }}
    else{console.log("not valid input")}
} 

function changeRotation(dir){
    grid.classList.remove(previousDir)
    grid.classList.add(dir)
    previousDir = dir;
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
                previousPacmanIndex = pacmanIndex;
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
        munchSound.play();
    }
    else if (cells[pacmanIndex].classList.contains("powerPellet")){
        cells[pacmanIndex].classList.remove("powerPellet");
        score += 50
        pelletCount -= 1
        powerPellet()
    }
}



function powerPellet(){
    playerSpeed = powerSpeed
    powerPelletSound.currentTime = 0;
    powerPelletSound.play();
    grid.classList.add("scared")
    clearTimeout(powerPelletTimeout)
    powerPelletTimeout = setTimeout(()=>{
        playerSpeed = startingSpeed
        grid.classList.remove("scared")
    }, 9000)
}


function moveGhost(ghostObj){
    let validDirs = checkGhostDirections(ghostObj);
    let newDir = pickDirection(validDirs);
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

function stopGhost(ghostObj){
    if(ghostObj.interval){
        clearInterval(ghostObj.interval);
        ghostObj.interval=0;
    }
    if(ghostObj.timeOut){
        clearTimeout(ghostObj.timeOut);
        ghostObj.TimeOut = 0;
    }
}


function startGhostMovement(ghostObj, dir){
    if (!ghostObj.interval){
        ghostObj.interval = setInterval(() =>{
            let newPosition = movePosition(ghostObj, dir)
            if (!cells[newPosition].classList.contains("wall")){
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
    if(grid.classList.contains("scared")&&cells[ghostObj.index].classList.contains("pacman")){
        eatGhost(ghostObj)
    }
    else if(cells[ghostObj.index].classList.contains("pacman")){
        loseLife()
    }
}

function checkForGhost(){
    const collidedGhost = ghosts.find(ghost=> ghost.index === pacmanIndex)
    if(grid.classList.contains("scared") && collidedGhost){
        score += 100
        eatGhost(collidedGhost)
    }
    else if(ghosts.some(ghost => cells[pacmanIndex].classList.contains(ghost.className))){
        loseLife()
    }
}

function eatGhost(ghostObj){
    stopGhost(ghostObj)
    PacmanEatGhost.play();
    cells[ghostObj.index].classList.remove("scaredGhost", ghostObj.className)
    ghostObj.index = ghostObj.startingIndex;
    setTimeout(()=>{
        cells[ghostObj.startingIndex].classList.add(ghostObj.className);
        moveOneGhostFromSpawnRoom(ghostObj, 4000)
    },1000)
}

function loseLife(){
    document.removeEventListener("keydown", movePlayer)
    clearInterval(movementInterval)
    movementInterval = 0;
    ghosts.forEach((ghost)=>{
        stopGhost(ghost)
    })
    lives --;
    PacmanDeath.play();
    loseHeart()
    if(lives===0){
        loseGame()
        gameIsRunning = false
    }
    else{resetPositions()}
}

function loseHeart(){
    let nextHeart = document.querySelector(".heart")
    nextHeart.classList.remove("heart")
    nextHeart.classList.add('greyHeart')
}

function resetPositions(){
    setTimeout(() => {
        removeAllSprites();
        addPacMan(currentMap)
        addGhosts(currentMap)
        activateSprites();
        moveAllGhostsFromSpawnRoom()
}, 2000)
}
function activateSprites(){
    document.addEventListener("keydown", movePlayer)
}

function wonGame(){
    clearInterval(movementInterval);
    removeAllSprites();
    movementInterval=0;
    PacmanIntermission.play();
    winScreen.style.display = "flex";
    finalScoreDisplay.innerHTML = score;
}

function loseGame(){
    loseScreen.style.display = "flex";
    loserScoreValue.innerHTML = score;
}

function restart(){
    hideDisplays()
    lives = 3
    score = 0
    gameIsRunning = true;
    setHearts()
    scoreDisplay.innerHTML = score
    removeAllSprites()
    addPacMan(currentMap)
    document.addEventListener("keydown", movePlayer)
    addGhosts(currentMap)
    addPellets(currentMap)
    calculatePellets(currentMap)
    moveAllGhostsFromSpawnRoom()
}

function hideDisplays(){
    loseScreen.style.display = "none";
    winScreen.style.display = "none";
}

function removeAllSprites() {
    const ghostClasses = []
    ghosts.forEach((ghost)=>{
        ghostClasses.push(ghost.className)
    })
    cells.forEach(cell => {
        cell.classList.remove("pacman", ...ghostClasses, "scaredGhost");
    });
}


function setHearts() {
    const allHearts = document.querySelectorAll(".lives div");
    allHearts.forEach(heart => {
        heart.classList.remove("greyHeart");
        heart.classList.add("heart");
    });
}

function addPellets(layout){
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

function addPlayerName(){
    const name = nameInput.value.toUpperCase()
    playerName = name
    console.log(name)
}



document.addEventListener("keydown", movePlayer)

tryAgainButton.addEventListener("click", restart)
playAgainButton.addEventListener("click", restart)
muteButton.addEventListener("click", toggleMute)
startButton.addEventListener("click", startGame)

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
// function addRedGhost(layout){
//     layout.forEach((cellType, index) =>{
//         if (cellType === 4) {
//             cells[index].classList.add("redGhost");
//             redGhost.startingIndex = index
//             redGhost.index = index;
//         }
//     })
// }

// function moveGhostsFromSpawnRoom(){
//     ghosts.forEach((ghost, idx)=>{
//         stopGhost(ghost);
//         let delay = idx * 1000
//         ghostTimeOut = setTimeout(() =>{
//             if(gameIsRunning){
//             stopGhost(ghost)
//             if(!ghost.interval){
//                 ghost.interval = setInterval(()=>{
//                     if (cells[ghost.index].classList.contains("spawnPoint")){
//                         clearInterval(ghost.interval);
//                         ghost.interval = 0;
//                         moveGhost(ghost)
//                     }
//                     else{
//                         let newPosition = ghost.index - mapWidth;
//                         cells[ghost.index].classList.remove(ghost.className)
//                         cells[newPosition].classList.add(ghost.className)
//                         ghost.index -= mapWidth
//                     }
//                 }, ghost.speed)
//             }}
            
//         }, delay)})
    
// }


// function createMap(layout) {
//     layout.forEach((cellType, index) => {
//         const cell = document.createElement("div");
//         cell.dataset.index = index;
//         cell.classList.add("cell")

//         if (cellType === 1) {
//         cell.classList.add("wall");
//         } 
//         else if (cellType === 0) {
//         cell.classList.add("path");
//         cell.classList.add("pellet");
//         }
//         else if(cellType === 2){
//             cell.classList.add("path");
//             cell.classList.add("powerPellet")
//         }
//         else if(cellType === 3) {
//             cell.classList.add("path");
//         }
//         else if(cellType === 4){
//             cell.classList.add("path")
//         }
//         else if (cellType === 5){
//             cell.classList.add("path", "pellet", "spawnPoint")
//         }

//         grid.appendChild(cell);
//         cells.push(cell);
//     });
// }

// function powerPellet(){
//     playerSpeed = powerSpeed
//     ghosts.forEach((ghost)=>{
//         cells[ghost.index].classList.add("scaredGhost")
//     })
//     clearTimeout(powerPelletTimeout)
//     powerPelletTimeout = setTimeout(()=>{
//         playerSpeed = startingSpeed
//         ghosts.forEach((ghost)=>{
//             cells[ghost.index].classList.remove("scaredGhost")
//         })
//     }, 5000)
// }