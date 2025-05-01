export class Text {
  constructor(game) {
    this.game = game;
    this.hurtImg = document.getElementById("hurt");
    this.starImg = document.getElementById("star");
    this.scoreImg = document.getElementById("score");
    this.livesImg = document.getElementById("lives");
    this.timeImg = document.getElementById("time");
    this.winImg = document.getElementById("win");
    this.gameoverImg = document.getElementById("gameover");
    this.dots = document.getElementById("dots");
  }
  draw(context) {
    context.fillStyle = "white";
    context.drawImage(this.scoreImg, 20, 20, 80, 40);
    context.drawImage(this.starImg, 170, 31, 20, 20);
    context.drawImage(this.dots, 90, 18, 40, 40);
    context.drawImage(this.livesImg, 20, 60, 80, 40);
    context.drawImage(this.dots, 90, 58, 40, 40);
    context.drawImage(this.timeImg, 20, 100, 80, 40);
    context.drawImage(this.dots, 90, 98, 40, 40);

    let i;
    for (i = 0; i < this.game.lives; i++) {
      context.drawImage(this.hurtImg, 130 + i * 25, 70, 20, 20);
    }

    context.font = "bold 25px lucida console";
    context.fillText(this.game.score , 130, 50);

    context.fillText(this.game.time.toFixed() + "/100", 130, 129);
  }
  winDraw(context) {
    context.drawImage(this.winImg, 190, 130, 900, 300);
  }
  lostDraw(context) {
    context.drawImage(this.gameoverImg, 260, 20, 700, 500);
  }
}
