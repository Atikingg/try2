var canvas = document.getElementById('canvas')
var context = canvas.getContext('2d')

var tiles = new Image();
tiles.src = "img/tiles.png"
var tileSize = 10
var rowTile = 5
var columnTile = 5
var tilesAmount = 2

function draw() {
  for (var r = 0; r < tilesAmount; r++) {
    for (var c = 0; c < columnTile; c++) {
      var tile = ground[r][c]
    }
  }
}

var tileRow = (tiles / tilesAmount) | 0
var tileCow = (tiles % tilesAmount) | 0
