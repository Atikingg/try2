var canvas = document.getElementById('canvas')
var context = canvas.getContext('2d')

var tiles = new Image();
tiles.src = "img/tiles.png"
var tileSize = 10
var rowTile = 20
var columnTile = 20
var tilesAmount = 2

var ground = [
[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
]

function draw() {
  for (var r = 0; r < tilesAmount; r++) {
    for (var c = 0; c < columnTile; c++) {
      var tile = ground[r][c]
      var tileRow = (tile / tilesAmount) | 0
      var tileCow = (tile % tilesAmount) | 0
      context.drawImage(tiles, (tileCow * tileSize), (tileRow * tileSize), tileSize, tileSize, (c * tileSize), (r * tileSize), tileSize, tileSize)
    }
  }
}

setInterval(draw, 10)
