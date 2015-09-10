describe('Bowling Card', function(){
  var BowlingGame = require('../src/bowlingGame');
  var game;
  beforeEach(function(){
    game = new BowlingGame(); 
  });
  
  it('scores 0 on a gutter game', function() {
    var pins = 0;
    var rolls = 20;
    rollMany(rolls, pins);
    expect(game.score()).toEqual(0);
  });
  
  it('scores 20 for a game of all ones', function() {
    var rolls = 20;
    var pins = 1;
    game = new BowlingGame();
    rollMany(rolls, pins);
    expect(game.score()).toEqual(20);
  });

  it('scores a single spare', function() {
    game = new BowlingGame();
    game.roll(5);
    game.roll(5);
    game.roll(3);
    rollMany(17,0);
    expect(game.score()).toEqual(16);
  });

  function rollMany(rolls, pins) {
    for(var i = 0; i < rolls; i++){
      game.roll(pins);
    };  
  };
});
