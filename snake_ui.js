(function () {
  var SnakeGame = window.SnakeGame = (window.SnakeGame || {});

  var View = SnakeGame.View = function(viewElement){
    this.$e1 = $(viewElement);
  }

  View.prototype.start = function(){
    var board = new SnakeGame.Board();
    this.$e1.on('keydown', function(key){
      if (key.which === 38){
        board.snake.turn("N");
      }
      if (key.which === 40){
       // debugger
        board.snake.turn("S");
      }
      if (key.which === 37){
        board.snake.turn("W");
      }
      if (key.which === 39){
        board.snake.turn("E");
      }
    })
    setInterval(function(){
      $('.board').empty();
      var stepBoard = board.step();
      for (var i = 0; i < stepBoard.length; i ++){
        for (var j = 0; j < stepBoard[i].length; j++){
          if (stepBoard[i][j] === '.'){
             $('.board').append('<div class="blank"></div>')
          }
          else if (stepBoard[i][j] === 'S'){
            $('.board').append('<div class="snake"></div>')
          }
          else{
            $('.board').append('<div class="apple"></div>')
          }
        }
      }
    }, 500)
  }

})();