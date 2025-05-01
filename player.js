import { Attack, Idle, Run, Jump, Walk, Hurt } from "./states.js";
import { Explotion } from "./explotion.js";
import { Plus } from "./scoreIncrease.js";

export class Player {
  constructor(game) {
    this.game = game;
    this.width = 200;
    this.height = 200;
    this.spriteWidth = 2400;
    this.spriteHeight = 1280;
    this.spriteX = 0;
    this.spriteY = 0;
    this.setFrame = 7;
    this.x = 0;
    this.y = this.game.height - this.height + 5;
    this.image = document.getElementById("player");
    this.states = [
      new Idle(this),
      new Walk(this),
      new Run(this),
      new Jump(this),
      new Attack(this),
      new Hurt(this),
    ];
    this.startState = this.states[1];
    this.enemies = [];
    this.start = 0;
    this.end = 70;
    this.vx = 0;
    this.vy = 0;
    this.weight = 0;
    this.startState.enter();
  }
  draw(context) {
    context.drawImage(
      this.image,
      this.spriteX * this.spriteWidth,
      this.spriteY * this.spriteHeight,
      this.spriteWidth,
      this.spriteHeight,
      this.x,
      this.y,
      this.width,
      this.height
    );
  }
  update(delta) {
    if (this.start > this.end) {
      if (this.spriteX >= this.setFrame) {
        this.spriteX = 0;
      } else {
        this.spriteX++;
      }
      this.start = 0;
    } else {
      this.start += delta;
    }
    /* horizontal movement */
    this.x += this.vx;
    if (this.game.inputs.keys.includes("ArrowRight")) {
      this.vx = 2;
    } else if (
      this.game.inputs.keys.includes("ArrowLeft") &&
      this.startState === this.states[1]
    ) {
      this.vx = -2;
    } else {
      this.vx = 0;
    }

    if(this.x >= this.game.width - this.width){
      this.x = this.game.width - this.width
    }else if (this.x < 0){
      this.x = 0
    }
    /* vertical movement */
    this.y -= this.vy;
    this.vy -= this.weight;
    if (this.game.inputs.keys.includes("ArrowUp") && this.onGround()) {
      this.vy = 13;
    }
    if (!this.onGround()) {
      this.weight = .5;
    }
    if (this.onGround()) {
      this.y = this.game.height - this.height + 5;
    }
  }
  onGround() {
    return this.y >= this.game.height - this.height + 5;
  }
  inputHandler(input) {
    this.startState.inputHandler(input);
  }
  setState(state, stateSpeed) {
    this.startState = this.states[state];
    this.startState.enter();
    this.game.speed = stateSpeed;
  }
  checkCollision() {
    this.game.enemies.forEach((enemy) => {
      if (
        this.x <= enemy.x &&
        this.x + this.width >= enemy.x + enemy.width &&
        this.y <= enemy.y &&
        this.y + this.height >= enemy.y + enemy.height
      ) {
        if (this.startState === this.states[4]) {
          this.game.explotion.unshift(
            new Explotion(this.game, this.player, enemy.x, enemy.y)
          );
          this.game.pluses.unshift(new Plus(this));
          enemy.markForDeletion = true;
          this.game.score++;
        } else {
          this.setState(5 , 0);
          enemy.markForDeletion = true;
          this.game.lives--;
        }
      }
    });
  }
}
