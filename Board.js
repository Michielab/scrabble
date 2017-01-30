var boardGrid = [
['B','n','n','n','R','n','n','G','n','n','R','n','n','n','B',],
['n','G','n','n','n','B','n','n','n','B','n','n','n','G','n'],
['n','n','Y','n','n','n','G','n','G','n','n','n','Y','n','n'],
['n','n','n','B','n','n','n','Y','n','n','n','B','n','n','n'],
['R','n','n','n','Y','n','G','n','G','n','Y','n','n','n','R'],
['n','B','n','n','n','B','n','n','n','B','n','n','n','B','n'],
['n','n','G','n','G','n','n','n','n','n','G','n','G','n','n'],
['G','n','n','Y','n','n','n','S','n','n','n','Y','n','n','G'],
['n','n','G','n','G','n','n','n','n','n','G','n','G','n','n'],
['n','B','n','n','n','B','n','n','n','B','n','n','n','n','n'],
['R','n','n','n','Y','n','G','n','G','n','Y','n','n','n','R'],
['n','n','n','B','n','n','n','Y','n','n','n','B','n','n','n'],
['n','n','Y','n','n','n','G','n','G','n','n','n','Y','n','n'],
['n','G','n','n','n','B','n','n','n','B','n','n','n','G','n'],
['B','n','n','n','R','n','n','G','n','n','R','n','n','n','B'],
];

// 'n' = 'normal cell';
// 'G' = 'double letter cell';
// 'B' = 'tripple letter cell';
// 'Y' = 'double word cell';
// 'R' = 'tripple word cell';
// 'S' = 'start point';

for(var i = 0; i < boardGrid.length; i++) {
    var boardGrids = boardGrid[i];
    for(var j = 0; j < boardGrids.length; j++) {
        var cellN = $("<div>").addClass('cellN').attr('ondrop','drop(event)').attr('ondragover','allowDrop(event)');
        var cellG = $("<div>").addClass('cellG').attr('ondrop','drop(event)').attr('ondragover','allowDrop(event)').text('DL');
        var cellB = $("<div>").addClass('cellB').attr('ondrop','drop(event)').attr('ondragover','allowDrop(event)').text('TL');
        var cellY = $("<div>").addClass('cellY').attr('ondrop','drop(event)').attr('ondragover','allowDrop(event)').text('DW');
        var cellR = $("<div>").addClass('cellR').attr('ondrop','drop(event)').attr('ondragover','allowDrop(event)').text('TW');
        var cellS = $("<div>").addClass('cellS').attr('ondrop','drop(event)').attr('ondragover','allowDrop(event)').text('S');
        if (boardGrid[i][j] === 'n') {$('.board').append(cellN);}
        else if (boardGrid[i][j] === 'G') {$('.board').append(cellG);}
        else if (boardGrid[i][j] === 'B') {$('.board').append(cellB);}
        else if (boardGrid[i][j] === 'Y') {$('.board').append(cellY);}
        else if (boardGrid[i][j] === 'R') {$('.board').append(cellR);}
        else {$('.board').append(cellS);}
      }
  }




function Game (tiles) {
  this.tiles = [];
  this.blankTile = [];
  this.tilesHolder = [];
  this.randomLetter = randomLetter;
}

var tiles = ['A','A','A','A','A','A','A','A','A','B','B',
'C','C','D','D','D','D','E','E','E','E','E','E','E','E','E','E','E','E',
'F','F','G','G','G','H','H','I','I','I','I','I','I','I','I','I','k','L','L','L','L',
'M','M','N','N','N','N','N','N','O','O','O','O','O','O','O','O','P','P','Q',
'R','R','R','R','R','R','S','S','S','S','T','T','T','T','T','T','U','U','U','U',
'V','V','W','W','X','Y','Y','Z','',''];

var blankTile = ['A','B','D','E','F','G','H','I','k','L','M','N','O','P','Q',
'R','S','T','U','V','W','X','Y','Z'];

var tilesHolderPlayerOne = [];
var tilesHolderPlayerTwo = [];

Game.prototype.drawTileToStart = function () {
  var randomLetter = tiles[Math.floor(Math.random()*tiles.length)];
return randomLetter;
};

// Game.prototype.pickLetterBlankTile = function () {
//   var randomLetter = tiles[Math.floor(Math.random()*tiles.length)];
// return randomLetter;
// };

Game.prototype.shuffleTiles = function (array) {
  var currentIndex = array.length, temporaryValue, randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
};

Game.prototype.takeTile = function () {

   var randomTile = Game.prototype.shuffleTiles(tiles).pop();
   if (tiles.length === 0) {
     alert('There are no more tiles left!');}
    document.getElementById("tilesleft").innerHTML = "Tiles left " + tiles.length;
   return randomTile;
};

// Game.prototype.fillTilesHolder = function () {
//    while (tilesHolderPlayerOne.length < 7) {
//     tilesHolderPlayerOne.push(Game.prototype.takeTile());}
//    return tilesHolderPlayerOne;
// };


Game.prototype.CreateTilesHolder = function () {
   for (var i = 0; i < 7; i++) {
   var tile = $("<span>").addClass('tile').attr( 'id', 'tilesnummer' + [i] + [i + 1] ).attr('draggable','true').attr('ondragstart','drag(event)').text(Game.prototype.takeTile());
      $('.tileholder').append(tile);

  }

};






// function allowDrop(event) {
//     event.preventDefault();
// }
//
// function drag(event) {
//     event.dataTransfer.setData("text", event.target.className);
// }
//
// function drop(event) {
//     event.preventDefault();
//     var data = event.dataTransfer.getData("text");
//     event.target.appendChild(document.getElementsByClassName(data)[0]);
// }


function allowDrop(ev) {
        ev.preventDefault();
    }

    function drag(ev) {
        ev.dataTransfer.setData("dragged-id", ev.target.id);

    }

    function drop(ev) {
        ev.preventDefault();
        var data = ev.dataTransfer.getData("dragged-id");
        ev.target.appendChild(document.getElementById(data));
    }









// function allowDrop(ev) {
//     ev.preventDefault();
// }
//
// function drag(ev) {
//     ev.dataTransfer.setData("text", ev.target.id);
// }
//
// function drop(ev) {
//     ev.preventDefault();
//     var data = ev.dataTransfer.getData("text");
//     ev.target.appendChild(document.getElementById(data));
// }
//
//
//
// <div id="div1" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
// <br>
// <img id="drag1" src="img_logo.gif" draggable="true" ondragstart="drag(event)" width="336" height="69">
//
//
//
// $( ".tile" ).on( "click", function() {
//  var moveTile = $(this).detach();
//  moveTile.appendTo('click').on( "click", function(){});




// $( ".tile" ).on( "click", function() {
//   console.log( $(this).text() );
// });



  // console.log(tile);
  //   $('.tileholder').append(tile);

  // var tile = $("<div>").addClass('tile').text(Game.prototype.takeTile());



// on('click', function ())
// $(this).attr('data-col')
