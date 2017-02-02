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

var t = true;
var f = false;

var posGrid = [
[f,f,f,f,f,f,f,f,f,f,f,f,f,f,f],
[f,f,f,f,f,f,f,f,f,f,f,f,f,f,f],
[f,f,f,f,f,f,f,f,f,f,f,f,f,f,f],
[f,f,f,f,f,f,f,f,f,f,f,f,f,f,f],
[f,f,f,f,f,f,f,f,f,f,f,f,f,f,f],
[f,f,f,f,f,f,f,f,f,f,f,f,f,f,f],
[f,f,f,f,f,f,f,f,f,f,f,f,f,f,f],
[f,f,f,f,f,f,f,f,f,f,f,f,f,f,f],
[f,f,f,f,f,f,f,f,f,f,f,f,f,f,f],
[f,f,f,f,f,f,f,f,f,f,f,f,f,f,f],
[f,f,f,f,f,f,f,f,f,f,f,f,f,f,f],
[f,f,f,f,f,f,f,f,f,f,f,f,f,f,f],
[f,f,f,f,f,f,f,f,f,f,f,f,f,f,f],
[f,f,f,f,f,f,f,f,f,f,f,f,f,f,f],
[f,f,f,f,f,f,f,f,f,f,f,f,f,f,f],

];

// var checkWord = require('check-word');
// words     = checkWord('en');
// console.log(words.check('perro'));
// 'n' = 'normal cell';
// 'G' = 'double letter cell';
// 'B' = 'tripple letter cell';
// 'Y' = 'double word cell';
// 'R' = 'tripple word cell';
// 'S' = 'start point';

