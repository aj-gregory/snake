(function () {
  var SnakeGame = window.SnakeGame = (window.SnakeGame || {});

  var Snake = SnakeGame.Snake = function() {
    this.dir = "N";
    this.segments = [[5, 5]];
  }

  Snake.prototype.move = function() {
    switch(this.dir) {
    case "N":
      for (var i = 0; i < this.segments.length; i++) {
        this.segments[i][0] -= 1;
      }
      break;
    case "S":
      for (var i = 0; i < this.segments.length; i++) {
        this.segments[i][0] += 1;
      }
      break;
    case "E":
      for (var i = 0; i < this.segments.length; i++) {
        this.segments[i][1] += 1;
      }
      break;
    case "W":
      for (var i = 0; i < this.segments.length; i++) {
        this.segments[i][1] -= 1;
      }
      break;
    }
  }

  Snake.prototype.turn = function(newDir) {
    this.dir = newDir;
  }

  Snake.prototype.eatApple = function() {
    var lastSegment = this.segments[this.segments.length - 1];
    var segmentToAdd = [];

    switch(this.dir) {
    case "N":
      segmentToAdd = [lastSegment[0] - 1, lastSegment[1]]
      this.segments.push(segmentToAdd);
      break;
    case "S":
      segmentToAdd = [lastSegment[0] + 1, lastSegment[1]]
      this.segments.push(segmentToAdd);
      break;
    case "E":
      segmentToAdd = [lastSegment[0], lastSegment[1] + 1]
      this.segments.push(segmentToAdd);
      break;
    case "W":
      segmentToAdd = [lastSegment[0], lastSegment[1] - 1]
      this.segments.push(segmentToAdd);
      break;
    }
  }



})();