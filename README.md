# PAC-MAN-Project

# Description
This is my version of the classic game, Pac-Man. The goal for this is to be faithful to the feel of the original game.

# Deployment Link


# Getting Started/Code Installation


# TimeFrame & Working Team
This is a solo project completed within 7 days.

# Technologies Used
A browser based game using HTML, CSS and JavaScript.

# Brief
The brief was to pick a game to code from scratch.

# Planning


# Build/Code Process
The process for building this was to first establish the basic mechanics for the game then build on top of that from there.

The most fundamental parts were building the map and movement mechanics. This was achieved by creating a grid of divs, assigning them classes for paths, walls, pacman etc. then using those classes to build the more complex mechanics like movement which removes and adds the class to and from the divs based on movement direction.

The player movement was broken into four functions:

Determines movement direction based on input
```
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
```

```
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
```
```
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
```


# Challenges


# Wins


# Key Learnings/Takeaways


# Bugs


# Future Improvements