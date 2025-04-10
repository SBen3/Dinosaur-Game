import { Player } from "./player.js";
import { Background } from "./background.js";
import { Inputs } from "./input.js";
import { Bee, Ghost, YellowMonster, Monster } from "./enemies.js";
import { Text } from "./background-text.js";
import { EndOfGame } from "./endOfGame.js";

window.addEventListener("load", () => {
  let canvas = document.getElementById("canvas"),
    ctx = canvas.getContext("2d"),
    CANVAS_WIDTH = (canvas.width = 1265),
    CANVAS_HEIGHT = (canvas.height = 530);

  class Game {
    constructor() {
      this.width = CANVAS_WIDTH;
      this.height = CANVAS_HEIGHT;
      this.player = new Player(this);
      this.background = new Background(this);
      this.speed = 1;
      this.inputs = new Inputs(this);
      this.enemies = [];
      this.text = new Text(this);
      this.explotion = [];
      this.pluses = [];
      this.score = 0;
      this.lives = 5;
      this.dust = [];
      this.start = 0;
      this.time = 0;
      this.endOfGame = new EndOfGame(this);
      this.runGame = true;
    }
    addEnemies() {
      if (Math.random() > 0.999) {
        this.enemies.unshift(new Bee(this));
      }
      if (Math.random() > 0.9999) {
        this.enemies.unshift(new Ghost(this));
      }
      if (Math.random() > 0.999) {
        this.enemies.unshift(new YellowMonster(this));
      }
      if (Math.random() > 0.9999) {
        this.enemies.unshift(new Monster(this));
      }
    }
    draw(context) {
      /* Background */
      this.background.draw(context);
      this.enemies.forEach((enemy) => {
        enemy.draw(context);
      });

      /* Player */
      this.player.draw(context);

      /* Text */
      this.text.draw(context);

      /* Explotion */
      this.explotion.forEach((exp) => {
        exp.draw(context);
      });

      /* Pluses */
      this.pluses.forEach((plus) => {
        plus.draw(context);
      });

      /* Dust */
      this.dust.forEach((dust) => {
        dust.draw(context);
      });

      /* CheckCollision */
      this.player.checkCollision(context);

      /*End Of Game*/
      this.endOfGame.draw(context);
    }
    update(delta) {
      /* Background */
      this.background.update();

      /* Inputs */
      this.inputs.update();

      /* Enemy Adding Function */
      this.addEnemies();

      /* Enemies */
      this.enemies.forEach((enemy) => {
        enemy.update();
        if (enemy.markForDeletion) {
          this.enemies.splice(this.enemies.indexOf(enemy), 1);
        }
      });

      /* Player */
      this.player.update(delta);
      this.player.inputHandler(this.inputs);

      /* Explotion */
      this.explotion.forEach((exp) => {
        exp.update();
        if (exp.markForDeletion) {
          this.explotion.splice(this.explotion.indexOf(exp), 1);
        }
      });

      /* Pluses */
      this.pluses.forEach((plus) => {
        plus.update();
        if (plus.markForDeletion) {
          this.pluses.splice(this.pluses.indexOf(plus), 1);
        }
      });

      /* Dust */
      this.dust.forEach((dust) => {
        dust.update();
        if (dust.markForDeletion) {
          this.dust.splice(this.dust.indexOf(dust), 1);
        }
      });

      /* time */
      this.time += 0.02;
    }
  }

  let game = new Game();

  let animate = (time) => {
    let deltaTime = time - game.start;
    game.start = time;

    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    game.draw(ctx);
    game.update(deltaTime);

    if (game.runGame) {
      requestAnimationFrame(animate);
    } else {
      cancelAnimationFrame(animate);
    }
  };
  animate(0);
});
