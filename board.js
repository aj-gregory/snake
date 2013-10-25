(function () {
  var SnakeGame = window.SnakeGame = (window.SnakeGame || {});

  var Board = SnakeGame.Board = function() {
    this.snake = new SnakeGame.Snake();
    this.apples = this.makeApples();
  }

  Board.prototype.render = function() {
    this.grid = this.makeGrid(10, 10);
    for (var i = 0; i < this.snake.segments.length; i++) {
      segmentX = this.snake.segments[i][0];
      segmentY = this.snake.segments[i][1];
      this.grid[segmentX][segmentY] = "S";
    }
    for (var i = 0; i < this.apples.length; i++) {
      appleX = this.apples[i][0];
      appleY = this.apples[i][1];
      this.grid[appleX][appleY] = "A";
    }
    this.checkApples();
    return this.grid;
  }

  Board.prototype.makeGrid = function(length, width) {
    var grid = [];
    for (var i = 0; i < length; i++) {
      grid.push([])
      for (var j = 0; j < width; j++) {
        grid[i].push(".")
      }
    }
    return grid;
  }

  Board.prototype.makeApples = function(){
    var newApples = []
    while (newApples.length < 8){
      var randX = Math.floor(Math.random() * 10)
      var randY = Math.floor(Math.random() * 10)
      if (newApples.indexOf([randX, randY]) === -1){
         newApples.push([randX, randY]);
      }
    }
    return newApples;
  }

  Board.prototype.checkApples = function(){
    var snakeHeadX = this.snake.segments[0][0];
    var snakeHeadY = this.snake.segments[0][1];

    if (this.grid[snakeHeadX][snakeHeadY] === 'A'){
      this.grid[snakeHeadX][snakeHeadY] === '.';
      this.snake.eatApple();
    }
  }

  Board.prototype.step = function() {
    this.snake.move();
    return this.render();
  }


})();