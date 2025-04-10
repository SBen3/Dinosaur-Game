export class EndOfGame {
  constructor(game) {
    this.game = game;
  }
  draw(context) {
    if (this.game.time >= 50) {
      if (this.game.score >= 10) {
        this.game.text.winDraw(context);
      } else if (this.game.score <= 10) {
        this.game.text.lostDraw(context);
      }
      this.game.runGame = false;
    } else if (this.game.score >= 15) {
      this.game.text.winDraw(context);
      this.game.runGame = false;
    } else if (this.game.lives <= 0) {
      this.game.text.lostDraw(context);
      this.game.runGame = false;
    }
  }
}
