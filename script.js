var canvas = document.getElementById('canvas')
var context = canvas.getContext('2d')

var tiles = new Image();
tiles.src = "img/tiles.png"
var tileSize = 40
var tileLength = 20
var tileHeight = 20
var tilesAmount = 5

var locate = [
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
[2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
[4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4]
]

function draw() {
  for (var i = 0; i < tileLength; i++) {
    for (var j = 0; j < tileHeight; j++) {
      var tileName = locate[i][j]
      var tileRow = (tileName / tilesAmount) | 0
      var tileCol = (tileName % tilesAmount) | 0
      context.drawImage(tiles, (tileCol * tileSize), (tileRow * tileSize), tileSize, tileSize, (j * tileSize),(i * tileSize), tileSize, tileSize)
    }
  }
}

setInterval(draw,10)
