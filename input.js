export class Inputs {
  constructor(game) {
    this.game = game;
    this.keys = [];
  }
  down(e) {
    if (
      (e.key === "ArrowUp" ||
        e.key === "ArrowDown" ||
        e.key === "ArrowLeft" ||
        e.key === "ArrowRight" ||
        e.key === "Enter" ||
        e.key === " ") &&
      this.keys.indexOf(e.key) === -1
    ) {
      this.keys.push(e.key);
      
    }
  }
  up(e) {
    if (
      e.key === "ArrowUp" ||
      e.key === "ArrowDown" ||
      e.key === "ArrowLeft" ||
      e.key === "ArrowRight" ||
      e.key === "Enter" || 
      e.key === " "
    ) {
      this.keys.splice(this.keys.indexOf(e.key), 1);
    }
  }
  update() {
    addEventListener("keydown", this.down.bind(this));
    addEventListener("keyup", this.up.bind(this));
  }
}
