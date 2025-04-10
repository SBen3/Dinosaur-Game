export class Plus {
  constructor(player) {
    this.player = player;
    this.x = this.player.x + this.player.x / 8;
    this.y = this.player.y + this.player.y / 8;
    this.size = 30;
    this.plusImg = document.getElementById("plus");
    this.plusY = Math.random() + 0.5;
    this.markForDeletion = false;
  }
  draw(context) {
    context.drawImage(this.plusImg, this.x, this.y, this.size, this.size);
  }
  update() {
    this.x -= 2;
    this.y -= this.plusY;
    this.size *= 0.995;
    if (this.size < 8) {
      this.markForDeletion = true;
    }
  }
}
