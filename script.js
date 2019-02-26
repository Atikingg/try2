var canvas = document.getElementById('canvas')
var context = canvas.getContext('2d')

var tiles = new Image()
tiles.src = "img/tiles.png"

var sprite = new Image()
sprite.src = "img/sprite.png"


var rightPressed = false
var leftPressed = false
var upPressed = false
var downPressed = false
var pers = {x : 0, y : 0, width: 10, height: 10}
var water = {x: 0, y: 0, count: 0}
var dx = 1
var dy = 1

var tileSize = 40
var tileLength = 20
var tileHeight = 9
var tilesAmount = 5
var tileName
var tileRow
var tileCol







var locate = [
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
[2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
[2,4,4,4,4,4,4,4,4,2,4,4,4,4,4,4,4,4,4,2],
[2,4,4,4,4,4,4,4,4,2,4,4,4,4,4,4,4,4,4,2],
[2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
[2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
[2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
[2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
]



document.addEventListener("keyup", keyUpHandler, false)
document.addEventListener("keydown", keyDownHandler, false)

function keyDownHandler(e) {
    if(e.key == "Right" || e.key == "ArrowRight") {
        rightPressed = true
    }
    else if(e.key == "Left" || e.key == "ArrowLeft") {
        leftPressed = true
    }
    if(e.key == "Up" || e.key == "ArrowUp") {
        upPressed = true
    }
    else if(e.key == "Down" || e.key == "ArrowDown") {
        downPressed = true
    }
}

function keyUpHandler(e) {
    if(e.key == "Right" || e.key == "ArrowRight") {
        rightPressed = false
    }
    else if(e.key == "Left" || e.key == "ArrowLeft") {
        leftPressed = false
    }
    if(e.key == "Up" || e.key == "ArrowUp") {
        upPressed = false
    }
    else if(e.key == "Down" || e.key == "ArrowDown") {
        downPressed = false
    }
}

tiles.onload = function () {
  draw()
}

function draw() {


  for (var i = 0; i < tileHeight; i++) {
    for (var j = 0; j < tileLength; j++) {
      tileName = locate[i][j]
      tileRow = (tileName / tilesAmount) | 0
      tileCol = (tileName % tilesAmount) | 0

      if (tileName == 0)
        context.drawImage(tiles, (tileCol * tileSize), (tileRow * tileSize), tileSize, tileSize, (j * tileSize), (i * tileSize), tileSize, tileSize)
      if (tileName == 1)
        context.drawImage(tiles, (tileCol * tileSize), (tileRow * tileSize), tileSize, tileSize, (j * tileSize), (i * tileSize), tileSize, tileSize)
      if (tileName == 2)
        context.drawImage(tiles, (tileCol * tileSize), (tileRow * tileSize), tileSize, tileSize, (j * tileSize), (i * tileSize), tileSize, tileSize)
      if (tileName == 3)
        context.drawImage(tiles, (tileCol * tileSize), (tileRow * tileSize), tileSize, tileSize, (j * tileSize), (i * tileSize), tileSize, tileSize)
      if (tileName == 4) {
        water.count++
        water.x = j * tileSize
        water.y = i * tileSize
        context.drawImage(tiles, (tileCol * tileSize), (tileRow * tileSize), tileSize, tileSize, water.x, water.y, tileSize, tileSize)
        if (pers.x == water.x && pers.y == water.y ) {
          dx = -1
          dy = -1
        }


      }

    }
  }


  context.drawImage(sprite, pers.x, pers.y, pers.width, pers.height)


    if (rightPressed && pers.x < tileLength * tileSize)
        pers.x += dx
    if (leftPressed && pers.x > 0)
        pers.x -= dx
    if (upPressed && pers.y > 0)
        pers.y -= dy
    if (downPressed && pers.y < tileHeight * tileSize)
        pers.y += dy


    requestAnimationFrame(draw)
}





//setInterval(draw, 30)