for(var i = 0; i < boardGrid.length; i++) {
    var boardGrids = boardGrid[i];
    for(var j = 0; j < boardGrids.length; j++) {
        var cellN = $("<div>").addClass('cellN').attr('ondrop','drop(event)').attr('ondragover','allowDrop(event)')
        var cellG = $("<div>").addClass('cellG').attr('ondrop','drop(event)').attr('ondragover','allowDrop(event)').text('DL');
        var cellB = $("<div>").addClass('cellB').attr('ondrop','drop(event)').attr('ondragover','allowDrop(event)').text('TL');
        var cellY = $("<div>").addClass('cellY').attr('ondrop','drop(event)').attr('ondragover','allowDrop(event)').text('DW');
        var cellR = $("<div>").addClass('cellR').attr('ondrop','drop(event)').attr('ondragover','allowDrop(event)').text('TW');
        var cellS = $("<div>").addClass('cellS').attr('ondrop','drop(event)').attr('ondragover','allowDrop(event)').text('S');
        if (boardGrid[i][j] === 'n') {$('.board').append(cellN.attr('id', i+'-'+j));}
        else if (boardGrid[i][j] === 'G') {$('.board').append(cellG.attr('id', i+'-'+j));}
        else if (boardGrid[i][j] === 'B') {$('.board').append(cellB.attr('id', i+'-'+j));}
        else if (boardGrid[i][j] === 'Y') {$('.board').append(cellY.attr('id', i+'-'+j));}
        else if (boardGrid[i][j] === 'R') {$('.board').append(cellR.attr('id', i+'-'+j));}
        else {$('.board').append(cellS.attr('id', i+'-'+j));}
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
'F','F','G','G','G','H','H','I','I','I','I','I','I','I','I','I','K','L','L','L','L',
'M','M','N','N','N','N','N','N','O','O','O','O','O','O','O','O','P','P','Q',
'R','R','R','R','R','R','S','S','S','S','T','T','T','T','T','T','U','U','U','U',
'V','V','W','W','X','Y','Y','Z','?','?'];

var blankTile = ['A','B','D','E','F','G','H','I','k','L','M','N','O','P','Q',
'R','S','T','U','V','W','X','Y','Z'];

var tilesHolderPlayerOne = [];
var tilesHolderPlayerTwo = [];
var wordsCheck = [];

Game.prototype.drawTileToStart = function() {
  var randomLetter = tiles[Math.floor(Math.random()*tiles.length)];
  return randomLetter;
};


$( "#hidetiles" ).click(function() {
  $( ".tileholder" ).toggle("slide", {direction: "left" }, 1000);
});

$( "#hidetilesplayer2" ).click(function() {
  $( ".tileholderPlayerTwo" ).toggle("slide", {direction: "right" }, 1000);
});

Game.prototype.shuffleTiles = function(array) {
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

Game.prototype.takeTile = function() {

   var randomTile = Game.prototype.shuffleTiles(tiles).pop();
   if (tiles.length === 0) {
     return;
  }
    document.getElementById("tilesleft").innerHTML = "Tiles left " + tiles.length;
   return randomTile;
};


Game.prototype.RandomLetters = function(tiles) {
   return Math.floor(Math.random() * (10000)) + 1;
};

// Game.prototype.CreateTilesHolder = function() {
//    var tilesOnBoard = $('.tileholder').children().length;
//    for (var i = tilesOnBoard; i  < 7; i++) {
//      if(Game.prototype.takeTile() === '?') {
//         var newBlankTile = $("<span>").addClass('blank').attr( 'id', 'tilesnumber' +
//         Game.prototype.RandomLetters() ).attr('draggable','true').attr('ondragstart','drag(event)');
//         $('.tileholder').append(newBlankTile);
//         $(newBlankTile).click(chooseLetter);
//    }
//      else {var newTile = $("<span>").addClass('tile').attr( 'id', 'tilesnummer' +
//         Game.prototype.RandomLetters() ).attr('draggable','true').attr('ondragstart','drag(event)').text(Game.prototype.takeTile());
//         $('.tileholder').append(newTile);
//     }
//   }
// };

Game.prototype.CreateTilesHolder = function() {
   var tilesOnBoard = $('.tileholder').children().length;
   for (var i = tilesOnBoard; i  < 7; i++) {
        var newTile = $("<span>").addClass('tile').attr( 'id', 'tilesnummer' +
        Game.prototype.RandomLetters() ).attr('draggable','true').attr('ondragstart','drag(event)').text(Game.prototype.takeTile());
        $('.tileholder').append(newTile);
        // if(document.getElementsByClassName('tile')[i].textContent === '?')
        // {$('.tile'[i].addClass('blank'));}
   }

};

Game.prototype.tileholderPlayerTwo = function() {
   var tilesOnBoard = $('.tileholderPlayerTwo').children().length;
   for (var i = tilesOnBoard; i  < 7; i++) {
        var newTile = $("<span>").addClass('tile').attr( 'id', 'tilesnummer' +
        Game.prototype.RandomLetters() ).attr('draggable','true').attr('ondragstart','drag(event)').text(Game.prototype.takeTile());
        $('.tileholderPlayerTwo').append(newTile);
        // if(document.getElementsByClassName('tile')[i].textContent === '?')
        // {$('.tile').addClass('blank');}


        // if(document.getElementsByClassName('tile')[i].textContent === '?')
        // {var newBlankTile = $("<span>").addClass('blank').attr( 'id', 'tilesnumber' +
        //   Game.prototype.RandomLetters() ).attr('draggable','true').attr('ondragstart','drag(event)');
        //   $('.tileholder').append(newBlankTile);
        //     $(newBlankTile).click(chooseLetter);}
   }

};



// Game.prototype.createTilesHolder2 = function() {
//    var tilesOnBoard = $('.tileholderPlayerTwo').children().length;
//    for (var i = tilesOnBoard; i  < 7; i++) {
//      if(Game.prototype.takeTile() === '?') {
//         var newBlankTile = $("<span>").addClass('blank').attr( 'id', 'tilesnumber' +
//         Game.prototype.RandomLetters() ).attr('draggable','true').attr('ondragstart','drag(event)');
//         $('.tileholderPlayerTwo').append(newBlankTile);
//         $(newBlankTile).click(chooseLetter);
//    }
//      else {var newTile = $("<span>").addClass('tile').attr( 'id', 'tilesnummer' +
//         Game.prototype.RandomLetters() ).attr('draggable','true').attr('ondragstart','drag(event)').text(Game.prototype.takeTile());
//         $('.tileholderPlayerTwo').append(newTile);
//     }
//
//   }
//
// };


var chooseLetter = function(event) {
    var newLetter =  prompt('Choose letter');
    var newLetterCapital = newLetter.toUpperCase();
    return $(this).text(newLetterCapital);
};

    function allowDrop(ev) {
    for(var i = 0; i < boardGrid.length; i++) {
    var boardGrids = boardGrid[i];
    for(var j = 0; j < boardGrids.length; j++) {
      if(posGrid[i][j] === f) {if(ev.target.className === 'cellS' ){
      ev.preventDefault();}}
      else {ev.preventDefault()}}}}
// ev.preventDefault();}

    function drag(ev) {
        ev.dataTransfer.setData("dragged-id", ev.target.id);
        ev.dataTransfer.setData("value", ev.target.textContent);

        if (ev.target.parentElement.id !== '') {
          idParentDivSplit = ev.target.parentElement.id.split('-');
          posGrid[parseInt(idParentDivSplit[0])][parseInt(idParentDivSplit[1])] = f;
        }
}

var idParentDiv = '';
var checkWordLeftToRightArray = [];
var arrayRedCel = [];
    wordsArray = [];
    function drop(ev) {
        ev.preventDefault();

        var data = ev.dataTransfer.getData("dragged-id");
        var valueSpanElement = ev.dataTransfer.getData("value");
        idParentDiv = ev.target.id ;
        ev.target.textContent = '';
        ev.target.appendChild(document.getElementById(data));
        var valueRightSpanElement = '';
        idParentDivSplit = idParentDiv.split('-');
         posGrid[parseInt(idParentDivSplit[0])][parseInt(idParentDivSplit[1])] = valueSpanElement;
         checkWordLeftToRightArray.push(idParentDivSplit);
        if(ev.target.className === 'cellR') {arrayRedCel.push(3) ;console.log(arrayRedCel);}
        else if (ev.target.className === 'cellG') {wordsArray.push(valueSpanElement) ;console.log(valueSpanElement);}
        else if (ev.target.className === 'cellB') {wordsArray.push(valueSpanElement);wordsArray.push(valueSpanElement);console.log(valueSpanElement);}
}

wordCheck = '';

function checkLeftToRight(){
if(posGrid[parseInt(checkWordLeftToRightArray[0][0])][parseInt(checkWordLeftToRightArray[0][1]) + 1] === f) {return;} else {
for(var i = 0; posGrid[parseInt(checkWordLeftToRightArray[0][0])][parseInt(checkWordLeftToRightArray[0][1]) + i] !== f; i++) {
          wordsArray.push(posGrid[parseInt(checkWordLeftToRightArray[0][0])][parseInt(checkWordLeftToRightArray[0][1]) + i]);
        }}
 console.log(wordsArray);
// wordCheck = wordsArray.join('');
 return wordsArray;
 }

 function checkRighToLeft(){
 if(posGrid[parseInt(checkWordLeftToRightArray[0][0])][parseInt(checkWordLeftToRightArray[0][1]) - 1] === f) {return;} else {
 for(var i = 0; posGrid[parseInt(checkWordLeftToRightArray[0][0])][parseInt(checkWordLeftToRightArray[0][1]) - i] !== f; i++) {
           wordsArray.push(posGrid[parseInt(checkWordLeftToRightArray[0][0])][parseInt(checkWordLeftToRightArray[0][1]) - i]);
         }}
 // wordCheck = wordsArray.join('');
 console.log(wordsArray);
  return wordsArray;
  }

function topToBottom(){
if(posGrid[parseInt(checkWordLeftToRightArray[0][0]) + 1][parseInt(checkWordLeftToRightArray[0][1])] === f) {return;} else {
for(var i = 0; posGrid[parseInt(checkWordLeftToRightArray[0][0]) + i][parseInt(checkWordLeftToRightArray[0][1])] !== f; i++) {
          wordsArray.push(posGrid[parseInt(checkWordLeftToRightArray[0][0]) + i][parseInt(checkWordLeftToRightArray[0][1])]);
        } }
        wordCheck = wordsArray.join('');
 console.log(wordsArray);
   return wordsArray;
 // }

}

function bottomToTop(){
if(posGrid[parseInt(checkWordLeftToRightArray[0][0]) - 1][parseInt(checkWordLeftToRightArray[0][1])] === f) {return;} else {
for(var i = 0; posGrid[parseInt(checkWordLeftToRightArray[0][0]) - i][parseInt(checkWordLeftToRightArray[0][1])] !== f; i++) {
          wordsArray.push(posGrid[parseInt(checkWordLeftToRightArray[0][0]) - i][parseInt(checkWordLeftToRightArray[0][1])]);
        } }
        wordCheck = wordsArray.join('');
 console.log(wordsArray);
   return wordsArray;
 // }

}


function checkScore() {
  checkLeftToRight();
  topToBottom();
  checkRighToLeft();
  bottomToTop();
  score = 0;
for(var j = 0; j < wordsArray.length; j++) {
  if(wordsArray[j] === 'A') {
    score += 1;
} else if(wordsArray[j] === 'E') {
    score += 1;
} else if(wordsArray[j] === 'I') {
    score += 1;
} else if(wordsArray[j] === 'O') {
    score += 1;
} else if(wordsArray[j] === 'U') {
    score += 1;
} else if(wordsArray[j] === 'L') {
    score += 1;
} else if(wordsArray[j] === 'N') {
    score += 1;
} else if(wordsArray[j] === 'S') {
    score += 1;
} else if(wordsArray[j] === 'T') {
    score += 1;
} else if(wordsArray[j] === 'R') {
    score += 1;
} else if(wordsArray[j] === 'D') {
    score += 2;
} else if(wordsArray[j] === 'G') {
    score += 2;
} else if(wordsArray[j] === 'B') {
    score += 3;
} else if(wordsArray[j] === 'C') {
    score += 3;
} else if(wordsArray[j] === 'M') {
    score += 3;
} else if(wordsArray[j] === 'P') {
    score += 3;
} else if(wordsArray[j] === 'F') {
    score += 4;
} else if(wordsArray[j] === 'H') {
    score += 4;
} else if(wordsArray[j] === 'V') {
    score += 4;
} else if(wordsArray[j] === 'W') {
    score += 4;
} else if(wordsArray[j] === 'K') {
    score += 5;
} else if(wordsArray[j] === 'J') {
    score += 8;
} else if(wordsArray[j] === 'X') {
    score += 8;
} else if(wordsArray[j] === 'Q') {
    score += 10;
} else if(wordsArray[j] === 'Z') {
    score += 10;
}
}

checkWordLeftToRightArray = [];
wordsArray = [];
return score;
}

function checkScorePlayerTwo() {
  checkLeftToRight();
  topToBottom();
  checkRighToLeft();
  bottomToTop();
  score = 0;
for(var j = 0; j < wordsArray.length; j++) {
  if(wordsArray[j] === 'A') {
    score += 1;
} else if(wordsArray[j] === 'E') {
    score += 1;
} else if(wordsArray[j] === 'I') {
    score += 1;
} else if(wordsArray[j] === 'O') {
    score += 1;
} else if(wordsArray[j] === 'U') {
    score += 1;
} else if(wordsArray[j] === 'L') {
    score += 1;
} else if(wordsArray[j] === 'N') {
    score += 1;
} else if(wordsArray[j] === 'S') {
    score += 1;
} else if(wordsArray[j] === 'T') {
    score += 1;
} else if(wordsArray[j] === 'R') {
    score += 1;
} else if(wordsArray[j] === 'D') {
    score += 2;
} else if(wordsArray[j] === 'G') {
    score += 2;
} else if(wordsArray[j] === 'B') {
    score += 3;
} else if(wordsArray[j] === 'C') {
    score += 3;
} else if(wordsArray[j] === 'M') {
    score += 3;
} else if(wordsArray[j] === 'P') {
    score += 3;
} else if(wordsArray[j] === 'F') {
    score += 4;
} else if(wordsArray[j] === 'H') {
    score += 4;
} else if(wordsArray[j] === 'V') {
    score += 4;
} else if(wordsArray[j] === 'W') {
    score += 4;
} else if(wordsArray[j] === 'K') {
    score += 5;
} else if(wordsArray[j] === 'J') {
    score += 8;
} else if(wordsArray[j] === 'X') {
    score += 8;
} else if(wordsArray[j] === 'Q') {
    score += 10;
} else if(wordsArray[j] === 'Z') {
    score += 10;
}
}

checkWordLeftToRightArray = [];
wordsArray = [];
return score;
}



function pointsToScore(){
totalScorePlayerOne = checkScore();
// if (arrayRedCel.length === 1) {return totalScorePlayerOne * 3;}
pointsPlayerOne = parseInt(document.getElementById('scoreplayer1').textContent) + totalScorePlayerOne;
document.getElementById('scoreplayer1').innerHTML = pointsPlayerOne;
return pointsPlayerOne;
}

function pointsToScorePlayerTwo(){
var totalScorePlayerTwo = checkScorePlayerTwo();
var pointsPlayerTwo = parseInt(document.getElementById('scoreplayer2').textContent) + totalScorePlayerTwo;
document.getElementById('scoreplayer2').innerHTML = pointsPlayerTwo;
return pointsPlayerTwo;
}

function challange(){
  var scoreNew = parseInt(document.getElementById('scoreplayer2').textContent);
  var scoreNewPlayerOne = parseInt(document.getElementById('scoreplayer1').textContent);
      var wordCorrect =  prompt('Is the word correct?');
      if(wordCorrect === 'no') {
  document.getElementById('scoreplayer2').innerHTML =  scoreNew - score;
  document.getElementById('scoreplayer1').innerHTML =  scoreNewPlayerOne + score;}
  else if (wordCorrect === 'yes') {
document.getElementById('scoreplayer1').innerHTML =  scoreNew - score;
}
}

  function challangeTwo(){
    var scoreNew = parseInt(document.getElementById('scoreplayer1').textContent);
    var scoreNewTwo = parseInt(document.getElementById('scoreplayer2').textContent);
        var wordCorrect =  prompt('Is the word correct?');
        if(wordCorrect === 'no') {
    document.getElementById('scoreplayer1').innerHTML =  scoreNew - score;
    document.getElementById('scoreplayer2').innerHTML = scoreNewTwo + score;}
     else if (wordCorrect === 'yes') {
  document.getElementById('scoreplayer2').innerHTML =  scoreNewTwo - score;}}

// function onlyUnique(value, index, self) {
//     return self.indexOf(value) === index;
// }
//
// Game.prototype.CheckWord = function() {
//     var word = [];
//     var unique = wordsCheck.filter(onlyUnique);
//     for(var i = 0; i < unique.length; i++) {
//     word.push(unique[i].substr(unique[i].length - 1));
//     wordsCheck = [];
//     }
//   return word;
// };
