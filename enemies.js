class Enemy {
  constructor(game) {
    this.game = game;
    this.width = 40;
    this.height = 40;
    this.spriteX = 0;
    this.spriteY = 0;
    this.start = 0;
    this.end = 10;
    this.speed = .5;
    this.markForDeletion = false;
    this.sinX = 0;
  }
  draw(context) {
    context.drawImage(
      this.image,
      this.spriteX * this.spriteWidth,
      this.spriteY,
      this.spriteWidth,
      this.spriteHeight,
      this.x,
      this.y,
      this.width,
      this.height
    );
  }
  update() {
    if (this.start >= this.end) {
      if (this.spriteX >= this.setFrame) {
        this.spriteX = 0;
      } else {
        this.spriteX++;
      }
      this.start = 0;
    } else {
      this.start++;
    }
    /* Speed controll */
    if(this.game.speed === 0){
      this.x -= this.speed + this.game.speed;
    }else {
      this.x -= this.speed + this.game.speed *.5;
    }
    //
    if (this.x < -10) {
      this.markForDeletion = true;
    }
    //
    this.y += Math.sin(this.sinX);
  }
}

export class Bee extends Enemy {
  constructor(game) {
    super();
    this.game = game;

    this.spriteWidth = 273;
    this.spriteHeight = 282;
    this.x = this.game.width + 20;
    this.y = Math.random() * (this.game.height - 300) + 100;
    this.setFrame = 10;
    this.image = document.getElementById("bee");
  }
  draw(context) {
    super.draw(context);
  }
  update() {
    super.update();
    this.sinX += Math.random() * 0.15;
  }
}
export class Ghost extends Enemy {
  constructor(game) {
    super();
    this.game = game;

    this.spriteWidth = 396;
    this.spriteHeight = 582;
    this.width = 50;
    this.height = 80;
    this.x = this.game.width - 20;
    this.y = Math.random() * (this.game.height - 300) + 100;
    this.setFrame = 5;
    this.image = document.getElementById("ghost");
    this.speed = 1;
  }
  draw(context) {
    super.draw(context);
  }
  update() {
    super.update();
    this.sinX += Math.random() * 0.05;
  }
}
export class YellowMonster extends Enemy {
  constructor(game) {
    super();
    this.game = game;

    this.spriteWidth = 654;
    this.spriteHeight = 534;
    this.width = 60;
    this.height = 60;
    this.x = this.game.width - 20;
    this.y = this.game.height - this.height
    this.setFrame = 8;
    this.image = document.getElementById("yellowMonster");
    this.speed = 1;
    this.end =  5
  }
  draw(context) {
    super.draw(context);
  }
  update() {
    super.update();
  }
}
export class Monster extends Enemy {
  constructor(game) {
    super();
    this.game = game;

    this.spriteWidth = 1214;
    this.spriteHeight = 787;
    this.width = 60;
    this.height = 60;
    this.x = this.game.width - 20;
    this.y = this.game.height - this.height
    this.setFrame = 8;
    this.image = document.getElementById("monster");
    this.speed = 1;
    this.end =  5
  }
  draw(context) {
    super.draw(context);
  }
  update() {
    super.update();
  }
}
