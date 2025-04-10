class Layer {
  constructor(game, image, speed, width, height, x, y) {
    this.game = game;
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.image = image;
    this.speed = speed;
  }
  draw(context) {
    context.drawImage(this.image, this.x, this.y, this.width, this.height);
    context.drawImage(
      this.image,
      this.x + this.width,
      this.y,
      this.width,
      this.height
    );
  }
  update() {
    if (this.x < -this.width) {
      this.x = 0;
    } else {
      this.x -= this.game.speed * this.speed;
    }
  }
}
export class Background {
  constructor(game) {
    this.game = game;
    this.layerImg1 = document.getElementById("1");
    this.layerImg2 = document.getElementById("2");
    this.layerImg3 = document.getElementById("3");
    this.layerImg4 = document.getElementById("4");
    this.layerBg = document.getElementById("bg");

    this.layers = [
      new Layer(
        game,
        this.layerImg1,
        0.1,
        this.game.width,
        this.game.height,
        0,
        0
      ),
      new Layer(
        game,
        this.layerImg2,
        0.2,
        this.game.width,
        this.game.height,
        0,
        0
      ),
      new Layer(
        game,
        this.layerImg3,
        0.3,
        this.game.width,
        this.game.height,
        0,
        0
      ),
      new Layer(
        game,
        this.layerImg4,
        0.4,
        this.game.width,
        this.game.height,
        0,
        0
      ),
      new Layer(
        game,
        this.layerBg,
        0.5,
        this.game.width,
        this.game.height,
        0,
        0
      ),
    ];
  }
  draw(context) {
    this.layers.forEach((layer) => {
      layer.draw(context);
    });
  }
  update() {
    this.layers.forEach((layer) => {
      layer.update();
    });
  }
}
