export class Explotion {
  constructor(game, player, x, y) {
    this.game = game;
    this.player = player;
    this.expX = 0;
    this.expY = 0;
    this.expWidth = 274;
    this.expHeight = 361;
    this.x = x;
    this.y = y;
    this.width = 70;
    this.height = 100;
    this.img = document.getElementById("exp");
    this.setFrame = 6;
    this.start = 0;
    this.end = 4;
    this.markForDeletion = false;
  }
  draw(context) {
    context.drawImage(
      this.img,
      this.expX * this.expWidth,
      this.expY,
      this.expWidth,
      this.expHeight,
      this.x,
      this.y,
      this.width,
      this.height
    );
  }
  update() {
    if (this.start >= this.end) {
      if (this.expX >= this.setFrame) {
        this.expX = 0;
        this.markForDeletion = true;
      } else {
        this.expX++;
      }
      this.start = 0;
    } else {
      this.start++;
    }
  }
}
