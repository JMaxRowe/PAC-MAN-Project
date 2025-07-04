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
The brief was to pick a game to code from scratch, I chose pacman.

# Planning
In my notebook I broke the planning down into several stages:

1. grid layout.
    I knew I wanted to move pacman and ghosts around by passing classes around divs, so I decided to make the map using a function that would create divs and assign classes based on an array of numbers.

2. Movement.
    I planed to create functions to add and remove the class for pacman/a ghost to and from the divs which would determine what CSS styling is being expressed, making it look like pacman is moving around the grid.

3. Design.
    After researching (playing pacman), I knew I needed a high contrast, simple design dominated by a blue/yellow colour scheme (with a few pops of red). I also wanted to keep the retro feel so I aimed to use 8-bit style fonts and images for the ghosts and other icons.
    The general layout of the page would be simple. A title up top, the map in the center with the lives and score above. I wanted to keep the screen around the game itself as uncluttered as possible while still providing important information.

4. Potential difficulties.
    Thinking about the logic of the game I listed down the aspects that I thought would be the most difficult to work out.

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

Before the ghost movement, I had added the pellets (by adding a class to the divs that would have pellets on them) and written the `eatPellet()` function which removed the class and added points. This gave me a win condition, but with the ghost in the game I could now have my lose condition.

I implimented this by getting both the ghost and pacman to check if each others' classes were on the same div. if so then I would reset their positions and reduce the player's lives by one and reflect that by changing the classes for one of the heart divs.

```function checkForPacman(ghostObj){
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
```

Now the game could be played on its most basic level, so it was time to add the Power Pellet.

This pellet is very similar to a regular one, but with its own class which allowed me to check for it in `eatPellet`. When pacman ate a Power Pellet, his speed would increase, the ghosts would become scared (by adding a class to the entire grid), and when the ghost and pacman check for each other, they would first check to see if the ghosts were scared, and if they were then pacman would eat the ghost! I then used a `Timeout` to revert the changes after a set time.

The next major step towards the MVP would be to add more ghosts. First I would need to create a larger map. After a couple changes I ended up a 28x36 map which should give us plenty of space for the four ghosts.

As I had created the ghost object already looking ahead to adding more ghosts, I created objects for the rest, and used two `forEach` loops to add the ghost spawn locations to an array, then add a different ghost to each of those divs.

Now that the ghosts were added into a spawn room in the middle of the map, I had to get them out, so I wrote a function that made them move upwards, regardless of the walls, until they hit a div with the class `spawnCell`. This then halted their movement and triggered their normal movement function.

Then I had a great struggle to tinker and rewrite pieces of code that worked well for one ghost but fell apart when more than one was introduced to the mix. More details about this will the in the challenges section below.

Once I had all the ghosts in the game functioning properly, my final task before the MVP was done was to complete the sound. This was relatively simple as I could just download the pacman sound effects, add them to a `const` in the JavaScript and play the sound when the correct event occurred (like dying or eating a ghost). However, eating pellets was a struggle and I again will go into more details in the challenges section.

Now that I had the sounds done, I added a mute button, and a start screen which asks for you to input a three letter name as I planned on creating a high score system later on.

I then made Pacman rotate by giving his four possible background images and switching between them by adding a class to the grid like with the scared ghost class. I chose to add this to the grid not to pacman as I had previously been rotating each div and trying to rotate them back after which created lots of mess with gaps between the divs and divs not rotating back.
I then decided to take a completely different path and just apply the class to the grid so that if something strange did happen with the movement, he would stay in the same orientation until the player changes direction.


# Challenges
Multiple ghosts:
    Introducing multiple ghosts created a few issues. The largest issue was that the function I wrote to move 


# Wins
1. Movement
    Getting the movement working with collision detection then making the code more adaptable by being able to pass the ghost object through was a big win. That was really the core mechanic of the game and getting that down and have it be so flexible made further changes much easier to impliment.

2. Design
    I think the design encapsulated the feeling of pacman well, and it doesn't feel too messy or cluttered to me, it feels like pacman.

# Key Learnings/Takeaways
1. Future-proofing.
    While I did always plan on starting small and building the game up, I found some of my functions needed major reworking when I added more ghosts. Another thing was that some parts I hardcoded just to get the red ghost moving, but that was me wanting to be quicker now but giving myself more work later on.
2. Looking for simpler solutions.
    A good example for this is the issue where scared ghosts would run through each other, removing the scared ghost class from one. My initial instinct was to create collision detection between ghosts to get around this, but my tutor sam suggested just applying the scared class to the grid, which was a much simpler solution which tackled the actual problem.

# Bugs
1. Sometimes (very rarely) the pacman/ghost image will appear in front of the game over screen instead of behind it.

2. increased player speed from power pellet only starts/ends when player hits a wall or turns. Need to reset

3. The pellet eating sound has a buffer between each sound, which means the clips can't play back to back and therefore sound disjointed. I've tried several workarounds but haven't found a fix yet.

# Future Improvements
Ghost Algorithm:
    This was one of the main reasons I wanted to tackle the project, and after some setbacks I was working on it in the last day or so but couldn't complete it unfortunately. The plan is to calculate the distance and direction between the ghost and pacman, then call one of two functions. One function would be to chase the pacman by moving in a direction which would reduce the distance between them. The other function would run only if the scared class was applied to the grid, which would make them try to run away from pacman by moving in a direction that increases the distance between the two.

HighScore
    I'm planning on adding a high score section which will locally save the top 20 scores, this is why the start screen promps you for a three letter name then saves it to variable.