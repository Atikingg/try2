var canvas = document.getElementById('canvas')
var context = canvas.getContext('2d')

var tiles = new Image();
tiles.src = "img/tiles.png"
var tileSize = 10
var rowTile = 5
var columnTile = 5
var tilesAmount = 2
var tile = 0

function draw() {
  for (var r = 0; r < tilesAmount; r++) {
    for (var c = 0; c < columnTile; c++) {
      tile = ground[r][c]
    }
  }
}

var tileRow = (tile / tilesAmount) | 0
var tileCow = (tile % tilesAmount) | 0
