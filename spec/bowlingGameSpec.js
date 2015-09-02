describe('Bowling Card', function(){
  var BowlingGame = require('../src/bowlingGame');

  it('scores 0 on a gutter game', function() {
    var game = new BowlingGame();
    for(var i = 0; i < 20; i++){
      game.roll(0); 
    };
    expect(game.score).toEqual(0);
  });
  
  it('scores 20 for a game of all ones', function() {
    var game = new BowlingGame();
    for(var i = 0; i < 20; i++){
      game.roll(1); 
    };
    expect(game.score).toEqual(20);
  })
})
