(function() {
  var Hanoi_UI = window.Hanoi_UI = (window.Hanoi_UI || {});

  var render = Hanoi_UI.render = function (towers) {
    $(document).ready(function() {
      $('.grid-square').empty();
      for (var i = 0; i < towers.length; i++){
        var currentTower = towers[i];
        for (var j = 0; j < currentTower.length; j++){
         var tower = $('[data-loc="[' + i  +',' + j + ']"]')
         tower.append(
            "<div data-disc=" + currentTower[j] + " id=disc" + (currentTower[j] + 1) + "></div>"
          )
        }
      }
    });
  };



})();