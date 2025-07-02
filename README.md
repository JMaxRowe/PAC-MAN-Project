# PAC-MAN-Project

# Description
This is my version of the classic game, Pac-Man. The goal for this is to be faithful to the feel of the original game.

# Deployment Link
https://jmaxrowe.github.io/PAC-MAN-Project/

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

The player movement was broken into three functions and included collision detection (only with walls):


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

Originally this was made of 8 functions but as I kept going I realised ways to combine many of these functions while keeping the logic simple and each function not too difficult to read.

This has been one of my main aims when writing the functions in this project, ensuring the functions are understandable.

My next step was to build the ghost's functionality. The core of it's movement is much the same as pacman (this was where I first wrote the simpler movement code which I then used to simplify pacman's code). 

The difference is that the movement doesn't take an input, it first checks for available paths then randomly picks a valid direction to move in:

```function moveGhost(ghostObj){
    let validDirs = checkGhostDirections(ghostObj);
    let newDir = pickDirection(validDirs);
    startGhostMovement(ghostObj, newDir);
}
```

```function checkGhostDirections(ghostObj){
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
```

```function pickDirection(dirs){
    let randnum = Math.floor(Math.random() * dirs.length);
    return dirs[randnum]
}
```

```function startGhostMovement(ghostObj, dir){
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
```

```function movePosition(ghostObj, dir){
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
```

```function choosePath(ghostObj){
let directions = checkGhostDirections(ghostObj);
if (directions.length > 1){
    clearInterval(ghostObj.interval);
    ghostObj.interval = 0;
    let newDir = pickDirection(directions);
    startGhostMovement(ghostObj,newDir);
}
}
```

Originally I was hardcoding the ghost into this like I did with pacman, but since there are going to be multiple ghosts I wanted to use the same functions for all of their movement. I ended up changing how the ghost was described in the code by creating ghost objects(which you can see is passed through the various movement arguments). This was spurred on by me struggling to clear the interal in the `choosePath()` function when I tried to just use global variables.





# Challenges


# Wins


# Key Learnings/Takeaways


# Bugs


# Future Improvements