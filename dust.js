export class Dust {
  constructor(player) {
    this.player = player;
    this.x = this.player.x + this.player.width / 2;
    this.y = this.player.y + this.player.height + 5;
    this.size = Math.random() * 15 + 15;
    this.markForDeletion = false;
  }
  draw(context) {
    context.beginPath();
    context.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
    context.fillStyle = "#391a0412";
    context.fill();
  }
  update() {
    this.size *= 0.99;
    if (this.size < 5) {
      this.markForDeletion = true;
    }
    this.x--;
    this.y -= Math.random() * 1 - 0.1;
  }
}
