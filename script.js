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
var persX = 0
var persY = 0
var dx = 4
var dy = 4

var tileSize = 40
var tileLength = 20
var tileHeight = 9
var tilesAmount = 5
var tileName = 0
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




function draw() {

  for (var i = 0; i < tileHeight; i++) {
    for (var j = 0; j < tileLength; j++) {
      tileName = locate[i][j]
      tileRow = (tileName / tilesAmount) | 0
      tileCol = (tileName % tilesAmount) | 0
      context.drawImage(tiles, (tileCol * tileSize), (tileRow * tileSize), tileSize, tileSize, (j * tileSize), (i * tileSize), tileSize, tileSize)
    }
  }

  context.drawImage(sprite, persX, persY)


  if (rightPressed && persX < tileLength * tileSize)
      persX += dx
  if (leftPressed && persX > 0)
      persX -= dx
  if (upPressed && persY > 0)
      persY -= dy
  if (downPressed && persY < tileHeight * tileSize)
      persY += dy


}


setInterval(draw,40)
