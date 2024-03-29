(function () {
  var Hanoi = window.Hanoi = (window.Hanoi || {});

  var Game = Hanoi.Game = function () {
    this.towers = [[2, 1, 0], [], []];
  };

  Game.prototype.isWon = function () {
    // move all the discs to the last tower
    return (this.towers[2].length == 3) || (this.towers[1].length == 3);
  };

  Game.prototype.isValidMove = function (startTowerIdx, endTowerIdx) {
    var startTower = this.towers[startTowerIdx];
    var endTower = this.towers[endTowerIdx];

    if (startTower.length === 0) {
      return false;
    } else if (endTower.length == 0) {
      return true;
    } else {
      var topStartDisc = startTower[startTower.length - 1];
      var topEndDisc = endTower[endTower.length - 1];
      return topStartDisc < topEndDisc;
    }
  };

  Game.prototype.move = function (startTowerIdx, endTowerIdx) {
    console.log("!!!!!!!!")
    if (this.isValidMove(startTowerIdx, endTowerIdx)) {
      this.towers[endTowerIdx].push(this.towers[startTowerIdx].pop());
      return true;
    } else {
      return false;
    }
  };

  Game.prototype.run = function () {
    var game = this;
    var startTowerIdx = null;
    $(document).ready(function(){
      $('.pile').click(function (el) {
        clickedPile = $(this).attr('data-id')
        if (startTowerIdx === null){
           startTowerIdx = parseInt(clickedPile);
         }
        else{
           endTowerIdx = parseInt(clickedPile);
           game.takeTurn(startTowerIdx,endTowerIdx);
           startTowerIdx = null;
           Hanoi_UI.render(game.towers);
        }
      });
    });
  };

  Game.prototype.takeTurn = function (start,end){
    var game = this;

    if (game.move(start,end)) {
      console.log(game.towers);
    } else {
      alert("Invalid move!")
    }

    if (game.isWon()) {
      alert("You win!");
    }
  }
})();

// this.Hanoi.Game is a constructor function, so we instantiate a new object, then run it.

var Game = new this.Hanoi.Game();
Game.run();
